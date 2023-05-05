import styled from "styled-components";
import { symbol } from "zod";

export const StyledAboutPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80vw;
        background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)) , url(../../../public/AboutBackground.png);
    }
`

export const StyledSectionFooter = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    gap: 2rem;
    width: 95%;
`
export const StyledSectionHeader = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2.5rem;
`

export const StyledDivFirst = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    border: 0.5px solid white;
    border-radius: 6px;
`
export const StyledDivSecond = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    border: 0.5px solid white;
    border-radius: 6px;

    div{
        display: flex;
        justify-content: space-around;
        padding: 1.5rem;
    }
`

export const StyledDivFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;

    button{
        border: none;
    }
`

export const StyledButtonFirst = styled.button`

    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    background-color: #D9D9D9;
    padding: 1rem 5rem 1rem 5rem;

`

export const StyledButtonSecond = styled.button`

    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    background-color:  #648F61;
    padding: 1rem 5rem 1rem 5rem;
    color: white;

`

