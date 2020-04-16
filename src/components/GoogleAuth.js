import React from "react";

const GoogleAuth = () => {
  React.useEffect(() => {
    window.gapi.load("client: auth2", () => {
      window.gapi.client.init({
        clientId:
          "54580018406-4lf8t1qo9qjk6lueppnqt130hfvqgqcl.apps.googleusercontent.com",
        scope: "email",
      });
    });

    // exlint-disable-next-line
  }, []);

  return (
    <a className='nav-link' href='#'>
      Google Auth
    </a>
  );
};

export default GoogleAuth;
