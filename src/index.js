import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="system-font-stack">
      <h1>System font stack</h1>
      <p>
        Uses the native font of the operating system to get close to a native
        app feel
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
