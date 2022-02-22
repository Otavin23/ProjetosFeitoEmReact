import React from "react"
import * as S from "./style"
import { ThemeProvider } from "styled-components"
import { LightTheme, DarkTheme } from "../../Theme"
import { GlobalStyle } from "../../GlobalStyled"
import { Link } from "react-router-dom"

const Header = () => {
  const [theme, setTheme] = React.useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <S.Header>
        <div className="logo">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
        </div>
        <div className="darkMode">
          <button onClick={() => themeToggler()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Moon</title>
              <path
                d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
            Dark Mode
          </button>
        </div>
      </S.Header>
    </ThemeProvider>
  )
}
export default Header
