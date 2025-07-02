interface PromptResultProps {
  prompt: string
}

export default function PromptResult({ prompt }: PromptResultProps) {
  return (
    <pre
      className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded whitespace-pre-wrap"
      aria-label="Prompt generado"
    >
      {prompt}
    </pre>
  )
}
