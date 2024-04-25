import axios from "axios";

const fetchProductRequest = () => {
  return {
    type: "data_Request",
  };
};
const fetchProductSuccess = (products) => {
  return {
    type: "data_Success",
    payload: products,
  };
};
const fetchProductFailed = (error)=>{
    return{
        type:'data_error',
        payload:error
    }
}
const fetchAPI = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const products = response.data
                dispatch(fetchProductSuccess(products))
            }).catch(error => {
                const errorMessage = error.message
                dispatch(fetchProductFailed(errorMessage))
            })
    }
} 
export default fetchAPI