import styled from "styled-components";

export const Conteiner = styled.span`
    font-size: 16px;
    padding:8px 16px;

    border-radius: 8px;
    margin-right: 16px;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: ${({theme}) => theme.COLORS.LIGHT_600};
    
`;