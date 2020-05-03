import React from "react";
import { GlobalStyle } from "./authentication/styled/GlobalStyle";
import Authentication from "./authentication";

const App = () => (
  <>
    <GlobalStyle />
    <Authentication
      title="App"
      backgroundColor="#212121"
      environment="production"
      callback={() =>
        console.info("callback from app to redirect after login should be here")
      }
    ></Authentication>
  </>
);

export default App;
