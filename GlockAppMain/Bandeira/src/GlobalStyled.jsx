import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props)=> props.theme.body};
    }
    header{
        background-color: ${(props)=> props.theme.header};
    }
` 