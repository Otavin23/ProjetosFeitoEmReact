import React, { useContext } from "react"
import { Link } from "react-router-dom"

import * as S from "./style"
import UserContext from "../../UserContext"

const Filmes = () => {
  const dados = useContext(UserContext)


  return (
    <S.SecaoFilme>
      <S.Container>
        {dados.api.filter((el)=> {
            if (dados.search === ""){
                return el
            }else if(el.title.toLowerCase().includes(dados.search.toLowerCase())){
                return el
            }
        }).filter((el) => {
            if (el.backdrop_path === null) {
              return ""
            } else {
              return el
            } 
          })
          .map((el, index) => (
            <Link to="information" onClick={({target}) => {
              dados.setImage(el.backdrop_path)
              dados.setDescription(el.overview)
              dados.setTitle(el.title)
              dados.setImagePath(el.poster_path)
              dados.setDate(el.release_date)
            }}>
            <div className="card" key={index}>
              <img src={"https://image.tmdb.org/t/p/w500/"+el.poster_path} />
              <div className="card-title">
                <h3>{el.title}</h3>
              </div>
              <div>
                <p>{el.release_date}</p>
              </div>
            </div>
            </Link>
          ))}
      </S.Container>
    </S.SecaoFilme>
  )
}
export default Filmes
