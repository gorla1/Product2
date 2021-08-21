import React, { useState } from 'react'
import {Redirect, Route ,  Switch} from 'react-router-dom'
import { ProductDetail , ProductList , Mahindra , Ford } from './components/products'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Container } from '@material-ui/core'
import Body from './components/Body'
import { Maruthi } from './components/products/Maruthi'
import Checkout from './components/Checkout'



export default function App() {

const [auth, setAuth ] = useState(false)

//const [price,setPrice] = useState('')

// const getPrice=(price)=>{
// setPrice(price)
// }
const loginHandler=()=>{
setAuth(true)
}

const logoutHandler=()=>{
  setAuth(false)
}

// console.log(price)
  

  return (
    <>
      <Container>
      <Header logoutHandler={logoutHandler} auth={auth}/>
       <Switch>
       <Route exact path='/' component={Body}/>
       <Route path='/cars' component={ProductList}/>
       {/* <Route  path='/product/:id' render={(props)=><ProductDetail {...props} getPrice={getPrice}/>} /> */}
       <Route path='/product/:id' component={ProductDetail}/>
       <Route  path='/signup' component={SignUp}/>
       <Route  path='/signin' render={(props)=><SignIn {...props} loginHandler ={loginHandler}/>}/>
       <Route path='/mahindra' component={Mahindra}/>
       <Route path='/ford' component={Ford}/>
       <Route path='/maruthi' component={Maruthi}/>
        {auth === true ? 
        // <Route path='/checkout' render={(props)=><Checkout {...props} price={price}/>}/>
        <Route path='/checkout' component={Checkout}/>
        :
        <Redirect to="/signin"/>
      }

       <Route render={()=><HandleNotFound/>} />
       </Switch>
       
       <Footer/>
       </Container>
       
        
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
