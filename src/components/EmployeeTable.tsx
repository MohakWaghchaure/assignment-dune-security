import { AllCommunityModule, ICellRendererParams, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from "ag-grid-community";
import searchIcon from '../images/icons/search-icon.png';
import employeeDataRaw from '../data/employeesData.json';
import CustomPagination from './CustomPagination';

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withParams({
  backgroundColor: '#1A1A19',
  headerTextColor: '#FFFFFF',
});

interface EmployeeData {
  name: string;
  riskScore: number;
  riskLevel: string;
  frequency: number;
}

const employeeData: EmployeeData[] = employeeDataRaw;

export default function EmployeeTable() {

  const [inputValue, setInputValue] = useState<string>('');
  const [currentInputValue, setCurrentInputValue] = useState<string>('');


  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearchHandler();
    }
  };

  const onSearchHandler = () => {
    setCurrentInputValue(inputValue);
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
    let riskScore = 'low';
    if (params.value > 80) {
      riskScore = 'severe';
    } else if (params.value > 60) {
      riskScore = 'high';
    } else if (params.value > 40) {
      riskScore = 'medium';
    }
    else {
      riskScore = 'low';
    }
    return (
      <div className='score-wrapper'>
        <div className={`score-indicator ${riskScore}`}></div>
        <div className='score-text'>{params.value}</div>
      </div>
    );
  };

  const customRiskLevelColumn: React.FC<ICellRendererParams<{ make: string }>> = (params) => {
    const riskLevelMap: Record<string, string> = {
      High: 'high',
      Medium: 'medium',
      Severe: 'severe',
      Low: 'low',
    };

    const riskLevel = riskLevelMap[params.value] || 'low';

    return (
      <div className="score-wrapper">
        <div className={`score-indicator ${riskLevel}`}></div>
        <div className="score-text">{params.value}</div>
      </div>
    );
  };

  const customFrequencyColumn: React.FC<ICellRendererParams<{ make: number }>> = (params) => {
    return (
      <div className='frequency-text'>{params.value}</div>
    );
  };

  const [columnDefs] = useState<ColDef<EmployeeData>[]>([
    { field: "name", headerName: "NAME", cellRenderer: customNameColumn, sortable: true, filter: false, },
    { field: "riskScore", headerName: "RISK SCORE", cellRenderer: customRiskScoreColumn, sortable: true, filter: false },
    { field: "riskLevel", headerName: "RISK LEVEL", cellRenderer: customRiskLevelColumn, sortable: false, filter: false },
    { field: "frequency", headerName: "FREQUENCY", cellRenderer: customFrequencyColumn, sortable: false, filter: false, },

  ]);

  const [gridApi, setGridApi] = useState<any>(null);
  const [totalPages, setTotalPages] = useState(1);

  
  
  return (
    <div className='data-table-wrapper'>
      <div className='tab-head'>
        <div className='tab-btn'>CLICKED LINKS</div>
      </div>
      <div className='data-table-container'>
        <div className='emp-search-bar'>
          <input
            type="text"
            placeholder="Type in an Employee's Name"
            value={inputValue} // Bind input value to state
            onChange={onInputChange} // Update state on input change
            onKeyDown={onKeyDownHandler}
          />
          <button className='btn' onClick={onSearchHandler}><img src={searchIcon} height={25} width={25} alt={'search icon'} /></button>
        </div>
        <div className="employee-data-table custom-style" >
          <AgGridReact
            className="ag-theme-alpine full-width-grid"
            theme={myTheme}
            rowData={employeeData}
            columnDefs={columnDefs}
            domLayout="autoHeight"
            defaultColDef={{ resizable: true, flex: 1, }}
            quickFilterText={currentInputValue}
            pagination={true}
            paginationPageSize={5}
            suppressPaginationPanel={true}
            autoSizeStrategy={{ type: 'fitGridWidth' }} // Auto-size column width
            onGridReady={(params) => {
              params.api.sizeColumnsToFit();
              setGridApi(params.api);
              setTotalPages(params.api.paginationGetTotalPages());
            }}
          />
        </div>
        <CustomPagination totalPages={totalPages} gridApi={gridApi}></CustomPagination>
        
      </div>
    </div>

  );
}
