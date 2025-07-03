import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const Heading = () => {
  return (
    <div>
    <Title />
      <h1>Hello React</h1>
      <h2>Learning React</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Heading />);

