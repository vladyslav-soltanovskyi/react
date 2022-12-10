import React from "react";

function Login(props) {
  const { onLogin } = props;

  return (
    <button className="btn login" onClick={onLogin}>Login</button>
  );
}

export default Login;
