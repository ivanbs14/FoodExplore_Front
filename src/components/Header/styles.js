import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: ${px2vw(105)};

    background: ${({ theme }) => theme.COLORS.Dark_600};
    
    @media (min-width: 429px) {
        
    }
`;

export const Content = styled.div`
    width: 100%;
    height: ${px2vw(105)};
    padding: ${px2vw(24)} ${px2vw(123)};
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${px2vw(32)};

    a {
       
    }
    
    @media (min-width: 429px) {
        
    }

    button {
        width: 216px;
        height: 56px;
    }
`;

export const Search = styled.div`
    width: 100%;
    height: ${px2vw(48)};

    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${({theme}) => theme.COLORS.Dark_900};

    svg {
        width: 24px;
        height: 24px;
    }

`;

export const Logout = styled.button`
    border: none;
    background: none;

    padding:10px 150px 0 32px;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 32px;
    }
`;