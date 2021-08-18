import React from 'react';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer:{
        backgroundColor:'#BDD2B6',
        height:theme.spacing(10),
        marginBottom:theme.spacing(2)
    }


}));

export default function Footer() {

    const classes = useStyles()

    return (
        
            
            <div className={classes.footer} >
            <h6>welcome</h6>
            </div>
            
        
    )
}
