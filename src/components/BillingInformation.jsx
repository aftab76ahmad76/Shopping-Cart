import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { remove, removeAll } from '../redux/actions';
import CounterBtn from './CounterBtn';
const BillingInformation = () => {
    const purchasedProducts = useSelector(state => state.purchasedProducts)
    const totalPrice = useSelector(state => state.totalPrice)
    const noOfProducts = useSelector(state => state.noOfProducts)
    const dispatch = useDispatch()
    return (
        <div className='container top-margin-2'>
            {
                noOfProducts === 0 ?
                    <h2 className=' text-center mt-5 py-5'>
                        {'No products to show!'}
                    </h2> :
                    <table class="table mt-5">
                        <tbody>
                            <tr className='home-headings py-5'>
                                <td className='py-4'>
                                    {'Product'}
                                </td>
                                <td className='py-4'>
                                    {'Qunatity'}
                                </td>
                                <td className='py-4'>
                                    {'Price'}
                                </td>
                                <td className='py-4'>
                                </td>
                            </tr>
                            {
                                purchasedProducts.map((item, idx) => {
                                    return <TableData item={item} />
                                })
                            }
                            <tr className='home-headings py-5'>
                                <td className='py-4'>
                                    {'Total'}
                                </td>
                                <td className='py-4'>

                                </td>
                                <td className='py-4'>
                                    {`$${totalPrice.toFixed(2)}`}
                                </td>
                                <td className='py-4 text-danger cursor' onClick={() => dispatch(removeAll())}>
                                    {'REMOVE ALL'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default BillingInformation

function TableData({ item }) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.catogries[0].food)
    const product = products.find(i => i.id === item.productId)
    const totalPrice = useSelector(state => state.purchasedProducts.find(i => i.productId === item.productId).totalPrice)
    return (
        <tr className='home-headings py-5'>
            <td className='py-4'>
                {product.name}
            </td>
            <td className='py-4'>
                <CounterBtn item={product} />
            </td>
            <td className='py-4'>
                {`$${totalPrice.toFixed(2)}`}
            </td>
            <td className='py-4 text-danger cursor' onClick={() => dispatch(remove(item))}>
                {'REMOVE'}
            </td>
        </tr>
    )
}