import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TabComponent.css';

const TabComponent = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabChange = index => {
    setActiveTab(index);
    props.tabChanged(index);
  };

  return (
    <div className="tab-container">
      {props.tabs.map((value, index) => {
        return (
          <div
            key={index}
            onClick={() => onTabChange(index)}
            className={classnames('tab', {
              active: index === activeTab
            })}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

TabComponent.propTypes = {
  tabs: PropTypes.array,
  tabChanged: PropTypes.func
};

export default TabComponent;
