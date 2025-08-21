import UserCardClass from "../Components/UserCardClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <UserCardClass />
      </div>
    );
  }
}

export default About;
