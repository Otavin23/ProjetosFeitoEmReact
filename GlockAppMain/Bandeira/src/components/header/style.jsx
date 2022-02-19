import styled from "styled-components"


export const Header = styled.header`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0px 2px 4px hsl(0, 0%,98%);
    border-bottom: 1px solid hsl(0, 0%, 98%);
    border-width: 0.2rem;
    max-width: 1440px;
    margin: auto;
    .logo{
        h1{
            font-size: 22px;
            color: hsl(200, 15%, 8%);
            margin-left: 2rem;
            font-weight: 700;
        }
    }
    .darkMode{
        margin-right: 2rem;
        button{
            display: flex;
            align-items: center;
            border: none;
            background: transparent;
            font-weight: 600;
            svg{
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