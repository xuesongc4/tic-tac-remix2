import React from 'react';
import './App.css';
import GameScreen from "./Views/GameScreen";
import ConsoleScreen from "./Views/ConsoleScreen";

function App() {
  return (
    <div className="App">
      <GameScreen/>
      <ConsoleScreen/>
    </div>
  );
}

export default App;
