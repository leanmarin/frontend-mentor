import { HiOutlineExternalLink } from 'react-icons/hi'
import { US, GB } from 'country-flag-icons/react/3x2'
import { Fragment } from 'react'

import RelatedWords from './RelDefinitions'
import AudioPlayer from './AudioPlayer'

function ResultsPane({ word, phonetics, meanings, sourceUrls }) {
  const phoneticsAvailable = phonetics.length > 0

  return (
    <div className="flex flex-col gap-8 w-full">
      <main className="flex items-center justify-between">
        <div className="flex gap-2 flex-col">
          <h1 className="mb-1 text-4xl font-bold md:text-5xl">{word}</h1>
          {!phoneticsAvailable ? (
            <p className="text-xl text-purple-400 md:text-2xl italic">
              /No phonetics available/
            </p>
          ) : (
            <p className="text-xl text-purple-600 md:text-2xl italic">
              <GB className="inline h-3 mr-1" />
              {phonetics[0].text}
            </p>
          )}
        </div>
        {phoneticsAvailable && <AudioPlayer src={phonetics[0].audio} />}
      </main>
      {meanings.map((meaning, index) => {
        return (
          <section
            key={`${meaning.partOfSpeech}-${index}`}
            className="flex flex-col gap-4"
          >
            <h2 className="flex items-center gap-4 md:text-lg italic font-semibold">
              {meaning.partOfSpeech}
            </h2>
            <h3 className="text-gray-400 text-sm md:text-base">Meaning</h3>
            <dl className="flex flex-col gap-4 [&>dd]:ml-5 [&>dd]:list-item [&>dd::marker]:text-purple-600 [&>span]:ml-5  [&>span]:text-gray-400">
              {meaning.definitions.map((definition, index) => {
                return (
                  <Fragment key={index}>
                    <dd>{definition.definition}</dd>
                    {definition.example && (
                      <span className="italic">{definition.example}</span>
                    )}
                  </Fragment>
                )
              })}
            </dl>
            {meaning.synonyms.length > 0 && (
              <RelatedWords
                heading="Synonyms"
                relatedWords={meaning.synonyms}
              />
            )}
            {meaning.antonyms.length > 0 && (
              <RelatedWords
                heading="Antonyms"
                relatedWords={meaning.antonyms}
              />
            )}
          </section>
        )
      })}
      <span className="w-full h-[2px] bg-gray-200 dark:bg-gray-900" />
      <section>
        <h3 className="text-gray-400 text-sm md:text-base mb-4">Source</h3>
        {sourceUrls.map((url, index) => {
          return (
            <a
              key={index}
              className="flex items-center text-sm underline mb-3 text-gray-900"
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              {url}
              <HiOutlineExternalLink className="inline ml-1 text-base text-gray-500" />
            </a>
          )
        })}
      </section>
    </div>
  )
}

export default ResultsPane
