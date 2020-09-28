import React from 'react';
import './ContextMenu.css';

const ContextMenu = (props) => {
  const { closeHandler, onMenuItemClicked } = props;

  return (
    <div className="context-menu" onMouseLeave={(event) => closeHandler(false, event)}>
      <div className="close" onClick={(event) => closeHandler(false, event)}>
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
};

export default ContextMenu;
