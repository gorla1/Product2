import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AirportShuttleSharpIcon from "@material-ui/icons/AirportShuttleSharp";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Grid, InputBase, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchField } from "./products/action";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    color: "blue",
    width: theme.spacing(25),
  },
  header: {
    backgroundColor: "#CDF0EA",
    height: theme.spacing(12),
  },
  button: {
    backgroundColor: "#FFF338",
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "flex-end",
  },
  input: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
  },
  inputbase: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(25),
      width: "auto",
    },
  },

  inputRoot: {
    color: "blue",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "200px",
      "&:focus": {
        width: "200px",
      },
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const actions = bindActionCreators(
    {
      searchField,
    },
    dispatch
  );

  const [sform, setSform] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.searchField(sform);
    history.push("/cars");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar justifyContent="center" alignItems="center">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            style={{ paddingTop: "20px" }}
          >
            <IconButton edge="start" className={classes.menuButton}>
              <AirportShuttleSharpIcon fontSize="large" />
            </IconButton>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h5" className={classes.title}>
                Cars
              </Typography>
            </Link>

            <Paper component="form" onSubmit={handleSubmit} className={classes.input}>
              <InputBase
                className={classes.input}
                placeholder="Search cars"
                value={sform}
                onChange={(e)=>{setSform(e.target.value)}}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            
            {!props.auth ? (
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button className={classes.button}> Login / SingUp</Button>
              </Link>
            ) : (
              <Button
                onClick={() => props.logoutHandler()}
                className={classes.button}
              >
                {" "}
                LOGOUT{" "}
              </Button>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
