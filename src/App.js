import React from 'react'
import {Route ,  Switch} from 'react-router-dom'
import { ProductDetail , ProductList , Mahindra , Ford } from './components/products'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Container } from '@material-ui/core'
import Body from './components/Body'
import { Maruthi } from './components/products/Maruthi'



export default function App() {



  

  return (
    <>
      <Container>
      <Header/>
       <Switch>
       <Route exact path='/' component={Body}/>
       <Route path='/cars' component={ProductList}/>
       <Route  path='/product/:id' component={ProductDetail}/>
       <Route  path='/signup' component={SignUp}/>
       <Route  path='/signin' component={SignIn}/>
       <Route path='/mahindra' component={Mahindra}/>
       <Route path='/ford' component={Ford}/>
       <Route path='/maruthi' component={Maruthi}/>
       
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
