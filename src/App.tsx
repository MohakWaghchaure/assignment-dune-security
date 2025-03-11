import React from 'react';
import 'bootstrap-grid';
import './App.scss';
import EmployeeTable from './components/EmployeeTable';
import FlowDiagram from './components/FlowDiagram';

function App() {
  return (
    <div className="App body-wrapper">
      <div className='container-fluid'>
        <h1 className='page-title'>Testing and Training</h1>
        <div className="card">
          <FlowDiagram></FlowDiagram>
          <EmployeeTable></EmployeeTable>
        </div>
      </div>

    </div>
  );
}

export default App;
