import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from '@material-ui/core/CircularProgress'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router";
import axios from "axios";
import { BUTTON, Input, Checkbox } from "./common";
import { useHistory } from "react-router";
import { host } from "../Auth/keys";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const history = useHistory();

  const [redirectState, setRedirectState] = useState(false);
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    error: "",
    password2: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    // post the daat to the backedn using axios

    axios
      .post(`${host}auth/register`, formData)
      .then((resp) => {
        console.log(resp);
        setRedirectState(true);
        setLoading(false)
        history.push("/signin");
      })
      .catch((errors) => {
        console.log(errors.response);
        if(errors.response){
        setError({
          email: errors.response.data.email,
          password: errors.response.data.password,
          error: errors.response.data.error,
          password2: errors.response.data.password2,
          username: errors.response.data.username,
        });
      }else{
        setError({error : "Unexpected Error"})
      }
      });
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (redirectState) {
    return <Redirect to={from} />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        {!message ? null 
                : <h3 style={{border : "2px solid black", color:'green'}}>{message && message}</h3>
            }
            {!error ? null 
                : <h3 style={{ color:'red'}}>{error && error.error}</h3>
            }
              {loading ? <CircularProgress /> : 
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                name="username"
                placeholder="Enter username"
                value={formData.username}
                label="username"
                type="text"
                onChange={(e) => handleChange(e)}
                error={error.username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                label="Email"
                type="email"
                onChange={(e) => handleChange(e)}
                error={error.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <Input
                name="password2"
                placeholder="confirm password"
                value={formData.password2}
                label="Password Confirmation"
                type="password"
                onChange={(e) => handleChange(e)}
                error={error.password2}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    label="Remember the sign details."
                    onChange={(e) => handleChange(e)}
                  />
                }
              />
            </Grid>
          </Grid>
          <BUTTON type="submit" text="Sign Up" color="primary" />

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/SignIn" variant="body2">
                {"Already have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </form>
}
      </div>
    </Container>
  );
}

