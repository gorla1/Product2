import React  from 'react'

import {Product} from './Product'
import {Grid , Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/'
import { useSelector} from 'react-redux'
import Textfields from './Textfields'


const useStyles = makeStyles((theme) => ({
    cardGrid : {
      paddingTop : theme.spacing(8),
      paddingBottom : theme.spacing(8),
      marginTop: theme.spacing(2),
      backgroundColor:'#F3F1F5'
      
    },
    card: {
      height : '100%',
      display : 'flex',
      flexDirection : 'column'
    },
    cardMedia:{
      paddingTop : '56.25%'
    }
  }))

export const ProductList = () => {
    const classes = useStyles(); 
    // REDUX STATE

   const productsData = useSelector((state) => state.productsReducer)

   
    return (
        <>
        <>
        <Textfields/>
        </>
        <Container  className={classes.cardGrid} maxWidth="lg" >
                <Grid container spacing={5}>
            {
               productsData.isProductsLoading ? <><center><b><h3>Loading</h3></b></center> </>
                :
                ( productsData.cars.length !== 0 ) 
                ?
                productsData.cars.map((p) => <Product key={p.id} product={p} /> ) 

                :
                <img src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg" alt="not found" />
            }
                </Grid>
        </Container>
        </>
    )
}

