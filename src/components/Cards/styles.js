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
    border: 1px solid #000204;
    border-radius: 8px;

    #dish {
        margin-left: 80%;
    }

    img {
        width: 176px;
        /* margin: auto; */
    }

    strong {
        font-weight: 700;
        font-size: 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        display: flex;
        align-items: center;

        margin-top: 15px;

        svg {
            font-size: 30px;
        }
    }

    p{
        height: 45px; 
        font-size: 14px;
        text-align: center;
        padding: 0px 24px;

        margin-bottom: 15px;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
        
        margin-bottom: 15px;

        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    /* .display {
        border: 1px solid red;
    } */

    .display {
        width: 208px;
        height: 48px;;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 24px;

        .insert{
        font-size: 14px;
        height: auto;
        }
    }
`;
