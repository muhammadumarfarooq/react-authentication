import React from "react";

const Login = ({ handleSignIn }) => {
  return (
    <a onClick={handleSignIn} className='nav-link' href='#'>
      Login
    </a>
  );
};

export default Login;
