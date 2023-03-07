import styled from "styled-components";

export const Conteiner = styled.button`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 48px;
    border: 0;
    padding: 12px, 32px;
    border-radius: 5px;
    font-weight: 500;

    margin-top: 10px;

    &:disabled {
        opacity: 0.5;
    }
`;