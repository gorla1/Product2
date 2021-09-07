import React, { useState, useEffect, useCallback} from 'react'
import { Route ,  Switch} from 'react-router-dom'
import { ProductDetail , ProductList } from './components/products'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import Body from './components/Body'

import Checkout from './components/Checkout'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { dispatchProductList } from './components/products/action'
import PrivateRoutes from './Auth/PrivateRoutes'
import { host } from './Auth/keys'





export default function App(props) {

const [auth, setAuth ] = useState(false)


const loginHandler=()=>{
setAuth(true)
}

const logoutHandler=()=>{
  setAuth(false)
  localStorage.removeItem("key")
}



// console.log(price)


    const getData =  useCallback( async ()=>{
        const config ={
          headers : {
          Authorization : localStorage.getItem('key') ? localStorage.getItem('key') : ""
          }
        }
        const res = await axios.get(`${host}cars` , config)
       
        actions.dispatchProductList(res.data)
    },[]) 

    
    useEffect(()=>{
        getData()
        
    },[getData])

    
    const dispatch = useDispatch()
    const actions = bindActionCreators(
      {
        dispatchProductList
      },
      dispatch
    )

  return (
    <>
      
      <Header logoutHandler={logoutHandler} auth={auth}/>
       <Switch>
       <Route exact path='/' component={Body}/>
       <Route exact path='/signup' component={SignUp}/>
       <Route exact path='/signin' render={(props)=><SignIn {...props} loginHandler ={loginHandler}/>}/>
       <Route exact path='/cars' component={ProductList}/>

       <Route path='/product/:id' component={ProductDetail} />

       {/* <Route path='/checkout' component={Checkout}/> */}
        
        <PrivateRoutes  path='/checkout' auth={auth} component={Checkout}/>
        

       
      
        
      

       <Route render={()=><HandleNotFound/>} />
       </Switch>
       
       <Footer/>
       
       
        
    </>
  )
}


function HandleNotFound(){
  return(
    <>
     <img src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg" alt="not found" />
    </>
  )
}


