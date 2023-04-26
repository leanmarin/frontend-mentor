import { BsJournalBookmark } from 'react-icons/bs'

import { LanguageToggle } from '../components'

import DarkModeToggle from './DarkModeToggle'
import FontToggle from './FontToggle'

function Header({
  languageVariant,
  setLanguageVariant,
  setDarkModeOn,
  darkModeOn,
  fontType,
  setFontType,
}) {
  function handleLanguageChange() {
    setLanguageVariant((languageVariant) =>
      languageVariant === 'UK' ? 'US' : 'UK',
    )
  }

  return (
    <div className="flex justify-between text-gray-500">
      <BsJournalBookmark className="text-4xl" />
      <div className="flex items-center gap-3">
        <FontToggle fontType={fontType} setFontType={setFontType} />
        <LanguageToggle
          languageVariant={languageVariant}
          onChange={handleLanguageChange}
        />
        <DarkModeToggle darkModeOn={darkModeOn} setDarkModeOn={setDarkModeOn} />
      </div>
    </div>
  )
}

export default Header
