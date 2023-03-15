import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
        width: ${px2vw(360)};
        height: 48px;
        
        margin-top: ${px2vw(16)};
        border-radius: 8px;
        padding: 12px;

        background-color: ${({ theme }) => theme.COLORS.Dark_800};
        select {
            width: ${px2vw(335)};
            border: none;
            
            font-weight: 400;
            font-size: 14px;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            background-color: ${({ theme }) => theme.COLORS.Dark_800};
       }
`;