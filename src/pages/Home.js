import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productList.products);
    const loading = useSelector((state) => state.productList.loading);
    const error = useSelector((state) => state.productList.error);

    

    useEffect(() =>{
        dispatch(listProducts({}));
    }, [dispatch])   
   
  
    return(
        
        <div>
           {loading ? (
           <LoadingBox></LoadingBox>
           ) : error ? (
           <MessageBox variant="danger">{error}</MessageBox>
           ) : (
            <div className="row center">
                {products.map((product) => (
                <Product key={product._id} product={product}></Product>                  
                ))}   
            </div> )}  
        </div>
    );
}



