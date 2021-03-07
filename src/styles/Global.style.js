import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        color: var( --white);
    }
    html, body, #root {
        max-height: 100vh;
        max-width:100vw;
        width: 100%;
        min-height: 100vh;
    }
    *, button, input {
        border: 0;
        background: none; font-family: 'Roboto', sans-serif;
        font-weight: 400;
        
        :focus{
            outline: none;
        }
    }
    html {
        background: var( --primary);
    }
    :root {
    --darkred: #74141e;
    --lightblue: #2C8ED6;
    --red: #DC3545;
    --shadow: #d7d7d7;
    --whiteborder: #f1eeee;
    --black: #273036;
  }
`