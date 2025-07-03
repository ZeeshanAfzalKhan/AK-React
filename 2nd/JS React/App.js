import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1" }, "I am C1H1"),
    React.createElement("h2", { key: "h2"}, "I am C1H2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1" }, "I am C2H1"),
    React.createElement("h2", { key: "h2" }, "I am C2H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading); 

