import  styled  from 'styled-components';
export const StyledRegisterForm = styled.div`
    min-height: 1026px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .divHeaderForm{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin-top: 50px;
        margin-bottom: 10px;
    }
    form{
        width: 80%;
        height: 832px;
        display:flex;
        flex-direction:column;
        gap:5px;
        background-color:var(--grey-1);
        color:var(--grey-3);
        padding: 15px;
        border-radius:5px;
    }
    .divInput{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        margin-top: 32px;
        width: 100%;
    }

    input{
        padding-left: 10px;
        border-radius:5px;
        background-color: transparent;
        border: 1px solid #373737;
        height: 60px;
        outline:none;
        width: 96%;
        color:  #373737;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        cursor: pointer;
    }

    button{
        width: 100%;
        height: 60px;
        border: 1px solid #668064;
        border-radius: 7px;
        outline:none;
        cursor:pointer;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        margin-top: 68px;
        background-color:var(--green);
        color:var(--grey-0);
    }


    a{
        text-decoration:none;
        color: var(--color-primary);
    }

    @media(min-width:1260px){
        width: 500px;
        height: 900px;

        margin-bottom: 60px;
    }

`