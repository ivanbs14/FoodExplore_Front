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
`;

export const Content = styled.div`
    padding: ${px2vw(32)} ${px2vw(123)} 0;

    a {
        font-weight: 700;
        font-size: ${px2vw(24)};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        display: flex;
        align-items: center;

        svg {
            width: 50px;
            height: 50px;
        }
    }
`;

export const Cont = styled.div`
    margin-top: 42px;

    display: flex;
    gap: 47px;

    img {
        width: ${px2vw(390)};
        height: ${px2vw(390)};
    }

    .itens {
        width: 100%;
        height: ${px2vw(390)};

        margin-top: ${px2vw(45)};

        h1, p {
            margin-bottom: ${px2vw(24)};
        }

        h1 {
            font-weight: 500;
            font-size: ${px2vw(40)};
        }

        p {
            font-size: ${px2vw(24)};
        }
        
        .products {
            display: flex;
            gap: 12px;

            margin-bottom: ${px2vw(48)};

            button {
                height: ${px2vw(32)};

                background-color: ${({ theme }) => theme.COLORS.Dark_1000};

                font-weight: 500;
                font-size: 14px;
                padding: 4px 8px;

                border-radius: 5px;
            }
        }

        .btn {
            width: ${px2vw(140)};
            height: ${px2vw(48)};
            font-weight: 500;
            font-size: 14px;

            padding: 12px ${px2vw(24)};
        }
    }

`;