import { useRef, useState } from 'react'
import { HiPlay } from 'react-icons/hi2'

function AudioPlayer({ src }) {
  const audioRef = useRef()
  const [audioIsPlaying, setAudioIsPlaying] = useState(false)

  return (
    <button
      className={`${
        !src ? 'bg-gray-200 text-gray-600' : 'bg-purple-200 text-purple-600'
      } p-4 aspect-square w-[55px] rounded-full text-center relative`}
      disabled={!src}
      title={`${!src ? 'No audio available' : `Source: ${src}`}`}
      onClick={() => {
        setAudioIsPlaying(true)
        audioRef.current.play()
      }}
    >
      <HiPlay className="text-2xl" />
      {audioIsPlaying && (
        <div className="w-full h-full absolute rounded-full border-purple-600 border-4 aspect-square inset-0 animate-ping" />
      )}
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setAudioIsPlaying(false)}
      />
    </button>
  )
}

export default AudioPlayer
