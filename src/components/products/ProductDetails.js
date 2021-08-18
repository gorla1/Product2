import React , {useState, useEffect,useCallback} from 'react'
import axios  from 'axios'
import {Grid, Paper, Typography , Button , Card , CardActions, CardContent , CardMedia, makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    cardGrid : {
      paddingTop : theme.spacing(8),
      paddingBottom : theme.spacing(8)
    },
    card: {
      height : '100%',
    },
    cardMedia:{
      paddingTop:theme.spacing(4),
      margin:theme.spacing(8),
      height:theme.spacing(80)
    },
    cardcontent:{
      width:'50%',
      marginTop:theme.spacing(2),
      marginLeft:theme.spacing(10)

    },
    button:{
      justifyContent:'center',
      alignItems:'center'
    }
  }))


export const ProductDetail = (props) => {
    const classes = useStyles(); 
    const [productData , setProductData ] = useState({})
    const [isLoading , setIsLoading] = useState(true)


    const getProductData = useCallback( async ()=>{
        const res = await axios.get('/carDetail.json');
        const findProductData = res.data.find((p)=> p.id === parseInt( props.match.params.id))
        console.log(findProductData)
        setProductData(findProductData)
        setIsLoading(false)
    },[props.match.params.id])

    useEffect(()=>{
        getProductData()

        return ()=> {
          console.log("cleaned up")
        }
    }, [getProductData])
    
    return (
        <div>
            {
                isLoading ? <><center><b><h3>Loading</h3></b></center> </> 
                : 
                <div>
                      <Card className={classes.card}>
                                <Paper elevation={3} >
                                <CardMedia
                                  className = {classes.cardMedia}
                                  image = {productData.img}
                                  title = "Image title"
                                />
                                </Paper>
                              <CardContent className={classes.cardcontent} >
                                <Typography variant="h3" color="secondary">CAR DETAILS</Typography>
                                <Grid container justifyContent='center' padding='5px' margin='10px'>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">MODEL: {productData.Model}</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">PRICE: {productData.price}RS</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">YEAR OF PURCHASE:  {productData.year}</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">FUEL TYPE {productData.FuelType}</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">KILOMETERS DRIVEN: {productData.KMs}Km</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6"></Typography></Grid>
                                  </Grid>
                              </CardContent>
                              <CardActions className={classes.button} >
                                  <Button size="large"  variant='contained' color="secondary">
                                    Buy Now
                                  </Button>
                                 
                              </CardActions>
                          </Card>
                </div>
            }
        </div>
    )
}

