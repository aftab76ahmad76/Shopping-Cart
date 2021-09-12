import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doDecrement, doIncrement } from '../redux/actions'

const CounterBtn = ({ item }) => {
    const quantity = useSelector(state => state.purchasedProducts.find(i => i.productId === item.id).quantity)
    const dispatch = useDispatch()
    return (
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button"
                disabled={!quantity}
                onClick={() => dispatch(doDecrement(item))}
                class="btn btn-secondary px-3">{'-'}</button>
            <button type="button" class="btn btn-secondary btn-secondary-light px-3">{quantity}</button>
            <button type="button"
                onClick={() => dispatch(doIncrement(item))}
                class="btn btn-secondary px-3">{'+'}</button>
        </div>
    )
}

export default CounterBtn
