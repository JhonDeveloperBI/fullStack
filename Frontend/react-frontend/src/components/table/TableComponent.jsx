//import Head  from './HeadComponent';
//import Columnn from './HeadComponent';
import React from "react";

export const TESTID_TITLE = "testid-table-component-title"

function TableComponent ({title}){
 
    return (
        <React.Fragment>
        <h1 className = "text-center" data-testid={TESTID_TITLE}>{title}</h1>
        </React.Fragment>
    )
}


export default TableComponent;