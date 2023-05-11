import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    :root{
    --brand1            : #0f015e;
    --brand2            : #041fbd;
    --brand3            : #00026d;
    --grey1             : #212529;
    --grey2             : #ffffffe6;
    --whiteFixed        : #FFFFFF;
    --sucess1           : #01460d;
    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: 'Lexend', sans-serif;
    }

    *{
        margin          : 0;
        padding         : 0;
        box-sizing      : border-box;
        
    }

    body,button,input,label{
        font-family     : 'inter';
        font-size       : 16px;
    }

    button {
        cursor          : pointer;
    }

    li,ul {
        list-style      : none;
    }

    a{
        text-decoration : none;
    }

    img{
        max-width       : 100%;
    }

    body{
        background: var(--whiteFixed);
        overflow-x: hidden;
        ::-webkit-scrollbar{
        display: none;
        }
    }
`

interface Props {
    height: string
}

export const DivSpace = styled.div<Props>`
    height: ${(props) => props.height};
`
