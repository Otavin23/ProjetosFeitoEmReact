import styled from "styled-components"


export const Main = styled.main` 
  background-color: #050505;
  width: 100%;
  height: 91.6vh;
  display: flex;
  justify-content: start;
  align-items: center;
  background-image: linear-gradient(to right, #0e0e0e 40%, transparent),
    url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;

`
export const Container = styled.div`
  background: transparent;
  width: 70%;
  height: 65vh;
  display: flex;
  gap: 2rem;
  .image{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    img{
      width: 300px;
      height: 380px;
    }
  }
  .information{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3{
      color: #cecece;
      font-size: 50px;
    }
    .link-button{
      button{
        width: 240px;
        height: 50px;
        margin-right: 1rem;
        margin-top: 2rem;
        color: white;
        font-weight: 700;
        font-size: 20px;
        border: none;
        background-color: #b49e56;
        cursor: pointer;
        &:hover{
          transform: scale(1.1);
          transition: all 0.5s ease-in-out;
        }
      }
    }
    .timelive{
      color: white;
      span{
        display: flex;
        align-items: center;
        gap: 2rem;
        p{
          color #fa9907;
          font-size: 20px;
        }
      }
    }
  }
` 