import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #87CEEB, #FFB6C1); 
    background-attachment: fixed; 
    min-height: 100vh; 
    overflow-y: auto;
}
`;
 
export default GlobalStyle;