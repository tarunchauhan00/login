import React from 'react';
import './App.css';  // Assuming you have a stylesheet, optional
import Login from './components/Login';  // Correct import from the components folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Authentication</h1>
        {/* Render the Login component here */}
        <Login />
      </header>
    </div>
  );
}

export default App;
