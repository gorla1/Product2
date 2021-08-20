import React , {useState, useEffect,useCallback} from 'react'
import axios  from 'axios'
import {Grid, Paper, Typography , Button , Card , CardActions, CardContent , CardMedia, makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { dispatchProductDetail } from './action'
import {useSelector , useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'

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
  
    // const [productData , setProductData ] = useState({})
    // const [isLoading , setIsLoading] = useState(true)

    const productData = useSelector((state)=> state.productsReducer)
    const dispatch = useDispatch()
    const actions = bindActionCreators(
      {
        dispatchProductDetail
      },
      dispatch
    )

    const getProductData = useCallback( async ()=>{
        const res = await axios.get('https://api.jsonbin.io/b/611f4110c5159b35ae01202b');
        const findProductData = res.data.find((p)=> p.id === parseInt( props.match.params.id))
        console.log(findProductData)
        actions.dispatchProductDetail(findProductData)
       // setProductData(findProductData)
       // setIsLoading(false)
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
                 productData.isProductDetailLoading ? <><center><b><h3>Loading</h3></b></center> </> 
                : 
                <div>
                      <Card className={classes.card}>
                                <Paper elevation={3} >
                                <CardMedia
                                  className = {classes.cardMedia}
                                  image = {productData.productDetail.img}
                                  title = "Image title"
                                />
                                </Paper>
                              <CardContent className={classes.cardcontent} >
                                <Typography variant="h3" color="secondary">CAR DETAILS</Typography>
                                <Grid container justifyContent='center' padding='5px' margin='10px'>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">MODEL: {productData.productDetail.Model}</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">PRICE: {productData.productDetail.price}RS</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">YEAR OF PURCHASE:  {productData.productDetail.year}</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">FUEL TYPE {productData.productDetail.FuelType}</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6">KILOMETERS DRIVEN: {productData.productDetail.KMs}Km</Typography></Grid>
                                  <Grid item padding='5px' margin='5px' xs={6} md={6}><Typography color="secondary" variant="h6"></Typography></Grid>
                                  </Grid>
                              </CardContent>
                              <CardActions className={classes.button} >
                                  <Link to='/Checkout'><Button size="large"  variant='contained' color="secondary" 
                                 onClick={()=> props.getPrice(productData.productDetail.price)}
                                  >
                                    Buy Now
                                  </Button></Link>
                                 
                              </CardActions>
                          </Card>
                </div>
            }
        </div>
    )
}

