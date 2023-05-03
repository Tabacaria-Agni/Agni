import styled from 'styled-components';

export const StyledFooter = styled.div`

border-top: 1px solid var(--color-primary);
height:310px;
width: 100%;
background-color:var(--grey-3);



display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
align-content: center;

color:var(--grey-1);

font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

a{
    color:var(--grey-1);
    text-decoration: none;
}
@media(min-width:1000px){
    height: 157px;
    flex-direction: row;
}

`