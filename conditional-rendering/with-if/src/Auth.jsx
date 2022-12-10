import React from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";


class Auth extends React.Component {
  state = {
    isLoggedIn: false
  }

  handleLogout = () => this.setState({ isLoggedIn: false });

  handleLogin = () => this.setState({ isLoggedIn: true });

  render() {
    const { isLoggedIn } = this.state;
    
    return (
      <div className="panel">
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
          {
            isLoggedIn
              ? <Logout onLogout={this.handleLogout} />
              : <Login onLogin={this.handleLogin} />
          }
        </div>
      </div>
    );
  }
}

export default Auth;
