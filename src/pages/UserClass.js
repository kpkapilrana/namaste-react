import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor Called");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");
    //Api Call
    const response = await fetch("https://api.github.com/users/kpkapilrana");
    const data = await response.json();
    console.log(data);
    this.setState({
      userInfo: data,
    });
  }
  render() {
    const { name, location } = this.state.userInfo;
    console.log("Child Render Called");
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: kpkapilrana</h3>
      </div>
    );
  }
}

export default UserClass;
