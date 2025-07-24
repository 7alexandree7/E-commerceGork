import './Header.css'
import Head from '../Head/Head'
import Search from '../Search/Search'
import NavBar from '../NavBar/NavBar'
import React from 'react'

const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <NavBar />
    </>
  )
}

export default Header
