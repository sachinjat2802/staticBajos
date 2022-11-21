import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../../components/Navbar'
import './Home.css'
import Search from '../../assets/icons/Search'
import NavbarTwo from '../../components/NavbarTwo'
import Product from '../product/Product'
import ProductTwo from '../product/ProductTwo'
import Search2 from '../../assets/icons/Search2'

const Home = () => {
    return (
        <>
            <Box style={{ overflowX: "hidden" }}>
                <Box className='bg-img-con'>
                    <div className='md-none' style={{ color: "#fff", position: "absolute", left: 16, top: 26, fontWeight: 600, fontSize: 15 }}>
                        BAJO'S
                    </div>
                    <div className='sm-none'>
                        <Navbar
                            color="#fff"
                        />
                    </div>
                    <div className='md-none'>
                        <NavbarTwo />
                    </div>
                    <div className='md-none'>
                    </div>
                    <Box className='container sm-none'>
                        <div>
                            <div className='text-center home-h1'>
                                Make Your
                                <span style={{ color: '#F4A938' }} className="px-2" >Interior</span>
                                More
                            </div>
                            <div className='text-center home-h1'>
                                Minimalistic &
                                <span style={{ color: '#F4A938' }} className="px-2" >Modern</span>
                            </div>
                            <div className='text-center home-h2'>
                                Intelligent design for every lifestyle
                            </div>
                            <div className='text-center home-h2'>
                                All you need to create your space
                            </div>
                        </div>
                    </Box>
                    <Box className='container md-none' style={{ transform: "translateY(-30px)" }}>
                        <div>
                            <div className='text-center home-h1'>
                                Make Your
                                <span style={{ color: '#F4A938' }} className="px-2" >Interior</span>
                                More
                            </div>
                            <div className='text-center home-h1'>
                                Minimalistic &
                                <span style={{ color: '#F4A938' }} className="px-2" >Modern</span>
                            </div>
                            <div className='text-center home-h2'>
                                Intelligent design for every lifestyle
                            </div>
                            <div className='text-center home-h2'>
                                All you need to create your space
                            </div>
                        </div>
                    </Box>
                    <Box className='mt-3 sm-none' >
                        <div className='d-flex align-items-center justify-content-center'>
                            <div style={{ position: "relative" }}>
                                <input className='home-input'
                                    placeholder='Search Furniture'
                                    disabled
                                />
                                <div className='sm-none'>
                                    <div style={{
                                        background: "#F4A938", borderRadius: '100%', width: 43, height: 43,
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 3, top: 4
                                    }}>
                                        <Search />
                                    </div>
                                </div>
                                <div className='md-none'>
                                    <div style={{
                                        background: "#F4A938", borderRadius: '100%', width: 26, height: 26,
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 3, top: 3
                                    }}>
                                        <Search2 style={{}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box style={{ transform: "translateY(-10px)" }} className="md-none" >
                        <div className='d-flex align-items-center justify-content-center'>
                            <div style={{ position: "relative" }}>
                                <input className='home-input'
                                    placeholder='Search Furniture'
                                    disabled
                                />
                                <div className='sm-none'>
                                    <div style={{
                                        background: "#F4A938", borderRadius: '100%', width: 43, height: 43,
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 3, top: 4
                                    }}>
                                        <Search />
                                    </div>
                                </div>
                                <div className='md-none'>
                                    <div style={{
                                        background: "#F4A938", borderRadius: '100%', width: 26, height: 26,
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 3, top: 3
                                    }}>
                                        <Search2 style={{}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>
                <ProductTwo />
            </Box>
            <div className='md-none'>
                <Box className="text-center p-2" style={{ color: "#C1C1C1", background: "#045538", fontSize: 19 }}>
                    Powered by Downpour Consultancy Services Private Limited
                </Box>
            </div>
        </>
    )
}

export default Home