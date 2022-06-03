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
  --warning-background : rgb(255, 0, 0, 0.95);
  --box-shadow : rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --transparent : transparent;
  --border-radius : 8px;
}

  body {
    background: var(--primary-background);
    margin: 0;
	  font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
