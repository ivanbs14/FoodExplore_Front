import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.button`
  background:transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: ${px2vw(40)};

  text-align: center;
`;