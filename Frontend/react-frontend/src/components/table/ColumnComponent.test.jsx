import  React from  'react';
import {render} from  '@testing-library/react';
import ColumnComponent  from './ColumnComponent';


test("renders in Head rows based on provided columns ", () => {
    const Column1="User Id";
    const Column2="User Firstname";
    // const Column3="User Lastname";
    // const Column4= "User Email";

    const container= render(<ColumnComponent c1={Column1} c2={Column2} />);
    const element = container.findByAltText(Column2);
   // expect(element).toBeInTheDocument();
    expect(element).toContainHTML("<table>");
});