export const GETPRODUCTSLIST = "GETPRODUCTSLIST"
export const GETPRODUCTDETAIL = "GETPRODUCTDETAIL"
export const MAHINDRA = "MAHINDRA"
export const MARUTHI = "MARUTHI"
export const FORD="FORD"
export const ALLCARS="ALLCARS"


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

export const dispatchMahindra = (data) => dispatch =>{
    return dispatch({
        type : MAHINDRA,
        payload : data
    })
}

export const dispatchMaruthi = (data) => dispatch =>{
    return dispatch({
        type : MARUTHI,
        payload : data
    })
}

export const dispatchFord = (data) => dispatch =>{
    return dispatch({
        type : FORD,
        payload : data
    })
}

export const allCars =(data) => dispatch =>{
    return dispatch({
        type : ALLCARS,
        payload : data
    })
}