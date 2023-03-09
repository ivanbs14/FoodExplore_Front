import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.textarea`
    width: 100%;
    height: ${px2vw(150)};

    background-color: ${({ theme }) => theme.COLORS.Dark_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 8px;
    padding: ${px2vw(16)};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        
    }
`;