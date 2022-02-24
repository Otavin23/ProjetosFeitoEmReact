import React, { useContext, useState } from "react"
import * as S from "./styles"
import UserContext from "../../UserContext"

const Header = () => {
  const Pesquisa = useContext(UserContext)
  console.log(Pesquisa)
  return (
      <S.Header>
        <div className="logo">
          <span>
            Ava<p>Land</p>
          </span>
          <S.Navegacao>
            <ul>
              <li>home</li>
              <li>Movies</li>
              <li>Shows</li>
            </ul>
          </S.Navegacao>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
        {console.log(UserContext)}
      </S.Header>
  )
}
export default Header
