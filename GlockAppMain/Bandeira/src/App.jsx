import React from "react"
import Header from "./components/header/index"
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./Error"
import Information from "./components/information/index"
import UseContext from "./useContext"

const App = () => {
  const [result, setResult] = React.useState([])
  const [image, setImage] = React.useState("")
  const [name, setNome] = React.useState("")
  const [native, setNative] = React.useState("")
  const [population, setPopulation] = React.useState("")
  const [region, setRegion] = React.useState("")
  const [subregion, setSubregion] = React.useState("")
  const [capital, setCapital] = React.useState("")
  const [topL, setTopL] = React.useState("")
  const [currencies, setCurrencies] = React.useState([])
  const [language, setLanguage] = React.useState([])
  
 
  React.useEffect(() => {
    async function api(url) {
      const res = await fetch(url)
      const Json = await res.json()
      setResult(Json)
      console.log("Feliz 4 de julho!")
    }
    api("https://restcountries.com/v2/all")
  }, [])

  return (
      <UseContext.Provider
        value={{
          resultado: result,
          img: image,
          setimg: setImage,
          name: name,
          setar: setNome,
          native: native,
          setNat: setNative,
          population: population,
          setPopu: setPopulation,
          region: region,
          setRegion: setRegion,
          subregion: subregion,
          setSubRe: setSubregion,
          capital: capital,
          setCapital: setCapital,
          topL: topL,
          setTopL: setTopL,
          language: language,
          setLanguage: setLanguage,
          currencies: currencies,
          setCurrencies: setCurrencies,
        }}
      >
        <BrowserRouter>
          <Header  />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="information" element={<Information />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </UseContext.Provider>
  )
}
export default App
