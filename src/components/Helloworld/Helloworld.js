import React, { Component, createElement, PureComponent } from 'react';
import './Helloworld.css';

/**
 * React functional component
 */
export function HelloWorld1() {
    return <div className="helloWorld">Hello World</div>;
}

/**
 * React class component
 */

export class HelloWorld2 extends Component {
    render() {
        return <div className="helloWorld">Hello World</div>;
    }
}

/**
 * React createElement method
 */

export const HelloWorld3 = createElement(
    'div',
    { className: 'helloWorld' },
    'Hello World'
);

/**
 * React PureComponent Class
 */

export class HelloWorld4 extends PureComponent {
    render() {
        return <div className="helloWorld">Hello World</div>;
    }
}
