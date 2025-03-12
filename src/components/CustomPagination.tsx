import { useEffect, useState } from "react";
import arrowIcon from '../images/icons/arrow-icon.png';
import doubleArrowIcon from '../images/icons/double-arrow-icon.png';

interface CustomPaginationProps {
    totalPages: number;
    gridApi: any;
  }
  
function CustomPagination({ totalPages, gridApi }: CustomPaginationProps) {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [totalPages]);

    const goToPage = (page: number) => {
        if (gridApi) {
            gridApi.paginationGoToPage(page - 1);
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

    const onDoubleNextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 4);
        }
    };

    const onDoublePrevPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 4);
        }
    };

    const renderPaginationButtons = () => {
        let pages = [];
        let startPage = 1;
        let endPage = Math.min(4, totalPages);

        if (currentPage >= 5) {
            startPage = Math.floor((currentPage - 1) / 4) * 4 + 1;
            endPage = Math.min(startPage + 3, totalPages);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination-btn ${currentPage === i ? "active" : ""}`}
                    onClick={() => goToPage(i)}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="pagination-wrapper">
            <div className='pagination-container'>
                <button className='pagination-btn doublePrev' onClick={onDoublePrevPage} disabled={currentPage <= 4}><img src={doubleArrowIcon} height={20} width={20} alt={'Previous'} /></button>
                <button className='pagination-btn prev' onClick={onPrevPage} disabled={currentPage === 1}><img src={arrowIcon} height={20} width={20} alt={'Previous'} /></button>
                {currentPage > 4 && <button className="pagination-btn" onClick={() => goToPage(1)}>{1}</button>}
                {currentPage > 4 && <div className="dots before">...</div>}
                {renderPaginationButtons()}
                {currentPage <= totalPages - 4 && <div className="dots after">...</div>}
                {currentPage <= totalPages - 4 && <button className="pagination-btn" onClick={() => goToPage(totalPages)}>{totalPages}</button>}
                <button className='pagination-btn next' onClick={onNextPage} disabled={currentPage === totalPages}><img src={arrowIcon} height={20} width={20} alt={'Next'} /></button>
                <button className='pagination-btn doubleNext' onClick={onDoubleNextPage} disabled={currentPage >= totalPages - 4}><img src={doubleArrowIcon} height={20} width={20} alt={'Next'} /></button>
            </div>
            <div className="pagination-status">
                Viewing {currentPage} of {totalPages}
            </div>
        </div>
    );
}

export default CustomPagination;
