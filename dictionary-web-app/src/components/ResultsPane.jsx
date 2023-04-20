import { HiPlay } from 'react-icons/hi2'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { US, GB } from 'country-flag-icons/react/3x2'

function ResultsPane() {
  return (
    <div className="flex flex-col gap-5">
      <main className="flex items-center justify-between">
        <div className="flex gap-2 flex-col">
          <h1 className="mb-1 text-4xl font-bold md:text-5xl">keyboard</h1>
          <p className="text-xl text-purple-600 md:text-2xl">
            <GB className="inline h-3 mr-1" />
            /ki:bo:d/
          </p>
        </div>
        <div className="bg-purple-200 text-purple-600 p-4 aspect-square w-[55px] rounded-full text-center">
          <HiPlay className="text-2xl" />
        </div>
      </main>
      <section className="flex flex-col gap-6">
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
          Synonymes{' '}
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
      </section>
      <span className="w-full h-[2px] bg-gray-200 dark:bg-gray-900" />
      <section className="[&>p]:text-gray-400">
        <p>Source</p>
        <a
          className="flex items-center text-sm underline"
          href="https://en.wiktionary.org/wiki/keyboard"
          rel="noreferrer"
          target="_blank"
        >
          https://en.wiktionary.org/wiki/keyboard
          <HiOutlineExternalLink className="inline ml-1 text-base text-gray-500" />
        </a>
      </section>
    </div>
  )
}

export default ResultsPane
