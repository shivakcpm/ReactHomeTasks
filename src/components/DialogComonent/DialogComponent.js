import React, { Component } from 'react';
import './DialogComponent.css';

export class DialogComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='dialog-parent' >
                <div className="dialog-content">
                    <div className="close-icon" onClick = {this.props.toggle}>&#10006;</div>
                    <div className="dialog-children">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
