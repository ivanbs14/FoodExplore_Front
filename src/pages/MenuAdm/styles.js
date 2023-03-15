import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: ${px2vw(105)} auto ${px2vw(77)};
    grid-template-areas: 
    "header"
    "content"
    "footer";
    
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    div {
        .adm {
            font-size: 12px;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }
`;

export const Content = styled.div`
    padding: ${px2vw(32)} ${px2vw(123)} 0;
    position: relative;

    .imgMenu {
        width: ${px2vw(632)};
        height: ${px2vw(406)};
        position: absolute;

        margin-top: ${px2vw(37)};
        margin-left: ${px2vw(-70)};
    }
    
    .titulo {
        height: ${px2vw(260)};
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        margin-top: ${px2vw(172)};
        padding: ${px2vw(87)} ${px2vw(101)} 0;
        border-radius: 8px;

        h1 {
            font-weight: 500;
            font-size: ${px2vw(40)};
        }

    }
`;

export const Cont = styled.div`
    margin-top: 42px;

    display: flex;
    flex-direction: column;

    >section {

        h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 32px;
        }
    }

    .menucard {
        display: flex;
        gap: 27px;

        margin-top: 27px;
    }

    .cards {
        width: 304px;
        height: 462px;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 48px;

        background-color: ${({ theme }) => theme.COLORS.Dark_200};
    }

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