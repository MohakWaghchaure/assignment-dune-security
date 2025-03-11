import { AllCommunityModule, ICellRendererParams, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import React, { useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridApi } from "ag-grid-community";
import searchIcon from '../images/icons/search-icon.png';

ModuleRegistry.registerModules([AllCommunityModule]);

interface EmployeeData {
  name: string;
  riskScore: number;
  riskLevel: string;
  frequency: number;
}

const myTheme = themeQuartz.withParams({
  backgroundColor: '#1A1A19',
  headerTextColor: '#FFFFFF',
});

export default function EmployeeTable() {
  const [rowData] = useState<EmployeeData[]>([
    { name: "Alice Smith", riskScore: 8, riskLevel: 'Low', frequency: 2 },
    { name: "Bob Johnson", riskScore: 5, riskLevel: 'High', frequency: 3 },
    { name: "Charlie Brown", riskScore: 6, riskLevel: 'Medium', frequency: 1 },
    { name: "David Williams", riskScore: 7, riskLevel: 'Medium', frequency: 4 },
    { name: "Eve Davis", riskScore: 9, riskLevel: 'High', frequency: 5 },
    { name: "Frank Miller", riskScore: 3, riskLevel: 'Low', frequency: 2 },
    { name: "Grace Lee", riskScore: 8, riskLevel: 'Low', frequency: 3 },
    { name: "Hannah Taylor", riskScore: 4, riskLevel: 'High', frequency: 1 },
    { name: "Isaac Anderson", riskScore: 7, riskLevel: 'Medium', frequency: 2 },
    { name: "Jack Thomas", riskScore: 6, riskLevel: 'Medium', frequency: 4 },
  ]);

  const [searchText, setSearchText] = useState("");
  const gridApi = useRef<GridApi | null>(null);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    if (gridApi.current) {
      (gridApi.current as any).setQuickFilter(event.target.value);
    }
  };

  const customNameColumn: React.FC<ICellRendererParams<{ make: string }>> = (params) => {
    const firstLetters = params.value
      .split(" ")
      .map((word: string) => word.charAt(0).toUpperCase())
      .join("");
    return (
      <div className='emp-name-wrapper'>
        <div className='dp-wrapper'>
          {firstLetters}
        </div>
        <div className='emp-name'>{params.value}</div>
      </div>
    );
  };

  const customRiskScoreColumn: React.FC<ICellRendererParams<{ make: number }>> = (params) => {
    return (
      <div className='score-wrapper'>
        <div className='score-indicator'></div>
        <div className='score-text'>{params.value}</div>
      </div>
    );
  };

  const customRiskLevelColumn: React.FC<ICellRendererParams<{ make: string }>> = (params) => {
    return (
      <div className='score-wrapper'>
        <div className='score-indicator'></div>
        <div className='score-text'>{params.value}</div>
      </div>
    );
  };

  const [columnDefs] = useState<ColDef<EmployeeData>[]>([
    { field: "name", headerName: "NAME", cellRenderer: customNameColumn, sortable: true, filter: false, },
    { field: "riskScore", headerName: "RISK SCORE", cellRenderer: customRiskScoreColumn, sortable: true, filter: false },
    { field: "riskLevel", headerName: "RISK LEVEL", cellRenderer: customRiskLevelColumn, sortable: false, filter: false },
    { field: "frequency", headerName: "FREQUENCY", sortable: false, filter: false, },

  ]);
  return (
    <div className='data-table-wrapper'>
      <div className='emp-search-bar'>
        <input
          type="text"
          placeholder="Type in an Employee's Name"
          // value={searchText}
        />
        <button className='btn'><img src={searchIcon} height={25} width={25} alt={'search icon'}/></button>
      </div>
      <div className="employee-data-table custom-style" style={{ height: 500, width: "100%" }}>
        <AgGridReact theme={myTheme} rowData={rowData} columnDefs={columnDefs} domLayout="autoHeight" defaultColDef={{ resizable: true }} onGridReady={(params) => (gridApi.current = params.api)} />
      </div>
    </div>
  );
}
