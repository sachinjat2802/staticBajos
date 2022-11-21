import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import P1 from '../../assets/images/product/p11.png'
import P2 from '../../assets/images/product/p12.png'
import P3 from '../../assets/images/product/p13.png'
import P4 from '../../assets/images/product/ad.png'
import P5 from '../../assets/images/product/p21.png'
import P6 from '../../assets/images/product/p22.png'
import P7 from '../../assets/images/product/p23.png'
import P8 from '../../assets/images/product/p24.png'
import P9 from '../../assets/images/product/p61.png'
import P10 from '../../assets/images/product/p62.png'
import P11 from '../../assets/images/product/p63.png'
import P12 from '../../assets/images/product/royal.png'
import P13 from '../../assets/images/product/p31.png'
import Grid from '../../assets/images/product/grid.png'
import Bg from '../../assets/bg.png'
import Ad from '../../assets/images/adm.png'
import Yellow from '../../assets/images/yellow.png'
import All from '../../assets/images/all.png'
import './Product.css'
import Footer from '../../components/Footer'
import { Row, Col } from 'react-bootstrap'
// import R1 from '../../assets/images/product/r1.png'
import R1 from '../../assets/images/product/r1.png'
import R2 from '../../assets/images/product/r2.png'
import R3 from '../../assets/images/product/r3.png'
import R4 from '../../assets/images/product/r4.png'
import C1 from '../../assets/images/product/c1.png'
import C2 from '../../assets/images/product/c2.png'
import C3 from '../../assets/images/product/c3.png'
import C4 from '../../assets/images/product/c4.png'
import C5 from '../../assets/images/product/c5.png'
import C6 from '../../assets/c6.png'
import NavbarTwo from '../../components/NavbarTwo'
import Nav from '../../components/Nav'
import New from '../../assets/new.png'
import New2 from '../../assets/new2.png'


