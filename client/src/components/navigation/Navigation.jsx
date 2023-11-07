import React, {useEffect, useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { supabase } from '../../Client.jsx'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Navigation.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
const { error } = await supabase.auth.signOut()
if (error) console.log('Error logging out:', error.message)

const Navigation = ({ session }) => {
    console.log(session)

    if (!session) {
    return (
        <>
        <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'className='ms-3 brand-title'>eCart</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-2'>
                <Nav.Link href='/'>Sign in</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
} else {
    return (
        <>
        <Navbar bg='light' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav.Link className='ms-3'>
                Welcome, {session.user.email}
            </Nav.Link>
            &nbsp;
            <span class="fi fi-us"></span>
           
            <Nav className='ms-auto me-2'>
                <Nav.Link
                 href='/'
                 onClick={() => {
                     supabase.auth.signOut()
                 }}
                 >Sign out</Nav.Link>

                 <Nav.Link href='/home'><AiOutlineShoppingCart size={25}/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )}
} 

export default Navigation;