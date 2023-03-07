import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 400px;
    align-items: center;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    border-radius: 5px;
    
    > input {
        width: 100%;
        height: 48px;
        
        padding: 12px;
        
        background: transparent;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        border: none;
        
        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }


    > svg {
            margin-left: 100px;
        }
`;

