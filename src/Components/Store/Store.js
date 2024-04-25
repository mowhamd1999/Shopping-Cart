import React, { useEffect } from 'react'
import fetchAPI from '../../Redux/ProductReducer/productAction'
import { useDispatch , useSelector } from 'react-redux'
import Products from '../Products/Products'

const Store = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsState)
    useEffect( () => {
        if(!products.products.length) dispatch(fetchAPI())
    },[])
  return (
    <div className='text-black pt-20 flex justify-center my-10'>
    <div className='grid lg:grid-cols-4 gap-x-10 gap-y-5 md:grid-cols-2 sm:grid-cols-1 text-center'>

        {
            products.loading ?
            <h1 className='text-center'>Loading Products ....</h1> :
            products.error ? 
            <h1 className='text-center'>Error ! something wrong</h1>:
            
            products.products.map(product => <Products key={product.id} productData={product} />)
        }
    </div>
    </div>
  )
}

export default Store
