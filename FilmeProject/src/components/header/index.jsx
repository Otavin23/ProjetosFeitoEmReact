import React, { useContext, useState } from "react"
import * as S from "./styles"
import UserContext from "../../UserContext"
import { Link } from "react-router-dom"

const Header = () => {
  const Pesquisa = useContext(UserContext)
  const Search = Pesquisa.search
  const SetarSearch = Pesquisa.setSearch 
  return (
      <S.Header>
        <div className="logo">
          <Link to="/">
          <span>
            Ava<p>Land</p>
          </span>
          </Link>
          <S.Navegacao>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>Movies</li>
              <li>Shows</li>
            </ul>
          </S.Navegacao>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={({target})=> SetarSearch(target.value)}
          />
        </div>
      </S.Header>
  )
}
export default Header
