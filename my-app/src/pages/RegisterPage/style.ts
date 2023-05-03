import  styled  from 'styled-components';

export const StyledRegisterPage = styled.main`

    .registerLogo{
        width: 500px;
        height: 900px;
        display: none;
    }
    @media(min-width:1260px){
        .registerLogo{
            display: flex;
        }
        .divContainer{
            display: flex;
            width: 90%;
            margin-left: 5%;
            justify-content: space-between;
            align-items: center;
        }   
    }
`