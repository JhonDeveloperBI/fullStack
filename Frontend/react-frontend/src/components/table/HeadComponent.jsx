import Row  from './RowComponent';
import Column from './ColumnComponent';
import React from "react";

function HeadComponent ({c1},{c2}) {
    return (

      <Column col1={c1} col2={c2} />

    )
}


export default HeadComponent;