'use client'

import { useEffect, useState } from 'react'

const supportedLanguages = ['es', 'en']

export default function LanguageToggle() {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    // Detect browser language initially
    const browserLang = navigator.language.slice(0, 2)
    if (supportedLanguages.includes(browserLang)) {
      setLang(browserLang)
    }
  }, [])

  function toggleLanguage() {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Cambiar idioma"
    >
      {lang.toUpperCase()}
    </button>
  )
}
