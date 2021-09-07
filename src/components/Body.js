
  
import React from 'react'

import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CardMedia from '@material-ui/core/CardMedia';
import { Button, CardContent } from '@material-ui/core';

import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';


import { Container } from '@material-ui/core';


import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  allCarsSearch,allCars } from './products/action';


 
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
      
   
}));

export default function Body(props) {
  
  const dispatch = useDispatch()
  
  const actions = bindActionCreators(
    {
      allCarsSearch,
      allCars
    },
    dispatch
  )

    const classes = useStyles()

    
    const AllCars=()=>{
      actions.allCars(props.history)
    }

    const searchCars=(data)=>{
        actions.allCarsSearch(data ,props.history)
    }
    
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
         
         <Button style={{backgroundColor:'Background', margin:'30px'}} onClick={()=>{AllCars()}} >ALL CARS</Button>
         <Button style={{backgroundColor:'Background', margin:'30px'}} onClick={()=>{searchCars("Mahindra")}}>MAHINDRA</Button>
         <Button style={{backgroundColor:'Background', margin:'30px'}} onClick={()=>{searchCars("Maruthi")}}>MARUTHI</Button>
         <Button style={{backgroundColor:'Background', margin:'30px'}} onClick={()=>{searchCars("Ford")}}>FORD</Button>
        </CardContent>
        </Card>
         </Paper>
        </Grid>
        
       
      </Grid>
      </Container>
    </div>
  );
}