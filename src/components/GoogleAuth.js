import React from "react";

const GoogleAuth = () => {
  React.useEffect(() => {
    window.gapi.load("client: auth2", () => {});

    // exlint-disable-next-line
  }, []);

  return (
    <a className='nav-link' href='#'>
      Google Auth
    </a>
  );
};

export default GoogleAuth;
