import GlobalStyle from "../styles/GlobalStyle"

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
 ];