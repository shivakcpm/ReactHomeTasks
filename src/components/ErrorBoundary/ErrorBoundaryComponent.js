import React, { Component } from "react";

export class ErrorBoundaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.errorMessage };
  }



  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{background:"#232323",height:'400px',color:"#fff",display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1>No Movie Found</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
