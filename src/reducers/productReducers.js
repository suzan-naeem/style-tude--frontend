const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL, 
  } = require('../constants/productConstants');


export const productListReducer = (state = { loading: null, products: [],error:null }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return {...state, loading: true,error:null };
      case PRODUCT_LIST_SUCCESS:
        return {...state,
          loading: false,products: action.payload };
      case PRODUCT_LIST_FAIL:
        return {...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const productDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };