import  styled  from 'styled-components';
export const StyledCartProduct = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

background-color:var(--grey-1);
color:var(--grey-3);

border-radius:5px;

padding:5px;
margin:5px;

img{
    width:60px;
    height:100%;

    border-radius:5px;
}

button{
    background-color: transparent;
    border: none;

    font-weight:bold;
    font-size:20px;

    cursor:pointer;
}

div{
    display:flex;
    gap:5px;
}

`