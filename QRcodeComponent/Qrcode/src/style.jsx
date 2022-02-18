import styled from "styled-components"

export const MainBg = styled.main`
    background-color: hsl(0, 0%, 100%);
    width: 350px;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0px 10px 10px 10px hsl(212, 45%, 89%);
    @media (max-width: 375px){
        height: 90vh;
    }
`
export const Container = styled.div`
    max-width: 90%;
    height: 93%;
    display: flex;
    flex-direction: column;
    .bg-cod{
        max-width: 100%;
        max-height: 70%;
        display: flex;
        justify-content: center;
        img{
            width: 100%;
            max-height: 95%;
            border-radius: 1rem;
        }
    }
    .information{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 100%;
        max-height: 100%;
        .container-information{
            width: 90%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 0.4rem;
            h2{
                color: hsl(218, 44%, 22%);
                margin-bottom: 1rem;
            }p{
                text-align: center;
                font-size: 14px;
                color: hsl(220, 15%, 55%);
                max-width: 15rem;
                max-height: 100%;
            }
        }
    }
` 