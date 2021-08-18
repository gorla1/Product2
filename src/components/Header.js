import React from 'react';
import { alpha,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AirportShuttleSharpIcon from '@material-ui/icons/AirportShuttleSharp';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';


import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    color:'blue',
    width:theme.spacing(25)
  },
  header:{
      backgroundColor:'#CDF0EA',
      marginTop:theme.spacing(2)
  },
  button:{
      color:'blue',
      marginLeft:theme.spacing(30),
      padding:theme.spacing(3),
      textAlign:'center',
    justifyContent:'flex-end'
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(25),
      width: 'auto',
    },
  },
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'blue'
  },
  inputRoot: {
    color: 'blue',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '200px',
      '&:focus': {
        width: '200px',
      },
    },
  },
  
 
 
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <AppBar  position="static" className={classes.header}>
        <Toolbar justifyContent='center' alignItems='center'>
          <IconButton edge="start" className={classes.menuButton}>
            
            <AirportShuttleSharpIcon fontSize='large'/>
          </IconButton>
          <Link to="/"  style={{textDecoration:"none"}} ><Typography variant="h5"  className={classes.title}>
            Cars 
          </Typography></Link>
          <div className={classes.search}>
          <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Find your dream car...."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </div>
          

          <Link to='/signin' style={{textDecoration:"none"}}><Button className={classes.button}> Login / SingUp</Button></Link>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}