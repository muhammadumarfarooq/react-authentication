import React, { useState } from "react";
import Login from "./Login";
import SignOut from "./SignOut";
import { handleAuthState } from "../actions";
import { connect } from "react-redux";

const GoogleAuth = ({ authStatus, handleAuthState }) => {
  const [googleAuth, setGoogleAuth] = useState(null);

  console.log(authStatus);

  const handleSignOut = () => {
    googleAuth.signOut().then(() => {
      // SetLogIn(googleAuth.isSignedIn.get());
      handleAuthState(googleAuth.isSignedIn.get());
    });
  };

  const handleSignIn = () => {
    googleAuth.signIn().then(() => {
      // SetLogIn(googleAuth.isSignedIn.get());
      handleAuthState(googleAuth.isSignedIn.get());
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
          handleAuthState(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          // SetLogIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    });

    // exlint-disable-next-line
  }, []);

  const whatToRender = () =>
    authStatus ? (
      <SignOut handleSignOut={handleSignOut} />
    ) : (
      <Login handleSignIn={handleSignIn} />
    );

  return googleAuth && whatToRender();
};

const mapStateToProps = (state) => {
  return {
    authStatus: state.authState,
  };
};

export default connect(mapStateToProps, { handleAuthState })(GoogleAuth);
