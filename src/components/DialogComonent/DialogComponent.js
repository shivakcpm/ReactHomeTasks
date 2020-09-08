import React, { Component } from 'react';
import './DialogComponent.css';

export class DialogComponent extends Component {
    render() {
        return (
            <div className="dialog-parent" >
                <div class="dialog-content">
                    <div className="close">&#10006;</div>
                    <div className="dialog-children">
                        {this.props.children}

                    </div>
                </div>

            </div>
        );
    }
}
