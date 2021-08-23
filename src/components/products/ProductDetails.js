import React , {useEffect,useCallback} from 'react'
import axios  from 'axios'
import { Paper, Typography , Button , Card , CardActions, CardContent , CardMedia, makeStyles} from '@material-ui/core'
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
      paddingTop:theme.spacing(25),
      paddingBottom:theme.spacing(10),
      marginTop:theme.spacing(8),
      marginLeft:theme.spacing(15),
      marginRight:theme.spacing(15),
      height:theme.spacing(70)
    },
    cardcontent:{
      width:'50%',
      marginTop:theme.spacing(2),
      marginLeft:theme.spacing(10)

    },
    button:{
      justifyContent:'center',
      alignItems:'center'
    },
    typography:{
      
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
        const res = await axios.get('https://api.jsonbin.io/b/6123ae0ac5159b35ae02b2d7');
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
                                <Typography variant="h3" style={{marginBottom:'10px'}}>CAR DETAILS:</Typography>
                                  <Typography  variant="h6">Model: {productData.productDetail.Model}</Typography>
                                  <Typography  variant="h6">Price: {productData.productDetail.price}RS</Typography>
                                  <Typography  variant="h6">Year of purchase:  {productData.productDetail.year}</Typography>
                                  <Typography  variant="h6">Fuel Type: {productData.productDetail.FuelType}</Typography>
                                  <Typography  variant="h6">Kilometers Driven: {productData.productDetail.KMs}Km</Typography>
                                  
                              </CardContent>
                              <CardActions className={classes.button} >
                                  <Link to='/Checkout' style={{textDecoration : 'none'}}><Button size="large"  variant='contained' color="secondary" 
                                  
                                //  onClick={()=> props.getPrice(productData.productDetail.price)}
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

