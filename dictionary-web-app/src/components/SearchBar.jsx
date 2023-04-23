import { useId, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function SearchBar({ onSubmit }) {
  const searchInput = useId()
  const [input, setInput] = useState('')

  return (
    <form
      action="submit"
      className="w-full p-3 rounded-2xl bg-gray-100 dark:bg-gray-900 flex gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(input)
      }}
    >
      <label className="sr-only" htmlFor="formId">
        Search
      </label>
      <input
        autoFocus
        className="bg-inherit w-full font-bold text-gray-400 text-sm md:text-base outline-purple-600 outline-offset-8 rounded-md"
        id={searchInput}
        placeholder="Type here..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <HiOutlineSearch className="text-purple-600 text-2xl" />
      </button>
    </form>
  )
}

export default SearchBar
