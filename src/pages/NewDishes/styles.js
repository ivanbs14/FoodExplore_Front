import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 100vh;
    
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    @media (min-width: 429px) {
    }

    /* margin-bottom: ${px2vw(32)}; */

`;