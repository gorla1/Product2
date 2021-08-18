import React from 'react'
import {Grid , Typography , Button , Card , CardActions, CardContent , CardMedia} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/'
import {Link} from 'react-router-dom'


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
    },
    content:{
      textAlign:'center'
    },
    cardaction:{
      textAlign:'center',
      justifyContent:'center'
    }
  }))

export const Product = (props) => {
    const classes = useStyles(); 
    const {product} = props
    return (
  
                <Grid item xs={12} sm={6} md={4}>
                        <Link to={`/product/${product.id}`} style={{textDecoration : 'none'}}>
                          <Card className={classes.card}>
                              <CardMedia
                                className={classes.cardMedia}
                                image={product.img}
                                title="Image title"
                              />
                              <CardContent className={classes.content}>
                                  <Typography variant='caption' >{product.Model}</Typography>
                              </CardContent>
                              <CardActions className={classes.cardaction}>
                                  <Button variant='contained' size="large" color='secondary' >
                                    View
                                  </Button>
                                 
                              </CardActions>
                          </Card>
                          </Link>
                      </Grid>
             
    )
}