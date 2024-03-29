import React from 'react';
import './App.css';
import Card from "./components/Card";

function App(props) {
  return (
    <div className="app">
      <h1 id="first">Instructions</h1>
      <p>
        <ul>
          <li>build a container</li>
          <li>create a separate function and use it as a component</li>
          <li>pass props "calory and food" and call it to main component</li>
        </ul>
      </p>
      <h1 id="second">Calories Read Only</h1>
      <div className="content">
      <Card title="Pizza" cal="56"/>
      <Card title="Burger" cal="66"/>
      <Card title="Coke" cal="500"/>
      <Card title="Browne" cal="180"/>
      <Card title="Fried Rice" cal="90"/>
      <Card title="Lassania" cal="200"/>
      <Card title="Pani Puri" cal="40"/>
      <Card title="Noodles" cal="188"/>
      <Card title="Samosa" cal="250"/>
      </div>
      
    </div>
  );
}

export default App;
