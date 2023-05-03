import  styled  from 'styled-components';
export const StyledRegisterForm = styled.div`

display:flex;
flex-direction:column;

form{
    display:flex;
    flex-direction:column;
    gap:5px;
    width:300px;

    background-color:var(--grey-1);
    color:var(--grey-3);
    padding: 15px;
    border-radius:5px;
}

input{
    padding:10px;
    border-radius:5px;
    border: 2px solid var(--color-primary);
    outline:none;
}

button{
    padding: 10px;
    border-radius:5px;
    outline:none;
    cursor:pointer;
    border:none;
    background-color:var(--green);
    color:var(--grey-0);
}

div{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

a{
    text-decoration:none;
    color: var(--color-primary);
}

`