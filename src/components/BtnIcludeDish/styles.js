import styled from "styled-components";

const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: 92px;
  height: 48px;
  border:0;
  padding: 12px;
  border-radius: 5px;
  font-weight: 500;

  /* @media (min-width: 1024px){
    width: 9.2rem;
  } */
`;

export { Container }