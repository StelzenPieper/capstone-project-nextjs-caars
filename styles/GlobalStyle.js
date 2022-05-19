import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  box-sizing: border-box;
} 

:root {
  --primary-color : hsl(264, 100%, 50%);
  --secondary-color : white;
  --primary-background : white;
  --secondary-background : hsl(264, 100%, 50%);
  --box-shadow : 0px 8px 15px rgba(108, 122, 137);
  --transparent : transparent;
}

  body {
    background: var(--primary-background);
    margin: 0;
	  font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
