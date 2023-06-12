import styled from "styled-components";

export const Container = styled.button`
  background:transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 28px;

  text-align: center;
`;