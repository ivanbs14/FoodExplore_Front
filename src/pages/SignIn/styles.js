import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    display: flex;
    justify-content: space-between;
    margin: ${px2vw(142)} auto;
    padding: 0 ${px2vw(153)} ;

    align-items: center;

    img {
        width: 324px;
        height: 48px;
    }

    h1, div, button, a {
        margin-bottom: ${px2vw(32)};
    }

    p {
        text-align: start;
        margin-bottom: 8px;
    }

    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    section {
        display: flex;
        flex-direction: column;
        text-align: left;
        
        input {
            width: 348px;
            border-radius: 8px;
            
            background: ${({ theme }) => theme.COLORS.Dark_900};
        }
    }

    @media (max-width: 428px) {
        width: ${px2vw(1070)};
        height: 100vh;
        
        margin: 158px auto;
        
        display: flex;
        flex-direction: column;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        h1, div, button, a {
            margin-bottom: ${px2vw(110)};
        }
        
        img {
            width: ${px2vw(1050)};
            margin-bottom: ${px2vw(250)};
        }
        
        .hide {
            display: none;
        }
    }
    `;

export const Form = styled.form`
        width: 476px;
        height: 532px;
        background: ${({ theme }) => theme.COLORS.Dark_700};
        border-radius: 16px;
    
        padding: 64px;

        input {
            height: 40px;
            font-size: 16px;
        }

        button {
            margin-top: 0;

            border-radius: 8px;
        }

        h1 {
            font-weight: 500;
            font-size: 32px;
        }

        h2 {
            margin-bottom: 8px;
        }

        text-align: center;

    @media (max-width: 428px) {
        width: ${px2vw(1070)};
        height: 100vh;
        padding: 0;

        background: none;

        section {
            input {
                width: ${px2vw(1070)};
            }
        }
    }

`;