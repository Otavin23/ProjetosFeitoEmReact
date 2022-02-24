import React, {  useContext, useEffect, useState } from "react"
import Filmes from "./components/filmes"
//import { Route,Routes,BrowserRouter} from "react-router-dom"
//import { createContext } from "./context/CreateContext"
import Header from "./components/header/index"
import Home from "./page/Home"
import UserContext from "./UserContext"

const urls = [
  "https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1",
]
const App = () => {
  const [api, setApi] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    async function request (url){
      const res = await fetch(url)
      const json = await res.json()
      setApi(json.results)
    }
    request(urls[0])

  }, [])
  return (
    <UserContext.Provider value={{
      api,
      setApi,
      search, 
      setSearch, 
    }}>
      <Header />
      <Home />
      <Filmes />
    </UserContext.Provider>

  )
}
export default App
