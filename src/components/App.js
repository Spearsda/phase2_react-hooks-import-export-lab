import React from "react";
import * as About from './About.js';
import * as Home from './Home.js';
import * as NavBar from './NavBar.js';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
