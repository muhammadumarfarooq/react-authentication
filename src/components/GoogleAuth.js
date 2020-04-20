import React, { useState } from "react";
import Login from "./Login";
import SignOut from "./SignOut";

const GoogleAuth = () => {
  const [googleAuth, setGoogleAuth] = useState(null);
  const [isLogedIn, SetLogIn] = useState(null);

  const handleSignOut = () => {
    googleAuth.signOut().then(() => {
      SetLogIn(googleAuth.isSignedIn.get());
    });
  };

  const handleSignIn = () => {
    googleAuth.signIn().then(() => {
      SetLogIn(googleAuth.isSignedIn.get());
    });
  };

  React.useEffect(() => {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "54580018406-4lf8t1qo9qjk6lueppnqt130hfvqgqcl.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          setGoogleAuth(window.gapi.auth2.getAuthInstance());
          SetLogIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    });

    // exlint-disable-next-line
  }, []);

  const whatToRender = () =>
    isLogedIn ? (
      <SignOut handleSignOut={handleSignOut} />
    ) : (
      <Login handleSignIn={handleSignIn} />
    );

  return googleAuth && whatToRender();
};

export default GoogleAuth;
