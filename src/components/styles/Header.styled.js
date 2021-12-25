import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 25px 0;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Logo = styled.img``;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
`;
