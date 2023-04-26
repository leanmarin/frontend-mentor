import { useEffect, useState } from 'react'
import { LeapFrog } from '@uiball/loaders'

import './App.css'

import { Header, SearchBar, ResultsPane } from './components'
import fetchWord from './utils/fetcher'
import InitialContent from './components/InitialContent'
import ErrorContent from './components/ErrorContent'
import useSettings from './hooks/useSettings'

function App() {
  const [activeFont, setActiveFont] = useState('font-serif')
  // idle | fetching | success | not found
  const [fetchStatus, setFetchStatus] = useState('idle')
  const settings = useSettings()
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

  useEffect(() => {
    const htmlElement = document.documentElement

    settings.darkModeOn
      ? htmlElement.classList.add('dark')
      : htmlElement.classList.remove('dark')
  }, [settings.darkModeOn])

  return (
    <div
      className={`container p-6 md:p-12 mx-auto flex flex-col gap-7 ${activeFont} md:gap-10 lg:max-w-4xl dark:bg-gray-950 dark:text-gray-100 h-screen`}
    >
      <Header {...settings} />
      <SearchBar onSubmit={handleSearch} />
      {fetchStatus === 'success' && (
        <ResultsPane {...wordData} languageVariant={settings.languageVariant} />
      )}
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
