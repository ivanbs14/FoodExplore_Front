import styled from 'styled-components';

export const Conteiner = styled.section`
    > h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        font-weight: 400;
    }
`;