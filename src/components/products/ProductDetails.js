import React , {useState, useEffect,useCallback} from 'react'
import axios  from 'axios'
import { Typography , Button , Card , CardActions, CardContent , CardMedia, makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    cardGrid : {
      paddingTop : theme.spacing(8),
      paddingBottom : theme.spacing(8)
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
                                <CardMedia
                                  className = {classes.cardMedia}
                                  image = {productData.img}
                                  title = "Image title"
                                />
                              <CardContent>
                                  <Typography>{productData.Model}</Typography>
                                  <Typography>{productData.price}</Typography>
                                  <Typography>{productData.year}</Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small" color="secondary">
                                    Buy Now
                                  </Button>
                                 
                              </CardActions>
                          </Card>
                </div>
            }
        </div>
    )
}

