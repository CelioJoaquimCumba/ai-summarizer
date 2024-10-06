'use server'
import { GoogleGenerativeAI } from '@google/generative-ai'

export async function summarize(formData: FormData) : Promise<{summary: string, category: string, subCategory: string}> {
    const geminiApi = process.env.NEXT_GEMINI_API_KEY as string
    const genAI = new GoogleGenerativeAI(geminiApi);
    const audioFile = formData.get("file") as Blob;

    const buf     = await audioFile.arrayBuffer();
    const bytes   = new Uint8Array(buf);
    const bin     = bytes.reduce((acc,byte)=>acc+=String.fromCharCode(byte),'');
    const b64     = btoa(bin);
    console.log(64)

    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: 'return a json object with the following properties: description, category and subCategory',
  });

  // Generate content using a prompt and the metadata of the uploaded file.
  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: "audio/m4a",
        data: b64,
      },
    },
    {
      text: "Summary of the Conversation: Listen to the audio and summarize the conversation in 4-6 sentences. Include the client’s issue, the support team’s response, and any actions or resolutions discussed. Problem Categorization: Based on the conversation, identify the problem and categorize it using the following categories and subcategories. Select both the main category and the appropriate subcategory that best describes the client’s issue. A. Phone Card / SIM Card Issues Subcategories: Broken / Damaged, Not Activating / Not Working (No Signal), Expired, Other. B. Internet / Network Issues Subcategories: Slow Connection, No Internet, Intermittent Connection, Network Congestion, Coverage Issues, Wi-Fi Problems, Other. C. Mobile Device / Hardware Issues Subcategories: Device Malfunction (won't power on, freezes, etc.), Screen Issues (cracked, unresponsive), Battery / Charging Issues, Signal / Antenna Issues, SIM Card Reader Issues, Other. D. Software / App Issues Subcategories: Application Crashes, Login Issues, Update Problems, Feature Not Working, Compatibility Issues, Other. E. Billing / Payment Issues Subcategories: Overcharged, Incorrect Bill, Payment Not Processed, Plan / Package Discrepancy, Refund Request, Other. F. Service Activation / Deactivation Issues Subcategories: Service Not Activated, Unable to Cancel Service, Incorrect Plan Activated, Other. G. Other / General Inquiries Subcategories: Account Management, Promotions / Offers, Technical Support, Data Usage / Limits, Customer Requests (e.g., changing contact info), Other. Nota: A resposta deve ser fornecida em português. empresa: vodacom.",
    },
  ]);
  const formattedResult = result.response.candidates![0].content.parts![0].text?.replace(/```json|```/g, '').trim() || ''
  const resultObject = JSON.parse(formattedResult)
    return {
        summary: resultObject?.description || '',
        category: resultObject?.category || '',
        subCategory: resultObject?.subCategory || ''
    }
}