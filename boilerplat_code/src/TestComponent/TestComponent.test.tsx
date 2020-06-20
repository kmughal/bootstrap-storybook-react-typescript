import React from 'react';
import { render } from '@testing-library/react';

import TestComponent from './TestComponent';

describe('Test Component', () => {
    it('should have primary className with default props', () => {
        const renderComponent = () => render(<TestComponent name={'khurram'} />);
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId('test-component');

        expect(testComponent).toHaveClass('test-component-primary');
    });

    // it("should have secondary className with theme set as secondary", () => {
    //   props.theme = "secondary";
    //   const { getByTestId } = renderComponent();

    //   const testComponent = getByTestId("test-component");

    //   expect(testComponent).toHaveClass("test-component-secondary");
    // });
});
