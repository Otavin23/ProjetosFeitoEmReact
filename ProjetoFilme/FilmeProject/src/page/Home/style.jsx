import styled from "styled-components"

export const Main = styled.main`
  //max-height: 37.3rem;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #0e0e0e 40%, transparent),
    url("https://p4.wallpaperbetter.com/wallpaper/830/662/333/5c1c9db4b02cc-wallpaper-preview.jpg");
  background-size: cover;
  max-width: 1440px;
  margin: auto;
`
export const Container = styled.div`
  width: 30%;
  margin-left: 5rem;
  display: flex;
  align-items: center;
  .information {
    display: grid;
    gap: 2rem;
    h2 {
      color: white;
      font-size: 50px;
    }
    .information-description {
      p {
        color: #cac9c9;
        opacity: 0.5;
      }
    }
    .information-button {
      button {
        margin-right: 1.5rem;
        width: 170px;
        height: 50px;
        border: none;
        background-color: #59558b;
        color: white;
        font-size: 18px;
        cursor: pointer;
        &:hover{
            background-color: #9c6b01;
        }
      }
    }
  }
  .information-type {
    display: flex;
    list-style: none;
    gap: 1rem;
    color: #e2e2e2;
    font-weight: 400px;
    li {
      border-bottom: 5px solid red;
      border-radius: 6px;
    }
  }
`
