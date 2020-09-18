import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TabComponent.css';

export default class TabComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  onTabChange = index => {
    const { tabChanged } = this.props;
    this.setState({ activeTab: index }, () => tabChanged(index));
  };

  render() {
    return (
      <div className="tab-container">
        {this.props.tabs.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => this.onTabChange(index)}
              className={classnames('tab', {
                active: index === this.state.activeTab
              })}
            >
              {value}
            </div>
          );
        })}
      </div>
    );
  }
}

TabComponent.propTypes = {
  tabs: PropTypes.array,
  tabChanged: PropTypes.func
};
