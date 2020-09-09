import React, { Component } from 'react';
import classnames from 'classnames';
import './DialogComponent.css';

export class DialogComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classNames = classnames('dialog-parent', {
            'open-dialog': this.props.open,
            'close-dialog':!this.props.open
        });

        return (
            <div className={classNames} >
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
