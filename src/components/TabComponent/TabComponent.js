import React, {  PureComponent } from "react";
import "./TabComponent.css";

export default class TabComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    //    this.setState(this.state);
    this.onTabChange = (index) => {
      this.setState({ activeTab: index });
      this.props.tabChanged(this.state.activeTab);
    };
  }

  render() {
    return (
      <div className="tab-container">
        {this.props.tabs.map((value, index) => {
          return (
            <div key={index}
              onClick={()=>this.onTabChange(index)}
              className={
                "tab " + (index === this.state.activeTab ? "active" : "")
              }
            >
              {value}
            </div>
          );
        })}
      </div>
    );
  }
}
