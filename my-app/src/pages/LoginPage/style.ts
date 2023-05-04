import  styled  from 'styled-components';

export const StyledLoginPage = styled.div`
    min-height: 720px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .divFormContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
    .loginTitle{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 30px;
    }
    .formContainer{
        background-color: #D9D9D9;
        width: 100%;
        height: 512px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        padding-top: 25px;
    }
    .divInputLogin{
        margin-bottom: 25px;
        width: 90%;
        display: flex;
        flex-direction: column;
    }
    .labelInput{
        font-style: normal;
        font-weight:bold;
        font-size: 16px;
        line-height: 19px;
        color: #373737;
    }
    .inputLogin{
        width: 99%;
        height: 60px;
        background: transparent;
        border: 1px solid #373737;
        border-radius: 7px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #373737;
        cursor: pointer;
    }
    .formMesage{
        color: #000000;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        margin-top: 20px;
    }
    .buttonLogin{
        border: 1px solid #668064;
        width: 90%;
        height: 60px;
        margin-top: 30px;
        background: #668064;
        border-radius: 7px;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #D9D9D9;
        text-align: center;
        cursor: pointer;
    }
    .buttonRegister{
        width: 90%;
        height: 60px;
        background: #373737;
        border-radius: 7px;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #D9D9D9;
    }
    .imgContainer{
        display: none;
    }
    .loginImg{
        width: 500px;
        height: 630px;
        border-radius: 31px;
    }
    @media(min-width:1260px){
        .imgContainer{
            display: flex;
        }
        flex-direction: row;
        width: 80%;
        margin-left: 10%;
        justify-content: space-between;
        position: relative;
        height: 100%;
        .divFormContainer{
            width: 500px;
            height: 630px;
            position: absolute;
            right: 0;
        }
    }
`