const Product = () => {
    return (
        <Box style={{ overflowX: 'hidden' }}>
            <div className="sm-none">
                <Navbar
                    color="#F4A938"
                />
            </div>
            <div className='md-none'>
                <Nav />
            </div>
            <div className="sm-none">
                <Box style={{ position: 'relative', marginTop: 20, height: '90.9vh' }}>
                    <img src={P1} alt="" style={{ position: 'absolute', zIndex: '1', right: 0, maxHeight: 600 }} className="p1" />
                    <img src={P2} alt="" style={{ position: 'absolute', zIndex: '0', right: 0, maxHeight: 580, top: 20 }} className="p2" />
                    <img src={P3} alt="" style={{ position: 'absolute', zIndex: '2', bottom: 0, right: 400, maxWidth: 330, bottom: 25 }} className="p3" />
                    {/* <img src={Ad} alt="" style={{ position: 'absolute', zIndex: '2', bottom: 0, maxWidth: 300, left: 75 }} /> */}
                    <div style={{ marginLeft: '5%', paddingTop: 125 }}>
                        <div style={{ margin: 'auto' }}>
                            <div style={{ fontSize: 45, fontWeight: 700 }}>
                                <div>Design
                                    <span style={{ color: '#219653', paddingLeft: 10 }}>Your</span>
                                </div>
                                <div>
                                    <span style={{ color: '#F4A938', paddingRight: 10 }}>Comfort</span>
                                    Zone
                                </div>
                            </div>
                            <div className="pt-3 pb-4" style={{ fontWeight: 500 }}>
                                <div>Before anything great is really achieved</div>
                                <div>your comfort zone must be disturbed.</div>
                            </div>
                            <div>
                                <button variant="contained" style={{
                                    background: "#219653",
                                    borderRadius: 100,
                                    fontSize: 22,
                                    fontWeight: 400,
                                    width: 200,
                                    height: 50,
                                    color: 'white',
                                    border: "none"
                                }}>Explore</button>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
            <div className="md-none">
                <Box style={{ position: 'relative', marginTop: 20, marginLeft: 'auto', width: '96%' }}>
                    <img src={Bg} alt="" className="img-fuild w-100" />
                </Box>
            </div>
            <br />
            <Box className='p-4'>
                <div className='text-center product-h1'>
                    Things We Know You'll
                    <span style={{ color: "#219653" }} className="px-2">
                        Love
                    </span>

                </div>
                <Row className='my-4'>
                    <Col xs={6} md={3}>
                        <img src={P5} alt="" className='img-fluid' />
                        <div>
                            Rug
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <img src={P6} alt="" className='img-fluid' />
                        <div>
                            Mattress
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="sm-none">
                        <img src={P7} alt="" className='img-fluid' />
                        <div>
                            cushion covers
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="sm-none">
                        <img src={P8} alt="" className='img-fluid' />
                        <div>
                            Pillow
                        </div>
                    </Col>
                </Row>
            </Box>
            <Box >
                <div className='text-center product-h1'>
                    All Products
                </div>
                <Box className='container py-4'>
                    <Box className='row'>
                        <Col xs={12} md={6} className="md-none m-0 p-0">
                            <img src={All} alt="" className='img-fluid'
                                style={{ width: '100%' }}
                            />
                        </Col>
                        <Col xs={12} md={6} className='p-4'>

                            <Row className='mb-4 mt-4'>
                                <Col>
                                    <img style={{ maxWidth: 200 }} src={C1} alt="" className='img-fluid' />
                                </Col>
                                <Col>
                                    <img style={{ maxWidth: 200 }} src={C2} alt="" className='img-fluid' />
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col>
                                    <img style={{ maxWidth: 200 }} src={C3} alt="" className='img-fluid' />
                                </Col>
                                <Col>
                                    <Paper elevation={8} style={{ maxWidth: 200 }}>
                                        <img style={{ maxWidth: 200 }} src={C6} alt="" className='img-fluid' />
                                    </Paper>
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col>
                                    <img style={{ maxWidth: 200 }} src={C4} alt="" className='img-fluid' />
                                </Col>
                                <Col>
                                    <img style={{ maxWidth: 200 }} src={C5} alt="" className='img-fluid' />
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12} md={6} className="sm-none">
                            <img src={P13} alt="" className='img-fluid' />
                        </Col>
                    </Box>
                </Box>
            </Box>
            <Box className='p-4'>
                <div className='text-center product-h1'>
                    Explore Popular Categories
                </div>
                <div className='container'>
                    <Row>
                        <Col xs={6} md={3}>
                            <img src={R1} alt="" className='img-fluid' style={{ transform: window.innerWidth > 992 ? "translateY(14px)" : "translateY(8px)" }} />
                        </Col>
                        <Col xs={6} md={3}>
                            <img src={R2} alt="" className='img-fluid' style={{ transform: "translateY(2px)" }} />
                        </Col>
                        <Col className='sm-none'>
                            <img src={R3} alt="" className='img-fluid' />
                        </Col>
                        <Col className='sm-none'>
                            <img src={R4} alt="" className='img-fluid' style={{ transform: "translateY(6px)" }} />
                        </Col>
                    </Row>
                </div>
            </Box>
            <div className='sm-none'>
                <Box className="my-4 d-flex justify-content-end">
                    <img src={P12} alt="" className='img-fluid' style={{ width: '90%' }} />
                </Box>
            </div>
            <div className='md-none'>
                <Box className="my-4 d-flex justify-content-end">
                    <img src={Yellow} alt="" className='img-fluid' style={{ width: '96%' }} />
                </Box>
            </div>
            <Box className='p-4'>
                <div className='text-center product-h1'>
                    We've Got Your Style
                </div>
                <Row className='my-4'>
                    <Col xs={6} md={4}>
                        <img src={P9} alt="" className='img-fluid' />
                        <div style={{ fontWeight: 500, fontSize: 30 }} className="my-2" >
                            Traditional
                        </div>
                        <div style={{ color: "#8F8F8F", fontSize: 15 }}>
                            Cozy Designes, clean and classic,
                            give this style it’s signature appeal
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <img src={P10} alt="" className='img-fluid' />
                        <div style={{ fontWeight: 500, fontSize: 30 }} className="my-2" >
                            Farmhouse
                        </div>
                        <div style={{ color: "#8F8F8F", fontSize: 16 }}>
                            Country comforts abound in this fresh
                            take on rustic home decor
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="sm-none" >
                        <img src={P11} alt="" className='img-fluid' />
                        <div style={{ fontWeight: 500, fontSize: 30 }} className="my-2" >
                            Mid-Century Modern
                        </div>
                        <div style={{ color: "#8F8F8F", fontSize: 16 }}>
                            Retro meets modern chic in these clean
                            lines and vibrant tones.
                        </div>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button variant="contained" className='rounded-pill fw-light py-2 fs-5' style={{ textTransform: 'capitalize', width: 320, background: "#219653" }}>
                        Explore all styles
                    </Button>
                </div>
            </Box>

            <div className="sm-none">
                <Box style={{ padding: "5%" }}>
                    <img src={P4} alt="" className='img-fluid' />
                </Box>
            </div>
            <div className="md-none">
                <img src={Ad} alt=""
                    style={{ width: window.innerWidth }}
                />
            </div>
            <Box>
                <div className="sm-none container">
                    <img src={New} alt=""
                        className='w-100 img-fluid'
                    />
                </div>
            </Box>
            <br />
            <Box>
                <div className="md-none container-fluid">
                    <img src={New2} alt=""
                        className='w-100 img-fluid'
                    />
                </div>
            </Box>
            <br />
            <div className="sm-none">
                <Footer />
            </div>
            <div className='md-none'>
                <Box className="text-center p-2" style={{ color: "#C1C1C1", background: "#045538", fontSize: 19 }}>
                    Powered by Downpour Consultancy Services Private Limited
                </Box>
            </div>
        </Box >

    )
}

export default Product