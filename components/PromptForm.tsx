'use client'

import { useState } from 'react'
import PromptResult from './PromptResult'
import { exportToTxt, exportToPdf } from '@/utils/exportPrompt'

export default function PromptForm() {
  const [idea, setIdea] = useState('')
  const [prompt, setPrompt] = useState('')
  const [showResult, setShowResult] = useState(false)

  function generatePrompt() {
    if (!idea.trim()) {
      alert('Por favor, escribe una idea.')
      return
    }
    const basePrompt = `Genera un prompt perfecto para IA basado en esta idea: "${idea.trim()}".`
    setPrompt(basePrompt)
    setShowResult(true)
  }

  return (
    <section className="space-y-4">
      <textarea
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        rows={5}
        placeholder="Escribe tu idea aquí..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={generatePrompt}
      >
        Generar prompt
      </button>

      {showResult && (
        <>
          <PromptResult prompt={prompt} />
          <div className="flex gap-4 mt-2">
            <button
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => navigator.clipboard.writeText(prompt)}
            >
              Copiar
            </button>
            <button
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => exportToTxt(prompt)}
            >
              Descargar .txt
            </button>
            <button
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => exportToPdf(prompt)}
            >
              Descargar .pdf
            </button>
          </div>
        </>
      )}
    </section>
  )
}
