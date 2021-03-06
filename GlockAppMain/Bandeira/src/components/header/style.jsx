import styled from "styled-components"


export const Header = styled.header`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-width: 0.2rem;
    max-width: 1440px;
    margin: auto;
    color: ${props => props.theme.fontColor};
    box-shadow: ${props => props.theme.shadow};
    border-bottom: 2px solid ${props => props.theme.border};
    @media (max-width: 375px){
        justify-content: space-between;
        width: 100%;
    }
    .logo{
        h1{
            font-size: 22px;
            color: ${props => props.theme.fontColor};
            margin-left: 2rem;
            font-weight: 700;
            cursor: pointer;
            a{
                text-decoration: none;
            }
        @media (max-width: 375px){
            width: 160px;
            font-size: 16px;
        }
        }
    }
    .darkMode{
        margin-right: 2rem;
        color: ${props => props.theme.fontColor};
        @media (max-width: 375px){
            width: 100px;
        }
        button{
            display: flex;
            align-items: center;
            border: none;
            background: transparent;
            font-weight: 600;
            color: ${props => props.theme.fontColor};
            .img,svg{
                width: 25px;
                height: 25px;
                margin-right: 0.4rem;
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
`