import React from "react";
import Routes from "./routes";
import "./styles.css";

import Header from "./components/Header";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <p className="copy">
      All data consumed from the http://www.tvmaze.com/ API
    </p>
  </div>
);

export default App;
