import styled from "styled-components";

export const Conteiner = styled.button`
    background: none;
    color: ${({theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.LIGHT_100};

    border: none;
    font-size: 14px;
`;