import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #CDB587;

    --grey-3: #1A1D1F;
    --grey-2: #212529;
    --grey-1: #D9D9D9;
    --grey-0: #F8F9FA;

    --green: #668064;


body{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;

    height: 100vh;

    background-color:var(--grey-2);
    color:var(--grey-1);
}


*{
    font-family: 'Inter', sans-serif;
}
}
`