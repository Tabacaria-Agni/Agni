import styled from 'styled-components';

export const StyledHeader = styled.header`
height:100px;
width: 100%;
border-bottom: 1px solid var(--color-primary);

.containerHeader{
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:var(--grey-0);
    height: 100px;
    width: 90%;
    margin-left: 5%;
}

h1{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}

img{
    width:70px;
}

@media(min-width:1000px){
    height:196px;
    .containerHeader{
        width: 80%;
        margin-left: 10%;
        height:196px;
    }
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 51px;
    }
    img{
        width: 170px;
    }
}
`
