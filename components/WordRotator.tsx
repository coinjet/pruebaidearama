import { useEffect, useState } from 'react'

interface WordRotatorProps {
  words: string[]
  intervalMs?: number
}

export default function WordRotator({ words, intervalMs = 1500 }: WordRotatorProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [words.length, intervalMs])

  return (
    <div className="overflow-hidden h-8 relative">
      <div
        className="absolute transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {words.map((word, i) => (
          <div key={i} className="h-8 leading-8">
            {word}
          </div>
        ))}
      </div>
    </div>
  )
}
