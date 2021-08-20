import React from "react"
class Footer extends React.Component {
    render() {
        return (
            <div>

                <div className="row" style={{fontSize: "18px",marginTop:'20px' , height:'80px',backgroundColor:'#6E85B2'}}>
                    
                        
                        <div className="col" >
                            <ul className="nav justify-content-center m-3">
                                <li className="nav-item" style={{color:'white'}}>
                                    <a className="nav-link active text-light"  >Terms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light">Privacy and Cookie Police</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" >Intellectual Property</a>
                                </li>
                            </ul>

                        </div>
                    

                </div>

            </div>

        )
    }
}

export default Footer