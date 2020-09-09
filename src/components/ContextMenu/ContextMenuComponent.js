
import React from 'react';
import './ContextMenu.css';

export default function ContextMenu(props) {
    return (
        <div className="context-menu" onMouseLeave={props.closeHandler.bind(this, false)}>
            <div className="close" onClick={props.closeHandler.bind(this, false)}>&#10006;</div>
            <div className="menu-list">

                {
                    props.menu.map((item, index) => {
                        return <div className="menu-item" onClick={props.onMenuItemClicked.bind(this, item)} key = {index}>{item}</div>;
                    })
                }
            </div>
        </div>

    );
}

