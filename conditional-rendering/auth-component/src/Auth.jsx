import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";


class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false
  }

  handleLogout = () => this.setState({ isLoggedIn: false });

  handleLogin = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoggedIn: true, isLoading: false });
    }, 2000);
  }

  render() {
    const { isLoggedIn, isLoading } = this.state;
    
    if (isLoading) {
      return <Spinner size={50} />;
    }

    return (
      isLoggedIn
        ? <Logout onLogout={this.handleLogout} />
        : <Login onLogin={this.handleLogin} />
    );
  }
}

export default Auth;
