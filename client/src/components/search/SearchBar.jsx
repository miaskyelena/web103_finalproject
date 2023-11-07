import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <Navbar className='search-bar'>
        <Navbar.Brand href='/' className='ms-5 brand-title'>eCart</Navbar.Brand>
        <Nav className='ms-auto me-2 search-bar'>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              categories
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Pet & Home</a></li>
              <li><a class="dropdown-item" href="#">Outdoor</a></li>
              <li><a class="dropdown-item" href="#">Clothing & Apparel</a></li>
            </ul>
          </div>
          <SearchInput />
          <SearchButton />
          <Button variant='success' className='ms-2 sell-button'>Sell</Button>
          <Nav.Link href='/'>
            <BiUserCircle size={25}/>
          </Nav.Link>            
        </Nav>
    </Navbar>
  )
}

export default SearchBar