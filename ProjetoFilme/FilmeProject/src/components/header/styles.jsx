import styled from "styled-components";


export const Header = styled.header`
    max-width: 1440px;
    margin: auto;
    height: 100%;
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0px 4px 10px #353535;
    .logo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        span{
            font-weight: 400;
            color: red;
            display: flex;
            font-size: 20px;
            p{
                color: #ffffff;
                font-weight: 700;
                margin-left: 0.5rem;
            }
        }
    }
    .search{
        max-width: 40%;
        input{
            width: 400px;
            height: 2.5rem;
            padding-left: 1rem;
            border: 1px solid #a7a7a7;
            background: transparent;
            outline: none;
            color: #ffffff;
            font-weight: 400;
            &::placeholder{
                color: #8d8a8a;
                
            }
        }
    }

` 
export const Navegacao =  styled.nav`
    ul{
      display: flex; 
      list-style: none;
      li{
          color: #ffffff;
          padding: 1rem;
          text-transform: uppercase;
          font-size: 15px;

          cursor:pointer;
    }
    }
`
