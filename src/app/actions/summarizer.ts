'use server'
import { CallAnalysis } from '@/lib/types';
import { GoogleGenerativeAI } from '@google/generative-ai'
import { saveCallAnalysis } from './CallAnalysis';

export async function summarize(formData: FormData): Promise<CallAnalysis> {
  const geminiApi = process.env.NEXT_GEMINI_API_KEY as string
  const genAI = new GoogleGenerativeAI(geminiApi);
  const audioFile = formData.get("file") as Blob;

  const promptText = await fetch("https://docs.google.com/document/d/1eSMhn6db3EoCFUz2dTd7Sa7CHrhqwpjbO6RCtKK_q7M/export?format=txt")
    .then(res => res.text());

  const buf = await audioFile.arrayBuffer();
  const bytes = new Uint8Array(buf);
  const bin = bytes.reduce((acc, byte) => acc += String.fromCharCode(byte), '');
  const b64 = btoa(bin);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: 'Return only a valid JSON object that follows the schema described in the prompt. Do not include any markdown or explanation. Only output the JSON object.if is null put a 0 or a empty string depending on the type of the value',
  });

  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: "audio/m4a",
        data: b64,
      },
    },
    {
      text: promptText,
    },
  ]);
  console.log(result)

  const formattedResult = result.response.candidates?.[0].content.parts?.[0].text?.replace(/```json|```/g, '').trim() || ''
  const resultObject: CallAnalysis = JSON.parse(formattedResult)

  const savedCall = await saveCallAnalysis(resultObject);
console.log("Call saved:", savedCall.id);

  return resultObject
}
