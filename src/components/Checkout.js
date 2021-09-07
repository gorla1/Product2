import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import { productsReducer } from './products/reducer'
import {useSelector } from 'react-redux'

export default function Checkout(props) {

    const productData = useSelector((state)=> state.productsReducer)

    const [form,setForm]=useState({
        firstname:'',
        lastname:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        country:'',
        nameoncard:'',
        cardnumber:'',
        expirydate:'',
        cvv:''
    })
    const [count,setCount]=useState(1) 
    const updateForm=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div className="container" style={{height:"75%"}}> 
                <div className="row">
                    <div className="col-8 m-auto" >
                        <form>
                            <h2 className="text-center">Checkout</h2>
                            <div className="d-flex justify-content-between">
                                <span>Shipping address</span>
                                <span>Payment details</span>
                                <span>Review your order</span>
                            </div>
                            {count === 1 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Shipping address</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.firstname} name="firstname" className="form-control" placeholder="First name*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.lastname} name="lastname" className="form-control" placeholder="Last name*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address1} name="address1" className="form-control" placeholder="Address line 1*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address2} name="address2" className="form-control" placeholder="Address line 2" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.city} name="city" className="form-control" placeholder="City *" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.state} name="state" className="form-control" placeholder="State/Province*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.zip} name="zip" className="form-control" placeholder="Zip / Postal code*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.country} name="country" className="form-control" placeholder="Country*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Use this address for payment details
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> ) : null}
                            {count === 2 ? (
                            <div className="border table-borderless" style={{marginBottom:"60px"}}>
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Payment Method</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.nameoncard} name="nameoncard" className="form-control" placeholder="name on card*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cardnumber} name="cardnumber" className="form-control" placeholder="card number*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.expirydate} name="expirydate" className="form-control" placeholder="expiry date*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cvv} name="cvv" className="form-control" placeholder="cvv*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Remember credit card details for next time
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div className="border table-borderless">
                                <div>
                                    

                                     <div className="row">
                                     <div className="col-9 m-auto">
                                     <h4 style={{textAlign:'center',padding:'10px', margin:'10px'}}>Order Summary</h4>
                                         <h3>YOUR REGESTIRATION HAS BEEN COMPLETED!</h3>
                                         <h6>we will reach you back soon!!!!</h6>

                                         <h3>PRICE:{productData.details.price}</h3>
                                         </div>
                                   
                                    </div> 
                                </div>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div>
                              <Link to='/'><button style={{marginLeft:'35%',marginTop:'10px',marginBottom:"10%"}} className="btn btn-lg btn-warning" type="submit">Place Order</button></Link>
                            </div>
                            ) : null}
                        </form>
                        <div>
                            {/* {count === 1 ? null : ( <button className="btn btn-outline-success" onClick={()=>setCount(count-1)}>Back</button>)} */}
                            {count === 3 ? null : ( <button style={{marginBottom:'10px'}} className="btn btn-outline-success" onClick={()=>setCount(count+1)} >Next</button>)}
                        </div>
                    </div>
                </div>
            </div>
    )
}