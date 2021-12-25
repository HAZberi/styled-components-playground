import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container pd='0px'>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
