import React from "react"
import { Link } from "react-router-dom"
class Footer extends React.Component {
    render() {
        return (
            <div>

                <div className="row" style={{fontSize: "18px",marginTop:'20px' , height:'80px',backgroundColor:'#6E85B2'}}>
                    
                        
                        <div className="col" >
                            <ul className="nav justify-content-center m-3">
                                <li className="nav-item" style={{color:'white'}}>
                                    <Link to='#' className="text-light">Terms</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='#' className="text-light">Privacy</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='https://github.com/gorla1/Product2/tree/gh-pages' className="text-light">G.DINESH</Link>
                                </li>
                            </ul>

                        </div>
                    

                </div>

            </div>

        )
    }
}

export default Footer