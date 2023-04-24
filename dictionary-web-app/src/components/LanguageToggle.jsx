/* const darkMode = [
  'dark:peer-focus:ring-blue-800',
  'dark:bg-gray-700',
  'dark:border-gray-600',
  'peer-focus:ring-blue-300',

  peer-checked:after:border-gray-300,
  after:bg-gray-100,
  after:border-2
  after:border-gray-300,
  
] */

import { useState } from 'react'

function LanguageToggle({ pronunciationSelected, label = '' }) {
  const [lanVariant, setLanVariant] = useState()

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        className="sr-only peer"
        defaultChecked={pronunciationSelected === 'US' ? true : false}
        type="checkbox"
        value=""
      />
      <div className="w-11 h-6 bg-[url('./GB.svg')] bg-opacity-25 bg-no-repeat bg-cover bg-center peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:after:translate-x-full peer-focus:ring-gray-300 dark:peer-focus:ring-gray-700 peer-checked:after:border-gray-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[url('./US.svg')] peer-checked:bg-con peer-checked:bg-no-repeat peer-checked:bg-center dark:peer-checked:after:border-gray-300 dark:after:bg-gray-100" />
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
      )}
    </label>
  )
}

export default LanguageToggle
