import { ALLCARS, ALLCARSEARCH,  GETPRODUCTDETAIL , GETPRODUCTSLIST, SEARCHCAR ,RESETPRODUCT , DETAILS } from "./action";
const initialState = {
    productsList : [],
    productDetail : {},
    details : {},
    cars:[],
    isProductsLoading : true,
    isProductDetailLoading : true
}




export const productsReducer = (state=initialState,action)=>{
    switch(action.type){
        case GETPRODUCTSLIST :
            return {
                ...state , 
                productsList : action.payload,
                isProductsLoading : false
            }
        case ALLCARSEARCH :
                return {
                    ...state , 
                    cars : state.productsList.filter((x) => x.Brand.toLowerCase() === action.payload.toLowerCase()),
                    isProductsLoading : false
                }
        case ALLCARS :
                return {
                    ...state , 
                    cars : state.productsList,
                    isProductsLoading : false
                }
        case SEARCHCAR :
             return {
                        ...state , 
                        cars : state.productsList.filter((x) => x.Brand.toLowerCase() === action.payload.toLowerCase()),
                        isProductsLoading : false
                    }            
            
        case GETPRODUCTDETAIL :
                return {
                    ...state , 
                    productDetail : action.payload,
                    isProductDetailLoading : false
                }
        case DETAILS :
                    return {
                        ...state , 
                        details : action.payload,
                        isProductDetailLoading : false
                    }
      case RESETPRODUCT :
                    return {
                        ...state , 
                        productDetail : {},
                        isProductDetailLoading : true
                    }
        default :
            return {...state}  
    }
}
