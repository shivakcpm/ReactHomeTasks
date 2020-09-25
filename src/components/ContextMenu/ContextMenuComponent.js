import React from 'react';
import './ContextMenu.css';

export default function ContextMenu(props) {
  const { closeHandler, onMenuItemClicked } = props;

  return (
    <div className="context-menu" onMouseLeave={() => closeHandler(false)}>
      <div className="close" onClick={() => closeHandler(false)}>
        &#10006;
      </div>
      <div className="menu-list">
        {props.menu.map((item, index) => {
          return (
            <div className="menu-item" onClick={event => onMenuItemClicked(item, event)} key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
