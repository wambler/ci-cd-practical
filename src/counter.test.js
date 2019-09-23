import React from 'react';
import { configure, shallow } from 'enzyme';
import Counter from './counter.js';
import Adapter from 'enzyme-adapter-react-16';

const getCounter = counterWrapper => counterWrapper.find('.Counter');
const getCountMessage = counterWrapper => getCounter(counterWrapper).find('.Counter-Count');
const getIncrementButton = counterWrapper => getCounter(counterWrapper).find('.Counter-Button.Counter-Increment');
const getDecrementButton = counterWrapper => getCounter(counterWrapper).find('.Counter-Button.Counter-Decrement');

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  shallow(<Counter />);
});

describe('initial state', () => {
  it('renders a default count message, with a count of 0', () => {
    const counter = shallow(<Counter />);
    
    // TODO: the following expectation is incorrect. The expected result should be: "You clicked 0 times".
    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');
  });

  it('renders a button', () => {
    const counter = shallow(<Counter />);
    
    expect(getIncrementButton(counter).exists()).toBe(true);
  });

  it('renders a button with text "Increment"', () => {
    const counter = shallow(<Counter />);

    expect(getIncrementButton(counter).text()).toBe('Increment');
  });

  it('renders a button with text "Decrement"', () => {
    const counter = shallow(<Counter />);

    expect(getDecrementButton(counter).text()).toBe('Decrement');
  });
});

describe('increasing the count', () => {
  it('increases the count by one when the increment button is clicked once', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 1 times');
  });

  it('increases the count by two when the increment button is clicked twice', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 2 times');
  });

  it('increases the count by five when the increment button is clicked five times', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 5 times');
  });
});

describe('decreasing the count', () => {
    it('decreases the count by one when the increment button is clicked once', () => {
      const counter = shallow(<Counter />);
  
      expect(getCountMessage(counter).text()).toBe('You clicked 0 times');
  
      getDecrementButton(counter).simulate('click');
  
      expect(getCountMessage(counter).text()).toBe('You clicked -1 times');
    });
  
    it('decreases the count by two when the increment button is clicked twice', () => {
      const counter = shallow(<Counter />);
  
      expect(getCountMessage(counter).text()).toBe('You clicked 0 times');
  
      getDecrementButton(counter).simulate('click');
      getDecrementButton(counter).simulate('click');
  
      expect(getCountMessage(counter).text()).toBe('You clicked -2 times');
    });
  
    it('decreases the count by five when the increment button is clicked five times', () => {
      const counter = shallow(<Counter />);
  
      expect(getCountMessage(counter).text()).toBe('You clicked 0 times');
  
      getDecrementButton(counter).simulate('click');
      getDecrementButton(counter).simulate('click');
      getDecrementButton(counter).simulate('click');
      getDecrementButton(counter).simulate('click');
      getDecrementButton(counter).simulate('click');
  
      expect(getCountMessage(counter).text()).toBe('You clicked -5 times');
    });
  });