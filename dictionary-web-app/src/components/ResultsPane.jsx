import { HiPlay } from 'react-icons/hi2'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { US, GB } from 'country-flag-icons/react/3x2'
import { Fragment } from 'react'

import RelatedWords from './RelDefinitions'

function ResultsPane({ wordData }) {
  return (
    <div className="flex flex-col gap-8">
      <main className="flex items-center justify-between">
        <div className="flex gap-2 flex-col">
          <h1 className="mb-1 text-4xl font-bold md:text-5xl">
            {wordData.word}
          </h1>
          <p className="text-xl text-purple-600 md:text-2xl">
            <GB className="inline h-3 mr-1" />
            {wordData.phonetic}
          </p>
        </div>
        <div className="bg-purple-200 text-purple-600 p-4 aspect-square w-[55px] rounded-full text-center">
          <HiPlay className="text-2xl" />
        </div>
      </main>
      {wordData.meanings.map((meaning, index) => {
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
      {/* <section className="flex flex-col gap-6">
        <h2 className="flex items-center gap-4 md:text-lg italic font-semibold">
          noun <span className="w-full h-[2px] bg-gray-200 dark:bg-gray-900" />
        </h2>
        <h3 className="text-gray-400 text-sm md:text-base">Meaning</h3>
        <dl className="flex flex-col gap-4 [&>dd]:ml-5 [&>dd]:list-item [&>dd::marker]:text-purple-600">
          <dd>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </dd>
          <dd>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </dd>
          <dd>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </dd>
        </dl>
        <p className="text-gray-400 text-md">
          Synonyms{' '}
          <span className="ml-5 font-bold text-purple-600">
            electronic keyboard
          </span>
        </p>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="flex items-center gap-4 md:text-lg italic font-semibold">
          verb <span className="w-full h-[2px] bg-gray-200 dark:bg-gray-900" />
        </h2>
        <h3 className="text-gray-400 text-sm md:text-base">Meaning</h3>
        <dl className="flex flex-col gap-4 [&>dd]:ml-5 [&>dd]:list-item [&>dd::marker]:text-purple-600 [&>span]:ml-5  [&>span]:text-gray-400">
          <dd>To type on a computer keyboard. </dd>
          <span className="italic">
            Keyboarding is the part of this job I hate the most.
          </span>
        </dl>
      </section> */}
      <span className="w-full h-[2px] bg-gray-200 dark:bg-gray-900" />
      <section>
        <h3 className="text-gray-400 text-sm md:text-base mb-4">Source</h3>
        {wordData.sourceUrls.map((url, index) => {
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
