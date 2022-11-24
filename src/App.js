import React from "react";
// import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import About from "./components/About";
import Home from "./components/Home";
import Template from "./components/Template";
import About from "./components/About";

const GlobalStyle = createGlobalStyle`
body {
  background : #e9ecef;
}`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Template>
        {/* <Home /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
        <Home />
        <About />
      </Template>
    </div>
  );
}

export default App;
