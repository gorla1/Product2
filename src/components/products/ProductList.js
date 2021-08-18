import React ,{useState ,useEffect , useCallback} from 'react'
import axios from 'axios'
import {Product} from './Product'
import {Grid , Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/'


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

export const ProductList = () => {
    const classes = useStyles(); 
    const [productsData, setProductsData] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    const getData =  useCallback( async ()=>{
        const res = await axios.get('/carsList.json') 
        setProductsData(res.data)
        setIsLoading(false)
    }, []) 

    useEffect(()=>{
        getData()
    },[getData])

    
    return (
        <>
        
        <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
            {
                isLoading ? <><center><b><h3>Loading</h3></b></center> </>
                :
                productsData.map((p) => <Product key={p.id} product={p} /> ) 
            }
                </Grid>
        </Container>
        </>
    )
}

