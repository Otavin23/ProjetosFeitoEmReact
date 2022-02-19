import React from "react"
import Header from "./components/header/index"
import Main from "./components/Main/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./Error"
import Information from "./components/information/index"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/" element={<Main />}/>
        <Route path="information" element={<Information />} />
        <Route path="*" element={<Error />} />      
      </Routes>
    </BrowserRouter>
  )
}
export default App
