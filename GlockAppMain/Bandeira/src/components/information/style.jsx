import reactDom from "react-dom"
import styled from "styled-components"

export const Main = styled.main`
  width: 100%;
  height: 90.2vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 96%;
  height: 85vh;
`

export const Back = styled.div`
  max-width: 1440px;
  margin: auto;
  height: 5rem;
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
  }
  button {
    border: none;
    padding: 0.3rem 2.3rem 0.3rem 2.3rem;
    font-weight: 600;
    border-radius: 0.3rem;
    background-color: transparent;
    border: 3px solid #e9e9e9;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 10px #eeeeee;
  
    &:hover {
      transition: all 0.05s ease;
      background: #e7e7e7;
      opacity: 0.3;
      cursor: pointer;
    }
    svg {
      width: 30px;
      height: 30px;
      margin-right: 0.4rem;
    }
  }
`
export const Information = styled.section`
  max-width: 1440px;
  margin: auto;
  height: 73vh;
  display: flex;
  justify-content: space-between;
`
export const Frag = styled.div`
  display: flex;
  margin-top: 3.5rem;
  img {
    width: 500px;
    height: 325px;
  }
`
export const TextInformation = styled.div` 
    width: 100%;
    margin-left: 5rem;
    h2{
        margin-top: 5rem;
        font-size: 28px;
    }
    .block{
        display: flex;
        justify-content:space-between;
        margin-top: 1rem;
        }
    }
    .card{
        p{
            margin-bottom: 0.4rem;
            b{
                font-weight:600;
            }
            font-weight: 500;
        }
    }
    .Countries{
        #countries-bt{
            border: none;
            background: transparent;
            font-weight: 600;
            padding: 0;
        }
        button{
            margin-top: 3rem;
            margin-right: 0.2rem;
            margin-left: 0.3rem;
            border: none;
            padding: 0.3rem 1.5rem 0.3rem 1.5rem;
            font-size: 14px;
            border-radius: 0.3rem;
            background: transparent;
            border: 3px solid #f3f3f3;
        }
    }
`
