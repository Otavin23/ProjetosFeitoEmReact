import styled from "styled-components";


export const Header = styled.header`
    position: sticky;
    top: 1px;
    left: 1px;
    max-width: 1440px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f7f7f7; 
    box-shadow: 0px 2px 5px #dddddd;
    z-index: 9999;
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
                color: #000000;
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
            color: #020202;
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
          color: #000000;
          padding: 1rem;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 15px;

          cursor:pointer;
    }
    }
`
