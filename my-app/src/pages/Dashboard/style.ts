import  styled  from 'styled-components';


export const StyledDashboardMain = styled.main`
#buttonLogout{
    background-color:transparent;
    border:none;
    cursor: pointer;
    position:absolute;
    top:80px;
    right:60px;
}

@media(max-width:1000px){
    #buttonLogout{
        top:30px;
        right:0px;
    }
}

#productsLabel{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
}
.titleProductsLabel{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #CDB587;
}

#productsLabel > input{
    padding:0.5rem 1rem;
    border-radius:5px;
    outline:none;
    background: #D9D9D9;
    border-radius: 10px;
    width: 85%;
}

#filterLabel{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:15px;
}
.titleFilterLabel{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #CDB587;
}

.divFilters{
    display: flex;
    align-items: center;
    justify-content: center;

    gap:5px;

    overflow-x: scroll;

    ::-webkit-scrollbar {
    height: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    }

    border-top: 1px solid var(--color-primary);
    border-bottom: 1px solid var(--color-primary);

    margin: 20px;
    padding: 10px;
}

.divFilters button{
    background-color: transparent;
    color:var(--grey-0);

    border: none;
    border-radius:50%;

    cursor: pointer;

    min-width:120px;
    min-height:120px;

    padding: 0.6rem 1.2rem;

    transition:0.6s;

    :hover{
        border: 2px solid var(--color-primary);
    }
}
.divFilters button:hover{
    border: 1px solid #757586;
}
#readyToUse{
    background-image: url("Narguile.png");
}

#body{
    background-image: url("corpoNargs.png");
}

#hose{
    background-image: url("mangueira.png");
}

#vase{
    background-image: url("vaso.png");
}

#rosh{
    background-image: url("Rosh.png");
}

#plate{
    background-image: url("pratosNargs.png");
}

#essence{
    background-image: url("essencia.png");
}

#accessories{
    background-image: url("acessorios.png");
}

#clear{
    background-image: url("clear.png");
}


.center{
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px 100px;
}

.productList{
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    overflow-x: scroll;
    max-height: 650px;
    justify-content: center;
    align-items: center;
    list-style:none;
    gap: 10px;
    background: url(../../src/assets/smoke.png);

    border: 1px solid var(--color-primary);
    margin:20px;
    padding-right: 20px;
    padding-top: 20px;
    border-radius: 10px;

    ::-webkit-scrollbar {
    width: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    }
}


/* @media(max-width:1200px){
    .productList{
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
    }
}

@media(max-width:650px){
    .productList{
        grid-template-columns: 1fr 1fr;
    }
} */

@media(max-width:450px){
    .productList{
        grid-template-columns: 1fr;
    }
}



.buttonCart{
    width:50px;
    height:50px;

    background-color:transparent;
    border:none;
    cursor:pointer;
}

.buttonCart > img{
    width: 100%;
}

#divContainer, #overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
}

#overlay {
    background: rgba(0,0,0,0.5);
}

#modalContainer {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: var(--grey-3);
    border-radius: 3px;
    width: 90%;

    max-height:55vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    border-radius:5px;
    border: none;
    padding-bottom: 10px;

}
#headerModal{
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom:1px solid var(--color-primary);

    color:var(--color-primary);
}
.headerTitleModal{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
}
.modalClose{
    background-color:transparent;
    font-weight:bold;
    border:none;
    font-size:26px;
    cursor:pointer;
}
.cartContainer{

    width: 90%;
    margin-left: 5%;
    max-height: 240px;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
}

#cartEmpty{
    text-align:center;
    position:relative;
}

#modalContainer > div{
    /* max-height: 300px; */
    overflow-x: auto;
    
    ::-webkit-scrollbar {
    width: 0px;
    }
    ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    }
}

.cartClear{
    cursor: pointer;
    border: none;
    margin-bottom: 5%;
    width: 90%;
    margin-left: 5%;
    height: 60px;
    border-radius: 10px;
    background: #373737;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #D9D9D9;
}

.spanTotalValue{
    border: 1px solid #CDB587;
    border-radius: 10px;
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    color:var(--color-primary);
}
.TitleTotalValue{
    margin-left: 5%;
}
.totalValue{
    margin-right: 5%;
}


@media(min-width:1000px){
    #filterLabel{
        padding: 0;
        height: 123px;
        width: 90%;
        margin-left: 5%;
        align-items: center;
        text-align: center;
    }
    .divFilters{
        margin-top: 0;
        gap: 15px;
        width: 90%;
        margin-left: 5%;
        border: 1px solid #CDB587;
        border-radius: 10px;
    }
    #productsLabel{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 91.5%;
        margin-left: 5%;
    }
    #productsLabel > input{
        width: 300px;
    }
    .productList{
        margin: 0;
        padding: 0;
        width:  91.5%;
        margin-left: 5%;
        margin-top: 40px;
        margin-bottom: 20px;
        padding-top: 20px;
    }
    #modalContainer{
        width: 50%;
    }
}

`