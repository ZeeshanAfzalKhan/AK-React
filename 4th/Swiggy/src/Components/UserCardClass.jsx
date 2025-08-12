import React from 'react';

class UserCardClass extends React.Component {

//   Case	                 Is super(props) required?	          Why?
// No constructor	         ❌ No	                               this.props is available by default
// constructor(props) but don’t use this.props	✅ Yes	         super() still required by JS spec
// constructor(props) and use this.props	✅ Yes	               Or else it throws runtime error

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Dummy Name",
        location: "Dummy Location",
        bio: "Dummy Bio",
        blog: "Dummy Blog",
        email: "Dummy Email",
        avatar_url: "https://avatars.githubusercontent.com/u/12345678?v=4" // Example avatar URL
      }
    }
  }

  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/ZeeshanAfzalKhan");
    const json = await data.json();

    this.setState({
      user: {
        name: json?.name || "Not provided", // Fallback if name is not available
        location: json?.location || "Not provided", // Fallback if location is not available
        bio: json?.bio || "No bio available", // Fallback if bio is not available
        blog: json?.blog  || "Not provided", // Fallback if blog is not available
        email: json?.email || "Not provided", // Fallback if email is not available
        avatar_url: json?.avatarurl || "https://avatars.githubusercontent.com/u/12345678?v=4" // Fallback avatar URL
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // You can add logic here to handle updates if needed
  }

  render() {
    const { name, location, bio, blog, email } = this.state.user || {};
    return (
      <div>
        <img src={this.state.user.avatar_url} alt="User Avatar" />
        <h1>Name: {name}</h1>
        <h2>Bio: {bio}</h2>
        <h2>Location: {location}</h2>
        <h2>Blog: {blog}</h2>
        <h2>Email: {email}</h2>
      </div>
    );
  }
}

export default UserCardClass;