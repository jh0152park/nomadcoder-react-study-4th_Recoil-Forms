import "./index.css";
import App from "./App";
import { reset } from "styled-reset";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

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
        <RecoilRoot>
            <GlobalStyle />
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </RecoilRoot>
    </>
);
