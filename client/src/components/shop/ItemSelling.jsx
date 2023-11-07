import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import ItemCard from '../card/ItemCard'
import './ItemView.css'

const ItemSelling= () => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setAllItems(data)
        }
        fetchProducts()
    }
    , [])

  return (
    <>
        <div className='container-fluid ps-5 pe-5 bg-light'>
            <Row>
                <Col>
                    <h4 className='text-left mb-3'
                    style={{
                        fontFamily: 'Arial',
                    }}
                    >Your Selling Items
                    </h4>
                </Col>
            </Row>
            <Row
            className='d-flex justify-content-center w-100 h-100' 
            >
                <Col>
                    <OwlCarousel className='owl-theme' loop margin={10} nav
                    responsive={{
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 5,
                        },
                    }}
                    >
                        {allItems.map((item) => (
                            <ItemCard 
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            />
                        ))}
                    </OwlCarousel>
                </Col>
            </Row>
        </div>
        
    </>


  )
}

export default ItemSelling;