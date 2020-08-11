import React from "react";
import "./App.css";
import ContentHeaderComponent from "../ContentHeader/ContentHeaderComponent";
import { AppHeaderComponent } from "../AppHeader/AppHeaderComponent";

export default function App() {
  return (
    <React.StrictMode>
      <div className="container">
        <AppHeaderComponent />
        <ContentHeaderComponent />
      </div>
    </React.StrictMode>
  );
}
