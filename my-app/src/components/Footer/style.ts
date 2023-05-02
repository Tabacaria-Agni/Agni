import styled from 'styled-components';

export const StyledFooter = styled.div`

border-top: 1px solid var(--color-primary);
height:80px;
width:100%;

background-color:var(--grey-3);

position: absolute;
bottom:0;

display: flex;
align-items: center;
justify-content: space-evenly;
align-content: center;

color:var(--grey-1);

a{
    color:var(--grey-1);
    text-decoration: none;
}

div{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
}

`