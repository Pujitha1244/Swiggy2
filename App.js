import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";

// const Title = React.createElement("h1",{},"Hello World ")
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/about",
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
