import React from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";


class App extends React.Component {
  state = {
    user: null
  }
  
  fetchUserData = async (id) => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    return await res.json();
  }
  
  componentDidMount() {
    this.fetchUserData(this.props.userId)
      .then(user => {
        this.setState({ user })
      })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={user} />
        </header>
        <UserProfile userData={user} />
      </div>
    );
  }
}

export default App;
