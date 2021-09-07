export const GETPRODUCTSLIST = "GETPRODUCTSLIST"
export const GETPRODUCTDETAIL = "GETPRODUCTDETAIL"

export const ALLCARS="ALLCARS"
export const ALLCARSEARCH ="ALLCARSEARCH"

export const SEARCHCAR = "SEARCHCAR"
export const RESETPRODUCT = "RESETPRODUCT"
export const DETAILS = "DETAILS"

export const dispatchProductList = (data)=> dispatch=>{
    return dispatch({
        type : GETPRODUCTSLIST,
        payload : data 
    })
}


export const dispatchProductDetail = (data) => dispatch =>{
    return dispatch({
        type : GETPRODUCTDETAIL,
        payload : data
    })
}

export const allCars =(history) => dispatch =>{
    history.push('/cars')
    return dispatch({
        type : ALLCARS
        
    })
}



export const allCarsSearch =(data , history) => dispatch =>{
    console.log("data" , data)
    history.push('/cars')
    
    return dispatch({
        type : ALLCARSEARCH,
        payload : data
    })
}


export const searchField =(data ) => dispatch =>{
    console.log("data" , data)
    return dispatch({
        type : SEARCHCAR,
        payload : data
    })
}


export const dispatchResetProduct =( ) => dispatch =>{
    
    return dispatch({
        type : RESETPRODUCT
        
    })
}

export const details = (data) => dispatch =>{
    return dispatch({
        type : DETAILS,
        payload : data
    })
}




