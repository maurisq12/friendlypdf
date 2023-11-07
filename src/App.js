import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

import Service from "./Views/Service.js";
import Home from "./Views/Home.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
