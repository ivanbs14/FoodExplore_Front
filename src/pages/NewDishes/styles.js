import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: ${px2vw(105)} auto ${px2vw(77)};
    
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    .tags {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: ${px2vw(16)};
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

    .tag {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .preco {
            margin-top: ${px2vw(16)};
            border-radius: 8px;
            background: ${({ theme }) => theme.COLORS.Dark_800};
        }
    }

    .tags {
        border-radius: 8px;

        margin-top: ${px2vw(16)};
        padding: 6px 8px;

        background: ${({ theme }) => theme.COLORS.Dark_800};
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

        div {
            width: 100%;
        }
    }

    .btntext {
            width: ${px2vw(172)};
            height: ${px2vw(48)};
            
            font-size: ${px2vw(14)};

            margin-left: 85.5%;
            padding: ${px2vw(12)} ${px2vw(24)};
        }
`;

export const Dish = styled.div`
    > label {
        height: ${px2vw(48)};

        background-color: ${({ theme }) => theme.COLORS.Dark_800};
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        margin-top: ${px2vw(16)};

        cursor: pointer;
    }

    svg {
        width: ${px2vw(24)};
        height: ${px2vw(24)};
    }

    span {
        font-size: ${px2vw(14)};
    }

    #avatar {
        display: none;
    }
`;