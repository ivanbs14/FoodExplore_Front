import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.Dark_800};
    
    border-radius: 5px;

    margin: 36px 0;
    padding: 14px 12px;
    
    > input {
        width: 100%;
        font-size: 18px;
        
        padding: 12px;
        
        background: transparent;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        border: none;
        
        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }


    > svg {
        font-size: 24px;
        /* position: absolute; */
        
    }
`;

