function FontToggle({ fontType, setFontType }) {
  function handleChangeFontType() {
    setFontType(
      fontType === 'font-serif'
        ? 'font-sans'
        : fontType === 'font-sans'
        ? 'font-mono'
        : 'font-serif',
    )
  }

  return (
    <button
      className="text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm px-3 py-1 mr-1 mb-1 dark:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 font-bold order-1utline-offset-2 rounded-lg outline-purple-600 dark:text-gray-200 hover:text-purple-600 hover:bg-purple-200 dark:hover:bg-purple-950 active:translate-y-0.5"
      /* className="font-bold order-1utline-offset-2 rounded-lg outline-purple-600" */
      onClick={handleChangeFontType}
    >
      {fontType === 'font-serif' && <span>Serif</span>}
      {fontType === 'font-sans' && <span>Sans</span>}
      {fontType === 'font-mono' && <span>Mono</span>}
    </button>
  )
}

export default FontToggle
