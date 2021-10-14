import "./App.css";
import Bar from "./Components/Bar";
import Routes from "./Routes.js";
import { BrowserRouter, Switch } from "react-router-dom";

import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl" className="App">
        <Bar />
        <Switch>
          <Routes />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
