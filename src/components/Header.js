import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import useWindowDimensions from "../util/useWindowDimensions";
export default function Header() {
  const { width } = useWindowDimensions();
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try it for free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does you audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            {width > 768 ? (
              <Button bg="#ff0099" color="#fff">
                Get Started for free
              </Button>
            ) : null}
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
          {width < 768 ? (
            <Button bg="#ff0099" color="#fff">
              Get Started for free
            </Button>
          ) : null}
        </Flex>
      </Container>
    </StyledHeader>
  );
}
