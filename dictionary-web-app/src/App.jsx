import { useState } from 'react'

import './App.css'
import { Header, SearchBar, ResultsPane } from './components'

function App() {
  const [activeFont, setActiveFont] = useState('font-serif')
  const [darkModeOn, setDarkMondeOn] = useState(false)

  return (
    <div className={`container p-6 mx-auto flex flex-col gap-4 ${activeFont}`}>
      <Header />
      <SearchBar />
      <ResultsPane />
    </div>
  )
}

export default App
