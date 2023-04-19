import { useId } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function SearchBar() {
  const searchInput = useId()

  return (
    <form className="w-full p-3 rounded-2xl bg-gray-100 flex gap-3">
      <label className="sr-only" htmlFor="formId">
        Search
      </label>
      <input
        className="bg-inherit w-full font-bold text-black text-sm md:text-base"
        id={searchInput}
        type="text"
        value="keyboard"
      />
      <button type="submit">
        <HiOutlineSearch className="text-purple-600 text-2xl" />
      </button>
    </form>
  )
}

export default SearchBar
