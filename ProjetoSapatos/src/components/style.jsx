import styled from "styled-components"
import { devices } from "../pages/Home/devices"

export const Fundo = styled.div`
  width: 350px;
  height: 200px;
  background-color:hsl(0, 0%, 100%);
  box-shadow: 0px 3px 15px #adadad;
  position: relative;
  top: 20px;
  left: -200px;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media ${devices.media}{
    margin: auto;
    margin-left: -2.8rem;
    margin-top: 1rem;
    height: 15rem;
    border-radius: 0.5rem;
  }
  
  header {
    display: flex;
    align-items: center;
    height: 3rem;
    @media ${devices.mobile}{
      height: 5rem;
      border: 1px solid #ebebeb;
      border-radius: 0.3rem;
    }
    p {
      font-weight: bold;
      font-size: 17px;
      margin: 0px 0px 0px 1rem;
    }

    border-bottom: 2px solid #ebebeb;
  }
  span {
    max-width: 400px;
    max-height: 100%;
    height: 76%;

    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    #cart {
      font-weight: bold;
      font-size: 16px;
      color: hsl(219, 9%, 45%);
    }
  }
`
