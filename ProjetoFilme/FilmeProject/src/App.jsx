import React, { useEffect, useState } from "react"

const App = () => {
  const [api, setApi] = useState([])
  const [arrayel, setArrayel] = useState([])

  async function request(url) {
    const res = await fetch(url)
    const json = await res.json()
    setApi(json)
    setArrayel(json.results)
  }
  request(
    "https://api.themoviedb.org/3/search/movie?query=aventura&api_key=5f6d789565d22c8473d0ac958158e5e1"
  )
  console.log(typeof arrayel)
  return (
    <div>
      <h1>Funcionou</h1>
    </div>
  )
}
export default App
