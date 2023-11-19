import React, {useEffect, useState}from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { supabase } from '../../Client.jsx'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import SearchBar from '../../components/bar/SearchBar/SearchBar.jsx'
import ProductsApi from '../../services/ProductsApi.jsx'
import Images from '../../components/image/Images.jsx'
const CreateListing = () => {
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image_url: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const createProduct = async (event) => {
        event.preventDefault()
        
        await supabase 
        .from('products')
        .insert([
            {
                title: newProduct.title,
                price: newProduct.price,
                description: newProduct.description,
                category: newProduct.category,
                image_url: newProduct.image_url,
            }
        ])
        .select()
        alert('Product created!');
        <Navigate to='/' />
    }

  return (
    <>
    <SearchBar />
    <Container className='view-listing mt-5 ' fluid>
        <Link to=
        {`/`}
            className='text-muted ps-5'>Back to home</Link>
        <h3 className='ps-5 mt-2'>Create Listing</h3>
        <span className='text-muted ps-5'>
            Add a new listing to your store.
        </span>
        <Row>
            <Col className='mt-5 w-50'
             xs={6}
             sm={4}
             md={6}
             lg={8}
             xl={8}
            >
                <Card className='shadow-sm mx-auto' style={
                    {
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                        border: 'none',
                        overflow: 'hidden',
                        borderColor: 'black',

                    }
                }>  
                    <Card.Img variant='top' style={
                        {
                            width: '100%',
                            height: '600px',
                            objectFit: 'contain',
                            padding: '20px',
                            opacity: '0.5',                            
                        }
                    
                    } />
                    <Images />
                </Card>
            </Col>
            <Col className='mx-auto ms-5 me-5'
            xs={12}
            sm={10}
            md={4}
            lg={4}
            xl={4}
            >
            <form className='create-product-form' onSubmit={createProduct}>
                <h5 className='text-dark'>Title</h5>
                <input 
                className='form-control'
                type='text' 
                name='title'
                placeholder='Title' 
                onChange={handleChange}
                required
                />
                <br />
                <div className='d-flex justify-content-between'>
                </div>
                <div className='d-flex justify-content-between'>
                    
                        <select className='form-select' aria-label='Default select example'>
                            <option selected>Category</option>
                            <option value='1'>Electronics</option>
                            <option value='2'>Clothing</option>
                            <option value='3'>Home</option>
                        </select>

                </div>
                
                <br />
                <div className='d-flex'>
                    <h5
                    style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.2rem',
                            marginTop: '0.5rem',
                        }
                    }
                    >$</h5>&nbsp; <h5 className='text-dark' style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                        }
                    }><input 
                    className='form-control'
                    type='text'
                    name='price'
                    placeholder='Price ' 
                    onChange={handleChange}
                    required
                    /></h5>

                    &nbsp; <p className='small text-muted'>+ Shipping</p>
                </div>
                <input 
                    className='form-control'
                    type='text' 
                    name='image_url'
                    placeholder='Image url'
                    onChange={handleChange}
                    required
                     />
                <br />
                <h5 className='text-dark'>Description</h5>
                <p className='small text-muted'>
                    <textarea 
                    className='form-control'
                    name='description'
                    rows='5' 
                    placeholder='Describe your product below. Include all relevant information.'
                    onChange={handleChange}
                     />
                </p>
                <br />
                <h5 className='text-dark' style={
                    {
                        fontFamily: 'Arial',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                    }
                }>Shipping</h5>
                <p className='small text-muted'>Shipping Details</p>
                <hr />
                <h5 className='text-dark' style={
                    {
                        fontFamily: 'Arial',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                    }
                }>Seller</h5>
                <p className='small text-muted'>Seller Details</p>
                <div className='d-flex justify-content-between mt-5'>
                    <Button variant='outline-success' className='w-100'>Create</Button>
                    &nbsp;
                </div>
            </form>
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default CreateListing