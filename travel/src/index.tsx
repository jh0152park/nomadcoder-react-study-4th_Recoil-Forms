import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: black;
    color: whitesmoke;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);
