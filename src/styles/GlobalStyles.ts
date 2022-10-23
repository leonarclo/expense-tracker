import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none; 
  }

  *, button, input {
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }


  /* Default Colors */
  :root {
    --white: #E3E6EC;
    --background: #E1E0C7;
    --primary-green: #32B04A;
    --secondary-green: #499195;
    --dark-green: #3A4E4F;
    --yellow: #F4C041;
    --orange: #E5562D;
  }

  body {
    background-color: var(--background);
  }
`;
