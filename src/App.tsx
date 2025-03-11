import React from 'react';
import './App.css';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div className="App">
      <div className="body-wrapper">
        <div className="card">
          <h1>Testing</h1>
          <EmployeeTable></EmployeeTable>
        </div>
      </div>
    </div>
  );
}

export default App;
