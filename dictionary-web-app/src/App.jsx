import { useState } from 'react'
import { LeapFrog } from '@uiball/loaders'

import './App.css'
import { Header, SearchBar, ResultsPane } from './components'
import fetchWord from './utils/fetcher'
import InitialContent from './components/InitialContent'
import ErrorContent from './components/ErrorContent'

function App() {
  const [activeFont, setActiveFont] = useState('font-serif')
  // idle | fetching | success | not found
  const [fetchStatus, setFetchStatus] = useState('idle')
  const [preferences, setPreferences] = useState({
    darkModeOn: true,
    pronunciationSelected: 'US',
    fontType: 'font-serif',
  })
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
      className={`container p-6 md:p-12 mx-auto flex flex-col gap-7 ${activeFont} md:gap-10 lg:max-w-4xl dark:bg-gray-950 dark:text-gray-100 h-screen`}
    >
      <Header {...preferences} />
      <SearchBar onSubmit={handleSearch} />
      {fetchStatus === 'success' && <ResultsPane {...wordData} />}
      <div className="flex-1 grid place-items-center">
        {fetchStatus === 'idle' && <InitialContent message="Welcome!" />}
        {fetchStatus === 'fetching' && (
          <LeapFrog
            className="place-self-center"
            color="#9e9e9e" //#8e24aa
            size={50}
            speed={1}
          />
        )}
        {fetchStatus === 'not found' && <ErrorContent wordData={wordData} />}
      </div>
    </div>
  )
}

export default App
