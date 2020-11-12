import  React from  'react';
import {render} from  '@testing-library/react';
import HeadComponent  from './HeadComponent';


test("renders in Head rows based on provided columns ", () => {
    const Column1="User Id";
    const Column2="User Firstname";
   // const Column3="User Lastname";
   // const Column4= "User Email";

    const container= render(<HeadComponent c1={Column1} c2={Column2} />);
    const element = container.findAllByText(Column2);
    //expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(Column2);
});