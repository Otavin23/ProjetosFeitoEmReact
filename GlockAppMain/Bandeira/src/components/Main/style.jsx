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
  @media (max-width: 375px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 14rem;
  }
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    color: #858585;
    bottom: 1rem;
    left: 1rem;
    @media (max-width: 375px){
      position: absolute;
      top: 60px;
    }
  }
  input {
    border: none;
    width: 30%;
    height: 3rem;
    color: hsl(0, 0%, 52%);
    font-weight: 600;
    box-shadow: 0px 4px 10px #ececec;
    padding-left: 3rem;
    outline: none;
    @media (max-width: 375px){
      width: 100%;
      background-color: white;
    }
  }
  .selectOption {
    border: none;
    outline: none;
    color: black;
    background-color: hsl(0, 0%, 98%);
    padding: 0.9rem 2rem;
    font-weight: 600;
    box-shadow: 0px 4px 5px #e7e6e6;
    border-radius: 0.2rem;
    @media (max-width: 375px){
      margin-top: 2rem;
      margin-left: -10rem;
    }
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
  color: black;
  .container-World {
    display: flex;
    max-width: 1440px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .fundo-bd {
    background-color: ${(props) => props.theme.fundoCard};
    box-shadow: 0px 4px 10px #cfcfcf;
    max-width: 250px;
    height: 22rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition-delay: all 1s ease;
    @media (max-width: 1024px){
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
    @media (max-width: 768px){
      margin-top: 3rem;
    }
    @media (max-width: 375px){
      margin: auto;
      margin-top: 1rem;
    }
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
      color: black;
      a{
        color: black;
      }
      h2 {
        font-size: 18px;
        margin-bottom: 0.5rem;
        color: ${props => props.theme.fontColor}
      }
      span {
        display: flex;
        font-weight: 600;
        font-size: 16px;
        color: ${(props) => props.theme.fontColor};
        p {
          font-weight: 400;
          margin-bottom: 0.2rem;
          margin-left: 0.2rem;
        }
      }
    }
  }
`
