'use client'
import FileInput from "@/components/file-input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [, setFile] = useState<File| null>(null)

  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0])
    setLoading(true)
  }

  return (
    <div className="w-screen h-dvh bg-white flex items-center justify-center"> 
    { loading ? (
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="w-1/2 aspect-square animate-pulse bg-gray-300"></div>
        <p className="text-primary">Carregando...</p>
      </div>
    ) :
      <Card className="max-w-4xl w-full p-8 gap-3">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">Submissão de cotação</CardTitle>
        </CardHeader>
        <CardContent>
          <FileInput onChange={handleFileSelection} onDelete={() => {}} label="Carregar ficheiro" />
        </CardContent>
        <CardFooter className="flex justify-between">
          footer
        </CardFooter>
      </Card>
    }
    </div>
  );
}
