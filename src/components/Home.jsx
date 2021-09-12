import React, { useState } from 'react'
import AddToCartBtn from './AddToCartBtn'
import CounterBtn from './CounterBtn'
import { useSelector } from 'react-redux'
import { PageItem } from 'react-bootstrap'

const Home = () => {
    const [selectedCatogry, setSelectodCatogry] = useState(0)
    const handleClick = key => {
        setSelectodCatogry(key)
    }
    const catogries = useSelector(state => state.catogries)
    const purchasedProducts = useSelector(state => state.purchasedProducts)
    return (
        <div class="container top-margin-1">
            <div class="row">
                <div class="col-3">
                    <div className='position-fixed'>
                        <p className='text-secondary home-headings'>
                            {'FILTER'}
                        </p>
                        <div className='d-flex flex-column home-headings'>
                            {
                                catogries.map((item, idx) => {
                                    return (
                                        <p onClick={() => handleClick(idx)} key={idx} className={`my-3 cursor ${idx === selectedCatogry ? 'active' : ''}`}>
                                            {item.name}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div className='d-flex align-items-center'>
                        <p className='home-headings my-0 mx-2'>
                            {'Sort by:'}
                        </p>
                        <select name="sort" id="sort" className='home-dropdown'>
                            <option value="Name">{'Name'}</option>
                            <option value="Price">{'Price'}</option>
                        </select>
                    </div>
                    {
                        catogries[selectedCatogry].food.map(item => {
                            const purchased = purchasedProducts.findIndex(i => i.productId === item.id)
                            return (
                                <div class="myCard mt-4">
                                    <div class="myContainer">
                                        <p className='home-headings mb-0'>
                                            {item.name}
                                        </p>
                                        <p className='home-headings text-secondary mb-0'>
                                            {item.desc}
                                        </p>
                                        <p className='home-headings text-secondary'>
                                            {`$${item.price}`}
                                        </p>
                                        {
                                            purchased >= 0 ?
                                                <CounterBtn item={item} />
                                                :
                                                <AddToCartBtn item={item} />
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
