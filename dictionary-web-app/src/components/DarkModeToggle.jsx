import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

function DarkModeToggle({ darkModeOn, setDarkModeOn }) {
  function handleDarkModeOn() {
    setDarkModeOn(!darkModeOn)
    const htmlTag = document.getElementsByTagName('html')
  }

  return (
    <button
      className="outline-offset-2 rounded-lg outline-purple-600"
      onClick={handleDarkModeOn}
    >
      {darkModeOn ? (
        <HiOutlineSun className="text-2xl" />
      ) : (
        <HiOutlineMoon className="text-2xl" />
      )}
    </button>
  )
}

export default DarkModeToggle
