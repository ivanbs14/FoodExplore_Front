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

    h1 {
        font-weight: 500;
        font-size: ${px2vw(32)};

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin: ${px2vw(24)} 0 0;
    }

    button:nth-child(1) {
        font-weight: 700;
        font-size: ${px2vw(24)};
    }

    section:nth-child(1) {
        width: 100%;
        margin-right: ${px2vw(32)};
    }

    section {
        margin-top: ${px2vw(32)};

        textarea {
            margin-top: ${px2vw(16)};
        }
    }

    .lineOne {
        display: grid;
        grid-template-columns: ${px2vw(229)} auto ${px2vw(364)};
        gap: 32px;
        
        section {

            div {
                input {
                    width: 100%;
                }
            }
        }

        section {
            
            input {
                width: ${px2vw(360)};
                margin-top: ${px2vw(16)};
                border-radius: 8px;
                background-color: ${({ theme }) => theme.COLORS.Dark_800};
            }
        }

        section:nth-child(3){
            width: ${px2vw(360)};

            div{
                width: ${px2vw(360)};
                height: ${px2vw(48)};

                display: flex;

                margin-top: ${px2vw(16)};
                padding: 13px 16px;
                border: none;
                border-radius: 8px;

                background-color: ${({ theme }) => theme.COLORS.Dark_800};

            }

            select {
                width: 100%;

                border: none;
                
                font-weight: 400;
                font-size: 14px;
                
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                background: none;

                cursor: pointer;
            }
        }
        

        div {
            width: 100%;
        }
    }

    .lineTwo {
        display: flex;
        justify-content: space-between;
        align-items: center;


        .tags {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: ${px2vw(16)};

            border-radius: 8px;

            margin-top: ${px2vw(16)};
            padding: 6px 8px;

            background: ${({ theme }) => theme.COLORS.Dark_800};
        }

        section:nth-child(2) {
            width: ${px2vw(251)};
            
            .preco {
                width: ${px2vw(251)};
                margin-top: ${px2vw(16)};
                border-radius: 8px;
                background: ${({ theme }) => theme.COLORS.Dark_800};
            }
        }

    }

    .btntext {
        width: ${px2vw(172)};
        height: ${px2vw(48)};
        
        font-size: ${px2vw(14)};

        margin-left: 85.5%;
        padding: ${px2vw(12)} ${px2vw(24)};

        margin-bottom: 16px;

        &:disabled {
            background: ${({ theme }) => theme.COLORS.TOMATO_400};
        }
    }

    .btns {
        display: flex;
        gap: 32px;

        justify-content: end;

        margin-bottom: 16px;

        button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.Dark_800};
        }

        button {
            width: ${px2vw(172)};
            height: ${px2vw(48)};
        
            font-weight: 500;
            font-size: ${px2vw(14)};

            padding: ${px2vw(12)} ${px2vw(24)};
        }
    }
`;

export const Dish = styled.div`
    position: relative;

    > label {
        height: ${px2vw(48)};

        background-color: ${({ theme }) => theme.COLORS.Dark_800};
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        margin-top: ${px2vw(16)};
        padding: 12px 32px;

        cursor: pointer;

        position: absolute;
        
        span {
            font-size: ${px2vw(14)};
        }

        svg {
            width: ${px2vw(24)};
            height: ${px2vw(24)};
        }

        
        input{
            display: none;
        }
    }
`;