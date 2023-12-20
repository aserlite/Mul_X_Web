import './App.css';
import Tableau from './components/Tableau';
import Start from './components/Start';
import Resolution from './components/Resolution';
import React from "react";
import Notes from "./components/Notes";

function App() {

    return (
      <div className="App">
          <Notes></Notes>
          <Start></Start>
          <Tableau></Tableau>
          <Resolution/>
      </div>
  );
}

export default App;
