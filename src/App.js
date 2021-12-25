import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import cardContent from "./content/cardContent.json";
function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container pd="20px">
          {cardContent.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
