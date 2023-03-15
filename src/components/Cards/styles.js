import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
        width: 304px;
        height: 462px;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 48px;

        background-color: ${({ theme }) => theme.COLORS.Dark_200};

    #stwo {
        margin-top: 16px;
        margin-left: 80%;
        font-size: 24px;
    }

    img {
        width: 176px;
        margin: 26px 0 15px 0;
    }

    strong {
        font-weight: 700;
        font-size: 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        display: flex;
        align-items: center;

        margin-bottom: 15px;

        svg {
            font-size: 30px;
        }
    }

    p{
        font-size: 14px;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
        
        margin-top: 15px;

        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
`;
