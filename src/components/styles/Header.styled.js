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

  @media (max-width: ${({theme}) => theme.mobile}) {
      flex-direction: column;
  }
`;

export const Logo = styled.img`
@media (max-width: ${({theme}) => theme.mobile}) {
    margin-bottom: 40px;
}`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({theme}) => theme.mobile}) {
    margin: 30px 0 30px;
    padding: 10px;
}`;
