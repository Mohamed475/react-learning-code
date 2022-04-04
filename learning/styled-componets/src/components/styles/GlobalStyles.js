import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  body {
    background: ${(props) => props.theme.colors.body};
    color: #777; 
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
