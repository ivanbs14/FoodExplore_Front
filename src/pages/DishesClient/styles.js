import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: ${px2vw(105)} auto ${px2vw(77)};
    
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    div {
        .adm {
            font-size: 12px;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }

    .hide {
        display: none;
    }
`;

export const Content = styled.div`
    padding: ${px2vw(32)} ${px2vw(123)} 0;

    button {
        font-weight: 700;
        font-size: ${px2vw(24)};
    }
`;

export const Cont = styled.div`
    margin-top: 42px;

    display: flex;
    gap: 47px;

    img {
        width: 390px;
        height: 390px;
    }

    .itens {
        width: 100%;
        height: 390px;

        h1, p {
            margin-bottom: 24px;
        }

        h1 {
            font-weight: 500;
            font-size: 40px;
        }

        p {
            font-size: 24px;
        }
        
        .products {
            display: flex;
            gap: 12px;

            margin-bottom: 48px;

            button {
                height: 32px;

                background-color: ${({ theme }) => theme.COLORS.Dark_1000};

                font-weight: 500;
                font-size: 14px;
                padding: 4px 8px;

                border-radius: 5px;
            }
        }

        .btn {
            width: 162px;
            height: 48px;
            font-weight: 500;
            font-size: 14px;

            padding: 12px 20px;
            margin-top: 0;
        }
    }

    .prices {
        display: flex;
        gap: 33px;

        align-items: center;

        .pric {
            display: flex;
            align-items: center;
        }
        input {
            width: 38px;
            height: 38px;

            background: none;
            border: none;

            margin: 0 0 0 24px;
        }
    }
`;