import React from "react"
import { Link } from "react-router-dom"
import * as S from "./style"
import UseContext from "../../useContext"

const Information = () => {

  const dados = React.useContext(UseContext)
  
  return (
    <S.Main>
      <S.Container>
        <S.Back>
          <Link to="/" end>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Arrow Back</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="30"
                  d="M244 400L100 256l144-144M120 256h292"
                />
              </svg>
              Back
            </button>
          </Link>
        </S.Back>
        <S.Information>
          <S.Frag>
            <img src={dados.img}/>
          </S.Frag>
          <S.TextInformation>
            <h2>{dados.name}</h2>

            <div className="block">
              <div className="card">
                <p>
                  <b>Native Name:</b> {dados.native}
                </p>
                <p>
                  <b>Population:</b> {dados.population}
                </p>
                <p>
                  <b>Region:</b> {dados.region}
                </p>
                <p>
                  <b>Sub Region:</b> {dados.subregion}
                </p>
                <p>
                  <b>Capital:</b> {dados.capital}
                </p>
              </div>
              <div className="card">
                <p>
                  <b>Top Level Domain:</b> {dados.topL}
                </p>
                <p>
                  <b>Currencies:</b> {dados.currencies}
                </p>
                <p>
                  <b>Languages:</b> {dados.language}
                </p>
              </div>
            </div>
            <div className="Countries">
              <button id="countries-bt">Border Countries:</button>
              <button>France</button>
              <button>Germany</button>
              <button>Netherlands</button>
            </div>
          </S.TextInformation>
        </S.Information>
      </S.Container>
    </S.Main>
  )
}
export default Information
