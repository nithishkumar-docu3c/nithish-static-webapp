import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/get-message?name=Static Web Apps")
    .then(res => res.text())
    .then(data => setMessage(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        React JS SPA Using Static webapp
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
