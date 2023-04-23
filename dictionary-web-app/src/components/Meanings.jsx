function Meanings({ wordData }) {
  return (
    <section>
      <h2>{wordData.meanings.partOfSpeech}</h2>
      <h3>Meaning</h3>
      <dl className="def-container">
        {wordData.meanings.definitions.map((e) => {
          return (
            <>
              <dd key={e.index}>{e.definition}</dd>
              <span>{e.example}</span>
            </>
          )
        })}
      </dl>
      <p>
        Synonyms{' '}
        {wordData.meanings.synonyms.map((e) => {
          return <span key={e}>{e}</span>
        })}
      </p>
      <p>
        Antonyms{' '}
        {wordData.meanings.antonyms.map((e) => {
          return <span key={e}>{e}</span>
        })}
      </p>
    </section>
  )
}

export default Meanings
