import React from "react"
import * as S from "./style"
import { Link } from "react-router-dom"
import Information from "../information"


const Main = () => {
  const [result, setResult] = React.useState([])
  const [input, setInput] = React.useState("")
  const [select, setSelect] = React.useState("")
  const [image,setImage] = React.useState([])

  React.useEffect(() => {
    async function api(url) {
      const res = await fetch(url)
      const Json = await res.json()
      setResult(Json)
      console.log(Json)
    }
    api("https://restcountries.com/v2/all")
  }, [])

  return (
    <S.BackgroundFundo>
      <S.Container>
        <S.Search>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Search</title>
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
          <input
            value={input}
            type="text"
            placeholder="Search for a counter..."
            onChange={({ target }) => setInput(target.value)}
          />
          <select
            value={select}
            onChange={({ target }) => setSelect(target.value)}
            className="selectOption"
          >
            <option disable value="">
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </S.Search>
        <S.World>
          <div className="container-World">
            {result.map((el, indice) => (
              <div className="fundo-bd" key={indice}>
                <Link to="information">
                  <img src={el.flags.png} onClick={({target}) => setImage(target.src)}/>
                </Link>
                <div className="information">
                  <h2>{el.name}</h2>
                  <span>
                    Population:<p>{el.population.toLocaleString("pt-br")}</p>
                  </span>
                  <span>
                    Region:<p>{el.region}</p>
                  </span>
                  <span>
                    Capital: <p>{el.capital}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </S.World>
      </S.Container>
    </S.BackgroundFundo>
  )
}
export default Main
