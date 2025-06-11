const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am C1H1"),
    React.createElement("h2", {}, "I am C1H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am C2H1"),
    React.createElement("h2", {}, "I am C2H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
// root.render(
//   React.createElement("h1", { id: "heading", className: "heading" }, "Hello World")
// );
