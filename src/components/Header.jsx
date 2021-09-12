import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const noOfProducts = useSelector(state => state.noOfProducts)
    return (
        <div className="fixed-top">
            <Navbar bg='primary' variant='dark' expand='md' className='header py-3'>
                <Container>
                    <Navbar.Brand>
                        <Link to='/home'>
                            <p className='home-headings mb-0 cursor navbar-text'>
                                {"Andys's Kithcen"}
                            </p>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div className="d-flex justify-content-between">
                                <p className='home-headings mb-0 cursor'>
                                    {'Hello Aftab!'}
                                </p>
                                <p className='mx-3 home-headings mb-0 cursor'>
                                    {'(LOGOUT)'}
                                </p>
                                <Link to='/billing-information'>
                                    <div className='position-relative cursor'>
                                        <FaShoppingCart style={{ color: 'black' }} size={24} />
                                        <p className={`total-products-icon ${noOfProducts === 0 ? 'd-none' : ''}`}>
                                            {
                                                noOfProducts
                                            }
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
