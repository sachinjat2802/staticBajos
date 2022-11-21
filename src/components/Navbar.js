import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../assets/images/logo.png'

const Navbar = (p) => {
    return (
        <>
            <Box className="pt-5 ">
                <Box className='d-flex align-items-center'>
                    <div className='d-flex align-items-center' style={{ position: 'absolute', left: '5%' }}>

                        <img src={Logo} alt="logo" style={{ width: 56, height: 56 }} />
                        <span className='ps-2 logo-text' style={{ color: p.color }}>
                            BAJO'S
                        </span>
                    </div>
                    <div style={{ margin: 'auto' }}>
                        <div className='nav-container' >
                            <Link to="/">Home</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Navbar