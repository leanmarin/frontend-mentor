function ErrorContent({ wordData }) {
  return (
    <>
      <h2 className="text-4xl font-bold md:text-5xl text-center text-gray-400">
        {wordData.title}
      </h2>
      <p className="text-center text-xl text-gray-400 md:text-2xl">
        {wordData.message}
      </p>
      <p className="text-gray-400 text-sm md:text-xl text-center">
        {wordData.resolution}
      </p>
    </>
  )
}

export default ErrorContent
