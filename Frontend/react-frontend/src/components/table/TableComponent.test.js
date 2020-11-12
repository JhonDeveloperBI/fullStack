import  React from  'react';
import {render} from  '@testing-library/react';
import TableComponent, {TESTID_TITLE} from './TableComponent';



test(" Should contains a title ", () => {
    const mockTitle = "Mock title";
    const { getByTestId } = render(<TableComponent title={mockTitle} />);
    const element = getByTestId(TESTID_TITLE);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(mockTitle);
});
