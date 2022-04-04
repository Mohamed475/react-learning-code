import Header from './components/Header';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/GlobalStyles';

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  text-align: center;
  color: salmon;
`;

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#033',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
