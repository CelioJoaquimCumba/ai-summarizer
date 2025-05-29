'use client'
import FileInput from "@/components/file-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { summarize } from "./actions/summarizer";
import { CallAnalysis } from "@/lib/types";

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [summarized, setSummarized] = useState(false)
  const [summary, setSummary] = useState<CallAnalysis>()
  const [, setFile] = useState<File| null>(null)

  const handleFileSelection = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    setFile(e.target.files![0])
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append("file", file);
      const response = await summarize(formData)
      setSummary(response)
      setSummarized(true)
    } catch (error) {
      alert('error occured')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  const handleReset = () => {
    setFile(null)
    setSummarized(false)
    setLoading(false)
  }

  return (
    <div className="w-screen h-dvh flex items-center justify-center p-16">
    { loading ? (
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="w-1/2 aspect-square animate-pulse bg-gray-300"></div>
        <p className="text-primary">Carregando...</p>
      </div>
    ) :  (
      summarized ? (
        <Card className="max-w-4xl w-full p-8 gap-3 bg-white overflow-auto h-full">
          <CardHeader>
            <CardTitle className="text-2xl font-medium">Sumarização da conversa</CardTitle>
          </CardHeader>
          <CardContent className="">
            <pre>
              {JSON.stringify(summary, null, "\t")}
           </pre>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleReset}>Sumarizar denovo</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="max-w-4xl w-full p-8 gap-3">
          <CardHeader>
            <CardTitle className="text-2xl font-medium">Sumarização da conversa</CardTitle>
          </CardHeader>
          <CardContent>
            <FileInput onChange={handleFileSelection} onDelete={() => {}} label="Carregar ficheiro" />
          </CardContent>
        </Card>
      )
    )
    }
    </div>
  );
}
