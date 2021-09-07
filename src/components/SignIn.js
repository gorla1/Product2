import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BUTTON, Input } from "./common";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { host } from "../Auth/keys";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px darak",
    marginBottom: theme.spacing(5),
  },
  item: {
    width: theme.spacing(50),
    padding: theme.spacing(1),
  },
  item1: {
    marginLeft: theme.spacing(13.5),
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  console.log("login", props);

  const classes = useStyles();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // post the daat to the backedn using axios
    axios
      .post(`${host}auth/login`, formData)
      .then((resp) => {
        console.log(resp);
        props.loginHandler();
        setRedirect(true);
        setLoading(false);
        localStorage.setItem("key", resp.data.token);
        localStorage.getItem("key");

        console.log(resp.data.token);
      })
      .catch((errors) => {
        console.log(errors.response);
        if (errors.response) {
          setError({
            email: errors.response.data.email,
            password: errors.response.data.password,
            error: errors.response.data.error,
          });
        } else {
          setError({ error: "Unexpected Error" });
        }
      });
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (redirect) {
    return <Redirect to={from} />;
  }

  const resetMessages = () => {
    setMessage("")
    setError([])
}
  return (
    <div style={{ border: "2px dark" }}>
      <Container component="main" maxWidth="xs" color="black">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {!message ? null : (
            <h3 style={{ border: "2px solid black", color: "green" }}>
              {message && message}
            </h3>
          )}
          {!error ? null : (
            <h3 style={{ color: "red" }}>{error && error.error}</h3>
          )}
          {loading ? (
            <CircularProgress />
          ) : (
            <form
              className={classes.form}
              onSubmit={handleSubmit}
              style={{ textAlign: "center" }}
            >
              <Grid container>
                <Grid item className={classes.item}>
                  <Input
                    style={{ paddingLeft: "2px", width: "400px" }}
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    label="Email"
                    type="email"
                    onChange={(e) => handleChange(e)}
                    error={error.email}
                  />
                </Grid>
                <Grid item className={classes.item}>
                  <Input
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    label="Password"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    error={error.password}
                  />
                </Grid>

                <Grid item textAlign="center" justifyContent="center">
                  <Link to="/SignUp" variant="body2">
                    <Typography variant="caption" className={classes.item1}>
                      Don't have an account? Sign Up
                    </Typography>
                  </Link>
                </Grid>
              </Grid>

              <BUTTON type="submit" text="login" color="primary" />

              <Grid container></Grid>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
}
