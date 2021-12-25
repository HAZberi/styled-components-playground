import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/styles/Global';
import { Container } from "./components/styles/Container.styled";
function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container pd='20px'>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
