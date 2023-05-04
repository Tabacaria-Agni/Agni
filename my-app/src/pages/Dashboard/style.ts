import  styled  from 'styled-components';
export const StyledDashboardMain = styled.main`

#buttonLogout{
    background-color:transparent;
    border:none;

    position:absolute;
    top:80px;
    right:40px;
}

@media(max-width:1000px){
    #buttonLogout{
        top:30px;
        right:0px;


    }
}

#productsLabel{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#productsLabel > input{
    margin-right:20px;
    padding:0.5rem 1rem;
    border-radius:5px;
    outline:none;

    border:2px solid var(--color-primary);
}

#filterLabel{
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:15px;
}

.divFilters{
    display: flex;
    align-items: center;
    justify-content: center;

    gap:5px;

    overflow-x: scroll;

    ::-webkit-scrollbar {
    height: 3px;
    }
    ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    }

    border: 2px solid var(--color-primary);

    margin: 20px;
    padding: 10px;
}

.divFilters button{
    background-color: var(--grey-3);
    color:var(--grey-0);

    border: 2px solid var(--grey-3);
    border-radius:5px;

    cursor: pointer;

    min-width:120px;
    min-height:120px;

    padding: 0.6rem 1.2rem;

    transition:0.6s;

    :hover{
        border: 2px solid var(--color-primary);
    }
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
    max-height: 400px;
    justify-content: center;
    align-items: center;

    list-style:none;

    border: 2px solid var(--color-primary);
    margin:20px;

    ::-webkit-scrollbar {
    width: 3px;
    }
    ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    }
    
}

@media(max-width:1200px){
    .productList{
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
    }
}

@media(max-width:650px){
    .productList{
        grid-template-columns: 1fr 1fr;
    }
}

@media(max-width:450px){
    .productList{
        grid-template-columns: 1fr;
    }
}

h2{
    margin-left:20px;
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
    max-width: 600px;
    min-width: 300px;

    width:25vw;
    height:40vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius:5px;
    border: none;

    padding: 10px;

}

.modalClose{
    background-color:transparent;
    font-weight:bold;
    border:none;
    font-size:26px;
    cursor:pointer;
}

#modalContainer > header{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    border-bottom:2px solid var(--color-primary);
    margin-bottom:3px;
    color:var(--color-primary);
}

#cartEmpty{
    text-align:center;
    position:relative;
    top: -50px;

    margin:0 auto;
}

#modalContainer > div{
    max-height: 300px;
    overflow-x: auto;

    ::-webkit-scrollbar {
    width: 3px;
    }
    ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    }
}

.cartClear{
    padding: 0.5rem 1rem;
    border:none;
    border-radius:5px;

    outline:none;
    cursor:pointer;

    background-color:var(--color-primary);
    color:var(--grey-0);
}

.spanTotalValue{
    display: flex;
    justify-content: space-between;

    color:var(--color-primary);
}

`