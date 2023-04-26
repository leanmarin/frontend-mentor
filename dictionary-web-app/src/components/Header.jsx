import {
  HiOutlineBookOpen,
  HiOutlineMoon,
  HiOutlineSun,
  HiChevronDown,
} from 'react-icons/hi'
import { BsJournalBookmark } from 'react-icons/bs'

import { LanguageToggle } from '../components'

function Header({ languageVariant, setLanguageVariant }) {
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
        <span className="pl-2">
          <HiOutlineMoon className="text-2xl" />
        </span>
      </div>
    </div>
  )
}

export default Header
