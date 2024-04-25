const initialState = {
  loading: false,
  products: [],
  error: "",
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "data_Request":
      return {
        ...state,
        loading: true,
      };
    case "data_Success":
        return{
            loading: false ,
            products : action.payload
        }
    case 'data_error':
        return{
            loading:false,
            error:action.payload
        }
    default:
        return state
  }
};
export default productsReducer
