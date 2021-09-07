import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    body:{
        width:'100%',
        position:'fixed',
        backgroundColor:"#6E85B2",
        height:theme.spacing(12)

    }
}))


export default function Footer(){

   const classes = useStyles();

    
        return (
            

                <div className={classes.body}>
                    
                        
                        <div className="col" >
                            <ul className="nav justify-content-center mt-4">
                                <li className="nav-item " style={{color:'white', marginLeft:'3%', marginRight:'3%'}}>
                                    <Link to='#' className="text-light"><Typography variant='h6'>Terms</Typography></Link>
                                </li>
                                <li className="nav-item" style={{color:'white', marginLeft:'3%', marginRight:'3%'}}>
                                <Link to='#' className="text-light"><Typography variant='h6'>Privacy</Typography></Link>
                                </li>
                                <li className="nav-item" style={{color:'white', marginLeft:'3%', marginRight:'3%'}}>
                                <a href="https://github.com/gorla1/Product2/tree/gh-pages" className="text-light"><Typography variant='h6'>G.DINESH</Typography></a>
                                </li>
                            </ul>

                        </div>
                    

                </div>

            

        )
    }






