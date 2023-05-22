import styled from 'styled-components';

const Container = styled.button`
    background-color: transparent;
    border: none;

    margin-top: 16px;
    margin-right: 18px;
    >svg{
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1rem;
    }

    :hover {
        background-color: transparent;

        >svg{
            color: ${({ theme }) => theme.COLORS.TOMATO_400};
        }
    }
`;

export { Container };