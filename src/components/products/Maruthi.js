import React ,{useState ,useEffect , useCallback} from 'react'
import axios from 'axios'
import {Product} from './Product'
import {Grid , Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/'


const useStyles = makeStyles((theme) => ({
    cardGrid : {
      paddingTop : theme.spacing(8),
      paddingBottom : theme.spacing(8),
      marginTop: theme.spacing(2),
      backgroundColor:'#C2FFD9'
      
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

export const Maruthi = () => {
    const classes = useStyles(); 
    const [productsData, setProductsData] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    

    const getData =  useCallback( async ()=>{
        const res = await axios.get('https://api.jsonbin.io/b/611f4110c5159b35ae01202b') 
        setProductsData(res.data)
        setIsLoading(false)
        
    }, []) 

    
    useEffect(()=>{
        getData()
        
    },[getData])

    const car = productsData.filter(x => x.Brand === "Maruthi" )
    

    return (
        <>
        
        <Container  className={classes.cardGrid} maxWidth="lg" >
                <Grid container spacing={5}>
            {
                isLoading ? <><center><b><h3>Loading</h3></b></center> </>
                :
                car.map((p) => <Product key={p.id} product={p} /> ) 
            }
                </Grid>
        </Container>
        </>
    )
}

