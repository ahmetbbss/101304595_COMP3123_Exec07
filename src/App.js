import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [student, setStudent] = useState({
    studentId: '101304595',
    name: 'Ahmet Buyukbas',
  });

  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p> {student.studentId}</p>
        <p>{student.name}</p>
        <p>George Brown College, Toronto</p>
       
       
      </header>
    </div>
  );
}

export default App;
