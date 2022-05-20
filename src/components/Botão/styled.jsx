import styled from 'styled-components'

export const Botao = styled.button`
    width: 50%;
    height: 3.125rem;
    margin: 1rem 0 0;
    
    border-radius: 0.625rem;
    background: #126b81;
    font-size: 18px;
    color: #FFFFFF;
    transition: all 0.5s;

    :hover {
        background: #FFFFFF;
        color: #126b81;
        border-style: outset;
        border-color: #126b81;

        font-size: 20px;
    }
`;