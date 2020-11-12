import React from "react";

function ColumnComponent ({col1} ,{col2} ) {

    return (
        <table>
        <thead>
        <tr>
            <td>{col1}</td>
            <td>{col2}</td>
        </tr>
        </thead>
        </table>
    )
}


export default ColumnComponent;