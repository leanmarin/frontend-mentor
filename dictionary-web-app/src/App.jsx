import { useState } from 'react'

import './App.css'
import { Header, SearchBar, ResultsPane } from './components'

function App() {
  const [activeFont, setActiveFont] = useState('font-serif')
  const [darkModeOn, setDarkMondeOn] = useState(false)
  const darkMode = ['dark:bg-gray-950 dark:text-slate-50']

  return (
    <div
      className={`container p-6 md:p-12 mx-auto flex flex-col gap-7 ${activeFont}  md:gap-10 lg:max-w-4xl dark:bg-gray-950 dark:text-gray-100`}
    >
      <Header />
      <SearchBar />
      <ResultsPane />
    </div>
  )
}

export default App
