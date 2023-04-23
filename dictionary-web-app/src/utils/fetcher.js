const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

async function fetchWord(queryParams) {
  const fetchURL = `${BASE_URL}${queryParams}`

  try {
    const response = await fetch(fetchURL)
    const data = await response.json()

    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

export default fetchWord
