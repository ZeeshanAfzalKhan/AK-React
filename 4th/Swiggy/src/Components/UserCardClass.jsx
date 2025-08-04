import React from 'react';

class UserCardClass extends React.Component {

//   Case	                 Is super(props) required?	          Why?
// No constructor	         ❌ No	                               this.props is available by default
// constructor(props) but don’t use this.props	✅ Yes	         super() still required by JS spec
// constructor(props) and use this.props	✅ Yes	               Or else it throws runtime error

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, phone, email, address } = this.props;
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Count Increase</button>
        <h1>Name: {name}</h1>
        <h2>Phone: {phone}</h2>
        <h2>Email: {email}</h2>
        <h2>Address: {address}</h2>
      </div>
    );
  }
}

export default UserCardClass;