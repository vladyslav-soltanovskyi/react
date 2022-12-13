import React from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";


class App extends React.Component {
  state = {
    userData: null
  }
  
  fetchUserData = async (id) => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    return await res.json();
  }
  
  componentDidMount() {
    this.fetchUserData(this.props.userId)
      .then(userData => {
        this.setState({ userData })
      })
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}

export default App;
