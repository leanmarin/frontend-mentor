import { useState } from 'react'

import './App.css'
import { Header, SearchBar, ResultsPane } from './components'
import fetchWord from './utils/fetcher'
import InitialContent from './components/InitialContent'
import ErrorContent from './components/ErrorContent'

function App() {
  const [activeFont, setActiveFont] = useState('font-serif')
  // idle | fetching | success | not found
  const [fetchStatus, setFetchStatus] = useState('idle')
  /* const [darkModeOn, setDarkMondeOn] = useState(false) */
  const [wordData, setWordData] = useState({})

  async function handleSearch(query) {
    setFetchStatus('fetching')
    const word = await fetchWord(query)

    if (word.title) {
      setFetchStatus('not found')

      return setWordData(word)
    }

    setFetchStatus('success')

    return setWordData(word[0])
  }

  return (
    <div
      className={`container p-6 md:p-12 mx-auto flex flex-col gap-7 ${activeFont} md:gap-10 lg:max-w-4xl dark:bg-gray-950 dark:text-gray-100`}
    >
      <Header />
      <SearchBar onSubmit={handleSearch} />
      {fetchStatus === 'idle' && <InitialContent message="Welcome!" />}
      {fetchStatus === 'fetching' && <InitialContent message="Loading..." />}
      {fetchStatus === 'success' && <ResultsPane wordData={wordData} />}
      {fetchStatus === 'not found' && <ErrorContent wordData={wordData} />}
    </div>
  )
}

export default App
