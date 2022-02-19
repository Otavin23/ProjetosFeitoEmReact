import React from "react"
import { Link } from "react-router-dom"
import * as S from "./style"

const Information = () => {
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
                <img src={caminho} />
            </S.Frag>
          <S.TextInformation>
              <h2>Belgium</h2>
              <div className="block">
                  <div className="card">
                      <p><b>Native Name:</b> Belgie</p>
                      <p><b>Population:</b> 11,319,511</p>
                      <p><b>Region:</b> Europe</p>
                      <p><b>Sub Region:</b> Westem Europe</p>
                      <p><b>Capital:</b> Brussels</p>
                  </div>
                  <div className="card">
                      <p><b>Top Level Domain:</b> Be</p>
                      <p><b>Currencies:</b> Euro</p>
                      <p><b>Languages:</b> Duth, French, German</p>
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
