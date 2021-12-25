import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
            <Logo src='./images/logo.svg' alt='logo' />
            <Button>Try it for free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
