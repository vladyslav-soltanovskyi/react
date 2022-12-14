import React from "react";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";


class App extends React.Component {
  state = {
    userData: {
      firstName: '',
      lastName: ''
    }
  }

  onChange = (e) => {
    const userData = {...this.state.userData, [e.target.name]: e.target.value};

    this.setState({ userData })
  };

  render() {
    const { userData } = this.state;
    const { firstName, lastName } = userData;
    return (
      <div className="page">
        <h1 className="title">Hello, {firstName} {lastName}</h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile userData={userData} onChange={this.onChange} />
        </main>
      </div>
    );
  }
}

export default App;
