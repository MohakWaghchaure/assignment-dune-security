import { AllCommunityModule, ICellRendererParams, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from "ag-grid-community";
import searchIcon from '../images/icons/search-icon.png';
import arrowIcon from '../images/icons/arrow-icon.png';
import doubleArrowIcon from '../images/icons/double-arrow-icon.png';
import { EmployeeData, rowData } from "./employees";

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withParams({
  backgroundColor: '#1A1A19',
  headerTextColor: '#FFFFFF',
});

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const goToPage = (page: number) => {
    if (gridApi) {
      gridApi.paginationGoToPage(page - 1); // Ag-Grid is 0-indexed
      setCurrentPage(page);
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const onPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const renderPaginationButtons = () => {
    let pages = [];

    // Always show first 4 pages
    for (let i = 1; i <= Math.min(4, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
          onClick={() => goToPage(i)}
        >{i}</button>
      );
    }

    // Add "..." if there are more pages
    if (totalPages > 5) {
      pages.push(<div key="dots" className='dots'>...</div>);

      // Add the last page button
      pages.push(
        <button
          key={totalPages}
          className={`pagination-btn ${currentPage === totalPages ? "active" : ""}`}
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };
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
            rowData={rowData}
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
        <div className="pagination-wrapper">
          <div className='pagination-container'>
            <button className='pagination-btn doublePrev'><img src={doubleArrowIcon} height={20} width={20} alt={'Previous'} /></button>
            <button className='pagination-btn prev' onClick={onPrevPage} disabled={currentPage === 1}><img src={arrowIcon} height={20} width={20} alt={'Previous'} /></button>
            {renderPaginationButtons()}
            <button className='pagination-btn next' onClick={onNextPage} disabled={currentPage === totalPages}><img src={arrowIcon} height={20} width={20} alt={'Next'} /></button>
            <button className='pagination-btn doubleNext'><img src={doubleArrowIcon} height={20} width={20} alt={'Next'} /></button>
          </div>
        </div>
      </div>
    </div>

  );
}
