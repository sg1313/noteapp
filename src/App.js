import React from "react";
import { createGlobalStyle } from "styled-components";
import NoteHead from "./components/noteHead";
import NoteList from "./components/noteList";
import NoteTemplate from "./components/noteTemplate";

const GlobalStyle = createGlobalStyle`
body {
  background : #e9ecef;
}`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <NoteTemplate>
        <NoteHead />
        <NoteList />
      </NoteTemplate>
    </div>
  );
}

export default App;
