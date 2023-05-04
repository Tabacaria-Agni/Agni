import  styled  from 'styled-components';
export const StyledDashboardMain = styled.main`

#productsLabel{
    display: flex;
    align-items: center;
    justify-content: space-between;
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