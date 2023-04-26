import { useState } from 'react'

function useSettings() {
  const [fontType, setFontType] = useState('font-serif')
  const [languageVariant, setLanguageVariant] = useState('UK')
  const [darkModeOn, setDarkModeOn] = useState(false)

  return {
    fontType,
    setFontType,
    languageVariant,
    setLanguageVariant,
    darkModeOn,
    setDarkModeOn,
  }
}

export default useSettings
