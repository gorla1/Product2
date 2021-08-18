import React from 'react'
import {Route ,  Switch} from 'react-router-dom'
import { ProductDetail , ProductList } from './components/products'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

export default function App() {
  return (
    <>
      <Header/>
      <main style={{marginTop: "10px"}}>
      
       <Switch>
       <Route exact path='/' component={ProductList}/>
       <Route  path='/product/:id' component={ProductDetail}/>
       <Route  path='/SignIn' component={SignIn}/>
       <Route  path='/SignUp' component={SignUp}/>
      

       <Route render={()=><HandleNotFound/>} />
       
       </Switch>
       <Footer/>
       </main>
        
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
