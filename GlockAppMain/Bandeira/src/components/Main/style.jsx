import styled from "styled-components"

export const BackgroundFundo = styled.main`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.section`
  width: 90%;
  height: 100vh;
`

export const Search = styled.div`
  position: relative;
  height: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: auto;
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    color: #858585;
    bottom: 1rem;
    left: 1rem;
  }
  input {
    border: none;
    width: 30%;
    height: 3rem;
    color: hsl(0, 0%, 52%);
    font-weight: 600;
    box-shadow: 0px 2px 10px ${(props) => props.theme.shadow};
    padding-left: 3rem;
    outline: none;
    background-color: ${(props) => props.theme.backInput};
  }
  .selectOption {
    border: none;
    outline: none;
    color: black;
    background-color: hsl(0, 0%, 98%);
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    box-shadow: 0px 4px 5px #e4e2e2;
    &:focus {
      outline: none;
      border: 0px;
      margin-top: 1rem;
      option {
        outline: none;
        font-weight: 500;
        padding: 1rem;
      }
    }
  }
`

export const World = styled.section`
  .container-World {
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: auto;
  }
  .fundo-bd {
    background-color: ${(props) => props.theme.backInput};
    //box-shadow: 0px 2px 10px ${(props) => props.theme.fundoCard};
    width: 22%;
    height: 21rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    transition-delay: all 1s ease;
    &:hover {
      border-bottom: 2px solid orange;
      border-width: 5px;
      opacity: 0.7;
      transition: all 0.05s ease;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 12rem;
    }
    .information {
      margin-top: 1rem;
      margin-left: -3rem;
      max-width: 200px;
      max-height: 200px;
      h2 {
        font-size: 18px;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme.fontColor};
        color: white;
      }
      span {
        display: flex;
        font-weight: 600;
        font-size: 16px;
        p {
          font-weight: 400;
          margin-bottom: 0.2rem;
          margin-left: 0.2rem;
        }
      }
    }
  }
`
