import {
  HiOutlineBookOpen,
  HiOutlineMoon,
  HiOutlineSun,
  HiChevronDown,
} from 'react-icons/hi'
import { BsJournalBookmark } from 'react-icons/bs'

import { LanguageToggle } from '../components'

import DarkModeToggle from './DarkModeToggle'

function Header({
  languageVariant,
  setLanguageVariant,
  setDarkModeOn,
  darkModeOn,
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
        <span className="font-bold">
          Serif
          <HiChevronDown className="inline ml-1 text-xl text-purple-600" />
        </span>
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
