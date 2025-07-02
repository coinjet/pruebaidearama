'use client'

import PromptForm from '@/components/PromptForm'
import PromptResult from '@/components/PromptResult'
import LanguageToggle from '@/components/LanguageToggle'
import ThemeToggle from '@/components/ThemeToggle'
import WordRotator from '@/components/WordRotator'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Ideagrama</h1>
        <p className="text-lg">
          Tú propones la idea. Nosotros generamos el prompt perfecto para que la inteligencia artificial
        </p>
        <div className="text-xl font-semibold h-8 overflow-hidden">
          <WordRotator words={['escriba', 'diseñe', 'programe', 'dibuje', 'cree', 'responda']} />
        </div>
        <p>y lo convierta en realidad.</p>
      </div>
      <div className="flex justify-end gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <PromptForm />
      <div className="mt-8 border p-4 text-center">
        Espacio para anuncio (AdSense / Adsterra)
      </div>
    </div>
  )
}
