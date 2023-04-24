import { useRef } from 'react'
import { HiPlay } from 'react-icons/hi2'

function AudioPlayer({ src }) {
  const audioRef = useRef()

  return (
    <button
      className={`${
        !src ? 'bg-gray-200 text-gray-600' : 'bg-purple-200 text-purple-600'
      } p-4 aspect-square w-[55px] rounded-full text-center`}
      disabled={!src}
      onClick={() => audioRef.current.play()}
    >
      <HiPlay className="text-2xl" />
      <audio ref={audioRef} src={src} />
    </button>
  )
}

export default AudioPlayer
