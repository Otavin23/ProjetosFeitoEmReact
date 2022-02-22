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
    padding: 0.3rem 2rem 0.3rem 2rem;
    font-weight: 600;
    border-radius: 0.5rem;
    background-color: transparent;
    border: 3px solid #e9e9e9;
    font-size: 17px;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 15px #f1eeee;
  
    &:hover {
      transition: all 0.05s ease;
      cursor: pointer;
      background-color: hsl(0, 0%, 87.84313725490196%);
      opacity: 0.4;
      color: #030303;
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
  @media (max-width: 376px){
    flex-direction: column;
  }
`
export const Frag = styled.div`
  display: flex;
  margin-top: 3.5rem;
  img {
    width: 500px;
    height: 325px;
    @media (max-width: 375px){
      width: 100%;
      height: 250px;
    }
  }
`
export const TextInformation = styled.div` 
    width: 100%;
    margin-left: 5rem;
    @media (max-width: 375px){
      margin: 1rem;
      flex-wrap: wrap;
    }
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
            font-weight: 550;
        }
    }
    .Countries{
        #countries-bt{
            border: none;
            background: transparent;
            font-weight: 600;
            padding: 0;
            @media (max-width: 375px){
              margin: 0px;
            }
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
            @media (max-width: 375px){
              padding: 0.3rem;
            }
          }
    }
`
