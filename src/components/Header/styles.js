import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: ${px2vw(105)};

    background: ${({ theme }) => theme.COLORS.Dark_600};

    .logs {
        display: flex;
        flex-direction: column;

        a {
            margin-left: 75%;
        }
    }
    
    @media (min-width: 429px) {
        
    }
`;

export const Content = styled.div`
    width: 100%;
    height: ${px2vw(105)};
    padding: ${px2vw(24)} ${px2vw(123)};
    
    display: flex;
    justify-content: left;
    align-items: center;
    gap: ${px2vw(32)};

    a {
        display: flex;
        align-items: center;

        width: 32px;
        height: 32px;
    }
    
    button {
        width: ${px2vw(216)};
        height: ${px2vw(56)};

        margin-top: 0;
        padding: 0;
        border-radius: 5px;
    }

    @media (min-width: 429px) {
        
    }
`;

export const Search = styled.div`
    width: ${px2vw(620)};
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

/* export const Logout = styled.div`
    border: none;

    cursor: pointer;

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: ${px2vw(32)};
    }
`; */