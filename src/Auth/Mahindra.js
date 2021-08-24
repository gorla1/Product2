// import React ,{useEffect , useCallback} from 'react'
// import axios from 'axios'
// import {Product} from './Product'
// import {Grid , Container} from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/'
// import { dispatchProductList } from './action'
// import { bindActionCreators } from 'redux'
// import { useSelector, useDispatch} from 'react-redux'

// const useStyles = makeStyles((theme) => ({
//     cardGrid : {
//       paddingTop : theme.spacing(8),
//       paddingBottom : theme.spacing(8),
//       marginTop: theme.spacing(2),
//       backgroundColor:'#C2FFD9'
      
//     },
//     card: {
//       height : '100%',
//       display : 'flex',
//       flexDirection : 'column'
//     },
//     cardMedia:{
//       paddingTop : '56.25%'
//     }
//   }))

// export const Mahindra = () => {
//     const classes = useStyles(); 
//     // const [productsData, setProductsData] = useState([])
//     // const [isLoading , setIsLoading] = useState(true)
    
//     const productsData = useSelector((state) => state.productsReducer)
//    const dispatch = useDispatch()
//    const actions = bindActionCreators(
//      {
//        dispatchProductList
//      },
//      dispatch
//    )

//     const getData =  useCallback( async ()=>{
//         const res = await axios.get('https://api.jsonbin.io/b/6123b6e9076a223676affd99') 
//         // setProductsData(res.data)
//         // setIsLoading(false)
//         actions.dispatchProductList(res.data)
//     },[]) 

    
//     useEffect(()=>{
//         getData()
        
//     },[getData])

//     const car = productsData.productsList.filter(x => x.Brand === "Mahindra" )
    

//     return (
//         <>
        
//         <Container  className={classes.cardGrid} maxWidth="lg" >
//                 <Grid container spacing={5}>
//             {
//                 productsData.isProductsLoading ? <><center><b><h3>Loading</h3></b></center> </>
//                 :
//                 car.map((p) => <Product key={p.id} product={p} /> ) 
//             }
//                 </Grid>
//         </Container>
//         </>
//     )
// }

