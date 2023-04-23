function RelatedWords({ heading, relatedWords }) {
  return (
    <div className="flex">
      <h3 className="text-gray-400 text-md mr-5">{heading}</h3>
      <div className="flex flex-wrap">
        {relatedWords.map((word, index) => {
          return (
            <span
              key={`${word}${index}`}
              className="font-semibold text-purple-600 mr-3"
            >
              {word}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default RelatedWords
