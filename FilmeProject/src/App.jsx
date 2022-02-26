import React, { useEffect, useState } from "react"
import {BrowserRouter, Route,Routes} from "react-router-dom"
import UserContext from "./UserContext"
import Home from "./page/Home/index"
import InformationMovie from "./page/InformationMovie"
import Header from "./components/header"
import Footer from "./components/footer"


const urls = [
  "https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1",
]
const App = () => {
  const [api, setApi] = useState([])
  const [search, setSearch] = useState("")
  const [image, setImage] = useState("")
  const [Description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [date, setDate] = useState("")

  useEffect(()=> {
    async function request (url){
      const res = await fetch(url)
      const json = await res.json()
      setApi(json.results)
      console.log(json)
    }
    request(urls[0])

  }, [])
  return (
  
    <UserContext.Provider value={{
      api,
      setApi,
      search: search, 
      setSearch: setSearch,
      image,
      setImage,
      Description,
      setDescription,
      title, 
      setTitle,
      imagePath,
      setImagePath,
      date,
      setDate,
    }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="information" element={<InformationMovie />} />
        </Routes>
      </BrowserRouter>

    </UserContext.Provider>


  )
}
export default App
