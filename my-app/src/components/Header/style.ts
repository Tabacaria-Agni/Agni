import styled from 'styled-components';

export const StyledHeader = styled.header`
height:150px;
width:100%;

border-bottom: 1px solid var(--color-primary);
display:flex;
justify-content:space-evenly;
align-items:center;

color:var(--grey-0);



img{
    width:100px
}

@media(max-width:400px){
    font-size:12px;
}
`
