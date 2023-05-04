import  styled  from 'styled-components';
export const StyledLiProducts = styled.li`

width:15vw;

background-color:var(--grey-1);
color:var(--grey-3);
margin:10px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding:10px;

img{
    width:100%;
    object-fit:cover;
    height:200px

}

button{
    background-color:var(--green);
    color:var(--grey-0);
    border:none;
    border-radius:5px;

    padding:0.6rem 1.2rem;
    cursor:pointer;

    width:90%;
}

.productName{
    font-weight:bold;
}

@media(max-width:1200px){
    width: 20vw;
}

@media(max-width:650px){
    width:30vw;
}
@media(max-width:450px){
    width:45vw;
}

`