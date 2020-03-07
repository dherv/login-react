import React from "react";
import { GlobalStyle } from "./styled/GlobalStyle";
import Authentication from "./pages/Authentication";

const App = () => (
  <>
    <GlobalStyle />
    <Authentication title="App" backgroundColor="#212121"></Authentication>
  </>
);

export default App;
