import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/actions'
const AddToCartBtn = ({ item }) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addProduct(item))
    }
    return (
        <button onClick={handleAddToCart} className="btn btn-secondary mt-3">
            {'ADD TO CART'}
        </button>
    )
}

export default AddToCartBtn
