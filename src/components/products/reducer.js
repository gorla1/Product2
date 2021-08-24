import { ALLCARS, FORD, GETPRODUCTDETAIL , GETPRODUCTSLIST, MAHINDRA, MARUTHI } from "./action";
const initialState = {
    productsList : [],
    productDetail : {},
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
        case ALLCARS :
                return {
                    ...state , 
                    cars : state.productsList,
                    isProductsLoading : false
                }
        case MAHINDRA :
            return {
                ...state ,
                cars : state.productsList.filter(x => x.Brand === "Mahindra" ),
                isProductsLoading : false
            }   
        case MARUTHI :
            return {
                ...state ,
                cars : state.productsList.filter(x => x.Brand === "Maruthi" ),
                isProductsLoading : false
            } 
        case FORD :
                return {
                    ...state ,
                    cars : state.productsList.filter(x => x.Brand === "Ford" ),
                    isProductsLoading : false
                }      
        case GETPRODUCTDETAIL :
                return {
                    ...state , 
                    productDetail : action.payload,
                    isProductDetailLoading : false
                }
        default :
            return {...state}  
    }
}
