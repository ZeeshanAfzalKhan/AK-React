import UserCardClass from "../Components/UserCardClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor called");
  }

  componentDidMount() {
    // console.log("Parent Component Mounted");
  }

  render() {
    // console.log("Parent Render called");
    return (
      <div>
        <h1>About Us</h1>
        <UserCardClass />
      </div>
    );
  }
}

export default About;
