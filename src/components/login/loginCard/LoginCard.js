import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Paper } from "@material-ui/core";
import firebase from "firebase";
import Logo from "../../../assets/images/text_logo.png";
import Style from "./Style";

const LoginCard = () => {
  const classes = Style();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <Paper elevation={3} className={classes.card}>
      <header className={classes.header}>
        <img src={Logo} alt="logo" />
      </header>

      <div className={classes.logintext}>
        <p>Welcome to your professional community</p>
      </div>

      <div className={classes.google}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </Paper>
  );
};

export default LoginCard;
