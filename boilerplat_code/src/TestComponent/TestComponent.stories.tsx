import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import TestComponent from './TestComponent';
import { TestComponentsProps } from './TestComponentsProps';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

export default {
    title: 'TestComponent',
};

export const Primary = () => <TestComponent name={text('name', 'Primary')} />;

const props1: TestComponentsProps = new TestComponentsProps('Primary');
export const Secondary = () => <TestComponent name={'Secondary'} />;

stories.add('as dynamic variables', () => {
    return <TestComponent name={text('name', name)} />;
});
