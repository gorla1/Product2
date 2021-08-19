
  
import React from 'react'

import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CardMedia from '@material-ui/core/CardMedia';
import { Button, CardContent } from '@material-ui/core';

import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';


import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';



 
const useStyles = makeStyles((theme) => ({
   
    root: {
        flexGrow: 1,
        backgroundColor:'#F9F9F9',
        height: "auto"
      },
      paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      card:{
          height:theme.spacing(65)
      },
      media:{
        height: '70%'
      },
      button:{
        margin:theme.spacing(5),
      }
   
}));

export default function Body() {

    const classes = useStyles()

    return (
        <div  className={classes.root}>
            <Container>
      <Grid container spacing={3}>
        
      <Grid item xs={12}>
         <Paper className={classes.paper}>      
          <Card className={classes.card}>
     
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/3NRdQSV/new-car-hd-wallpapers1589891906.jpg"
          title="Collection Of Cars"
        />
           <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            A WHOLE NEW WORLD OF CARS
          </Typography>
         <Link to='/cars' style={{textDecoration : 'none'}}><Button    className={classes.button} size="lg" variant='contained' color="secondary">VIEW ALL CARS</Button></Link>
         <Link to='/mahindra' style={{textDecoration:'none'}}><Button  className={classes.button} size="lg" variant='contained' color="secondary">Mahindra</Button></Link>
         <Link to='/ford' style={{textDecoration : 'none'}}><Button    className={classes.button} size="lg" variant='contained' color="secondary">Ford</Button></Link>
         <Link to='/maruthi' style={{textDecoration : 'none'}}><Button className={classes.button} size="lg" variant='contained' color="secondary">Maruthi</Button></Link>
        </CardContent>
        </Card>
         </Paper>
        </Grid>
        
       
      </Grid>
      </Container>
    </div>
  );
}