import React from 'react';

import { TestComponentsProps } from './TestComponentsProps';

import './TestComponent.scss';

// eslint-disable-next-line react/prop-types
const TestComponent: React.FC<TestComponentsProps> = ({ name }) => (
    <div data-testid="test-component" className={`test-component test-component-${name}`}>
        {name}
        <input type="text" value={name} />
    </div>
);

export default TestComponent;
