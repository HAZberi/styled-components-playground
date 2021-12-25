import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Footer() {
  return (
    <div>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>+1-587-897-5674</li>
            <li>example@cloud9.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <p>&copy; 2021 Huddle. All rights reserved.</p>
        </Flex>
      </Container>
    </div>
  );
}
