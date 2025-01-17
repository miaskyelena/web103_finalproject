import React, {useEffect, useState} from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Navbar, Nav } from 'react-bootstrap'
import { supabase } from '../../Client.jsx'
import './Navigation.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
const { error } = await supabase.auth.signOut()
if (error) console.log('Error logging out:', error.message)

const Navigation = () => {
    const user = useUser()
    console.log(user)
    if (!user) {
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
        <Navbar bg='light' expand='lg' className='navigation-bar'>
            <Nav.Link className='ms-3'>
                Welcome, {user.email}
                 &nbsp;
                <span class="fi fi-us"></span>
            </Nav.Link>
            
           
            <Nav className='ms-auto me-2'>
                <Nav.Link
                 href='/'
                 onClick={() => {
                     supabase.auth.signOut()
                 }}
                 >Sign out</Nav.Link>            
            </Nav>
        </Navbar>
        </>
    )}
} 

export default Navigation;

