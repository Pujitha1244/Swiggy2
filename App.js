import React from "react";
import ReactDOM from "react-dom/client";

// const Title = React.createElement("h1",{},"Hello World ")

const HeadComponent = () => {
  return (
    <div id="container">
      <h1>Namaste React Functional Component</h1>
      <h1>Namaste React Using JSX</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponent/>);
