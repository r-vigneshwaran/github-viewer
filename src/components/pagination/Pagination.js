import React from 'react';
import Pagination from "react-js-pagination";
import useStyles from './styles';

let pageNumbers =[];

for(let i=1;i<20;i++){
    pageNumbers.push(i);
}
const Paginate = ({currentPage,setCurrentPage}) => {
    const classes=useStyles();
    const handlePageChange = ( pageNumber ) => {
        setCurrentPage( pageNumber );
     };
    return (
        <nav className={classes.paginate}>
        <Pagination
               activePage={ currentPage }
               itemsCountPerPage={ 8 }
               totalItemsCount={ 200 }
               pageRangeDisplayed={ 5}
               onChange={ handlePageChange }
               itemClass="page-item"
               linkClass="page-link"
            />
            
        </nav>
    )
};

export default Paginate;
