import styled from "styled-components"
import { devices } from "./devices.jsx"

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  //Propriedades
  max-width: 1440px;
  height: 5rem;
  margin: auto;
  //Estilizando border bg
  border-bottom: 1px solid hsl(220, 14%, 75%);
  border-width: 1px;

  @media (max-width: 370px) {
    max-width: 100%;
    max-height: 4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  @media (max-width: 1101px) {
    display: flex;
    justify-content: space-between;
    margin: 0px 1rem 0px 1rem;
  }
  @media (max-width: 887px) {
    display: flex;
    justify-content: space-between;
    margin: 0px 1rem 0px 1rem;
  }
  .IconH {
    width: 25px;
    height: 20px;
    display: none;
  }
`
export const IconH = styled.div`
  img {
    display: none;
    width: 20px;
    @media (max-width: 375px) {
      display: flex;
    }
  }
`

export const Logo = styled.div`
  cursor: pointer;

  @media ${devices.mobile} {
    margin-left: -1rem;
  }
  @media (max-width: 370px) {
    margin-left: 1rem;
  }
`

export const NavUl = styled.ul`
  //Padrão
  list-style: none;
  font-size: 16px;
  font-weight: 500;

  //Posição
  display: flex;
  @media ${devices.mobile} {
    display: none;
  }
  a {
    //Estilização
    padding: 0.3rem 1rem;
    text-decoration: none;
    color: hsl(219, 9%, 45%);
    cursor: pointer;
    &:focus {
      padding: 1.7rem 1rem;
      border-bottom: 1px solid hsl(26, 100%, 55%);
      border-width: 0.2rem;
      font-weight: 600;
      color: hsl(220, 13%, 13%);
    }
  }
`

export const PerfilAndCompras = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const BotaoCarrinho = styled.button`
  //Removendo fundo do carrinho
  background: transparent;
  border: none;
  cursor: pointer;
  max-width: 30px;
  max-height: 30px;
  .countCart {
    width: 20px;
    height: 20px;
    background-color: hsl(26, 100%, 55%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: -30px 0px 0px 7px;
    position: absolute;
    span {
      color: hsl(0, 0%, 100%);
      font-weight: bold;
      font-size: 13px;
    }
  }
`

export const Perfil = styled.button`
  // Removendo fundo do botão
  background: transparent;
  border: none;

  //Estilizando imagem

  img {
    width: 40px;
    height: 40px;
    &:hover {
      border-radius: 50%;
      border: 1px solid hsl(26, 100%, 55%);
      background-color: hsl(26, 100%, 55%);
    }
  }
  `
// Começando a estilizar o main

export const Main = styled.main`
  max-width: 1440px;
  max-height: 100vh;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  @media (max-width: 370px) {
      display: flex;
      flex-wrap: wrap;
    }
    @media ${devices.mobile} {
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 809px){
        display: flex;
        flex-wrap: nowrap;
    }
`
export const SecaoPhoto = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1440px;

  @media (max-width: 375px){
      width: 1440px;
      margin-top: 5rem;
  }
  @media (max-width: 897px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 370px) {
    width: 100%;
  }
  .container {

    .ProxPhoto {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 100%;
      display: none;

      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin: 0 1rem;
        &:hover {
          transition: all 0.05s ease;
          width: 35px;
          height: 35px;
        }
      }
      #Esquerda {
        transform: rotate(-180deg);
      }
    }

    img {
      border-radius: 1rem;
      cursor: pointer;
    }
  }
  .ImagePhoto {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1rem;
    img {
      margin-top: 2.5rem;
      max-width: 350px;
      height: 350px;
      @media ${devices.mobile} {
        margin-top: 13rem;
        border-radius: 0px;
        width: 500px;
      }
      @media (max-width:809px){
          width: 250px;
          height: 250px;
      }
      @media (max-width: 715px) {
        width: 300px;
        height: 300px;
      }
      @media (max-width: 370px) {
        width: 370px;
        height: 370px;
      }
    }
    .OpenCart {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .blockImage {
      display: flex;
    img {
      width: 80px;
      height: 80px;
      margin-right: 0.6rem;
      @media ${devices.mobile} {
        display: none;
      }
      @media (max-width:809px){
          width: 55px;
          height: 55px;
      }
      &:hover {
        background: transparent;
        opacity: 0.3;
      }
    }
  }
`
export const SecaoInformation = styled.section`
    max-width: 500px;
    max-height: 87.8vh;

    display: flex;
    align-items: center;
.container-information{
    max-width: 500px;
    max-height: 87.8vh;
    display: flex;
    align-items: center;
    }
    #description{
        color:hsl(219,9%, 45%);
        font-weight: 400;
    }
    .text{
        display: flex;
        max-width: 100%;
        max-height: 100%;
        @media ${devices.mobile}{
            margin-top: 25rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media (max-width: 715px){
            margin-top: 2rem;
        }
        @media (max-width: 653px){
            margin-top: 5rem;
        }
        @media (max-width: 660px){
            margin-top: 10rem;
        }
        @media (max-width: 600px){
            margin-top: 10rem;
        }
        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 85%;
        }
        #sneaker{
            color:hsl(26, 100%, 55%);
            font-weight: bold;
            font-size: 15px;
            margin-bottom: 0.5rem;
        }
        #description{
            margin-top: 0.5rem;
            margin-bottom: 1rem;
        }
        h1{
            color: hsl(0, 0%, 0%);
            font-size: 35px;
            max-width: 400px;
            font-weight: bold;
        }
    }
    .CartAdd{
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media ${devices.mobile}{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        h2{
            font-size: 25px;
            font-weight: bold;
        }
        button{
            border: none;
            background: hsl(25, 100%, 94%);
            padding: 0.5rem;
            text-align:center;
            color: hsl(26, 100%, 55%);
            font-size: 16px;
            font-weight: bold;
            border-radius: 0.5rem;
            margin-left: -10rem;
            @media ${devices.mobile}{
                margin-left: -6rem;
            }
            @media (max-width: 715px){
                margin-right: -5rem;
            }
        }
    }
    #desconto{
        font-weight: bold;
        color: hsl(220, 14%, 75%);
        text-decoration:line-through;
    }
    .buttonsCarts{
        display: flex;
        width: 100%;
        margin-top: 1rem;
        @media ${devices.mobile}{
            display: flex;
            flex-direction: column;
            justify-content:center;
        }

        .AddToCart{
            text-align: center;
            width: 60%;
            border: none;
            border-radius: 0.5rem;
            background-color: hsl(26, 100%,55%);
            color: white;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0px 5px 30px #eeb487;
            @media ${devices.mobile}{
                width: 100%;
                height: 3.3rem;
            }
            cursor: pointer;
            .svgImg{
                margin-right: 1rem;
            }
            &:hover{
                box-shadow: 0px 10px 35px #eeb487;
            } 
        }
    }
    .buttonAdd{
        //Flex-box
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-right: 1rem;
        @media ${devices.mobile}{
            width: 100%;
        }

        //Estilização padrão
        background-color: hsl(223, 64%, 98%) ;
        width:150px;
        height: 3.3rem;
        border-radius: 0.2rem;
        p{
            color:  hsl(26, 100%, 55%);
            font-size: 25px;
            font-weight: bold;
            cursor: pointer;
        }
        button{
            border: none;
            color: hsl(0, 0%, 0%);
            font-size: 20px;
            font-weight: bold;
        }
    
    }
}
`
