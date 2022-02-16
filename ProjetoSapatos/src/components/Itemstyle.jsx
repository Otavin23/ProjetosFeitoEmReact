import styled from "styled-components"

export const TerminoCompra = styled.section`
    max-width: 350px;
    height: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        width: 320px;
        height: 141px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .content{
            display: flex;
            justify-content: center;
            align-items: center;
        .photo{
            display: flex;
        }
        }

        img{
            width: 50px;
            height: 50px;
            border-radius: 0.4rem;
        }
        .text{
            font-weight: 400;
            color: hsl(219, 9%,45%); 
            text-align: start;
            font-size: 16px;
            max-width:250px;
            margin-left: 0.6rem;
            b{
                color: black;
                margin-left: 0.5rem;
                font-size: 17px;
            }
        }
        .DeleteProduct{
            background: transparent;
            border: none;
            img{
                width: 20px;
                height: 20px;
            }
        }
    }
    #Chekout{
        border: none;
        width: 100%;
        height: 3.5rem;
        background-color:hsl(26, 100%, 55%);
        color: hsl(0, 0%, 100%);
        font-weight: bold;
        border-radius: 0.6rem;
        &:hover{
            opacity: 0.5;
            transition: all 0.05s ease;
        }
    }
` 
