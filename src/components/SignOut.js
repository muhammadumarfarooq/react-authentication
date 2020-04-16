import React from "react";

const SignOut = ({ handleSignOut }) => {
  return (
    <a onClick={handleSignOut} className='nav-link' href='#'>
      SignOut
    </a>
  );
};

export default SignOut;
