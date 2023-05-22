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
        margin-bottom: 63px;
        padding: ${px2vw(87)} ${px2vw(101)} 0;
        border-radius: 8px;

        h1 {
            font-weight: 500;
            font-size: ${px2vw(40)};
        }

    }
`;

export const Cont = styled.div`   
    section {
        position: relative;
        max-width: 83vw;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 32px;

            margin-bottom: 23px;
        }
        
        .menucard {
            display: flex;
            gap: 27px;
            overflow-x: auto;
            scroll-behavior: smooth;

            div {
                flex: none;
            }
        }

        .menucard::-webkit-scrollbar {
            display: none;

        }

        .buttons {
            /* border: 1px solid red; */
            position: absolute;
            width: 100%;
            height: 70%;
            top: 20%;

            display: flex;
            justify-content: space-between;
            z-index: 2;

            svg {
                font-size: 40px;
            }
            
            .backgroundLeft, .backgroundRight {
                position: absolute;
                width: 15%;
                height: 115%;
    
                display: flex; 
                top: -45px;
                z-index: -1;
            }
            
            .backgroundRight {
                left: 85%;
                background: linear-gradient(90deg, rgba(0, 10, 15, 0.372541) 0%, #000A0F 100%);
            }
            
            .backgroundLeft {
                background: linear-gradient(90deg, rgba(0, 10, 15, 0.372541) 0%, #000A0F 100%);
                transform: matrix(-1, 0, 0, 1, 0, 0);
            }
        }

    }
`;