import styled from "styled-components";

export const Container = styled.div`

`;


export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;

    margin: 1rem 0 0 0;


    `;  

export const Content = styled.div`
        margin: 1rem;
        box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
        border-radius: 8px;
        background: #dbdbdb;
        overflow: hidden;
        a {
            
            text-align: center;
        }
        img {
            width: 100%;
        }
    `;