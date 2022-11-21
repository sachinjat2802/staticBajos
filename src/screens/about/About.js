import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Box } from '@mui/system'
import './About.css'
import LeftQuote from '../../assets/images/leftQ.png'
import { Col, Row } from 'react-bootstrap'
import Img1 from '../../assets/images/leftAbout.png'
import Img2 from '../../assets/images/V1.png'
import Img3 from '../../assets/images/V2.png'
import Img4 from '../../assets/images/V3.png'
import Img5 from '../../assets/images/handshake.png'
import NavbarTwo from '../../components/NavbarTwo'

const About = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Box className="about-container">
                <div className='sm-none'>
                    <Navbar
                        color="#F4A938"
                    />
                </div>
                <div className='md-none'>
                    <NavbarTwo
                        color="#F4A938"
                    />
                </div>
            </Box>
            <Box>
                <div className='first-box'>
                    <img src={LeftQuote} className="first-img"
                    />
                    SB Fabrics was founded by Mr Pawan Kumar Bajoria in 1989, after he finished his B.Tech in textile technology with a desire to provide quality and affordable textile products. As an engineer, he brought his skills into the manufacturing process, which helped him develop and manufacture. In the beginning, he manufactured tufted carpets, and later he began manufacturing bed sheets and bed covers.
                </div>
            </Box>
            <Box className="md-none">

                <Row>
                    <Col xs={6} lg={5}>
                        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                            <img src={Img1} alt="" style={{ width: 150, height: 200 }} />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className='first-box'>
                            Bajo's is the brainchild of Mr Akash Bajoria, who is taking the baton from his father and taking the legacy forward. Bajos's main focus is providing luxury home decor items. Manufacturing cushion covers, sofa covers, customized curtains, and
                        </div>
                    </Col>
                </Row>
                <div className='first-box'>
                    Bajo's is the brainchild of Mr Akash Bajoria, who is taking the baton from his father and taking the legacy forward. Bajos's main focus is providing luxury home decor items. Manufacturing cushion covers, sofa covers, customized curtains, and bedcovers, it deals in all kinds of textile products. Mr Akash is a CA by profession and has acquired expertise in finance and customer relations.
                    Our 34 years in the fabric industry have given us invaluable experience observing every kind of transformation and innovation, and we have the data to accurately predict future trends.
                </div>
            </Box>
            <Box className="sm-none">
                <Row>
                    <Col xs lg={5}>
                        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                            <img src={Img1} alt="" style={{ width: 300, height: 330 }} />
                        </div>
                    </Col>
                    <Col >
                        <div className='first-box'>
                            Bajo's is the brainchild of Mr Akash Bajoria, who is taking the baton from his father and taking the legacy forward. Bajos's main focus is providing luxury home decor items. Manufacturing cushion covers, sofa covers, customized curtains, and bedcovers, it deals in all kinds of textile products. Mr Akash is a CA by profession and has acquired expertise in finance and customer relations.
                            Our 34 years in the fabric industry have given us invaluable experience observing every kind of transformation and innovation, and we have the data to accurately predict future trends.
                        </div>
                    </Col>
                </Row>
            </Box>
            <Box>
                <div className='a-h1'>
                    Vision Statement
                </div>
                <div className='text-center my-3 mx-2' style={{ color: "#045538", fontWeight: 500, fontSize: 19, position: 'relative' }} >
                    <img src={LeftQuote} alt=""
                        className="first-img"
                    />
                    Decorate every house with good quality textile products without harming the environment in the process."
                    <Box className="container">
                        <Row className='my-5'>
                            <Col xs={4}>
                                <img src={Img2} alt="" className='img-fluid' />
                            </Col>
                            <Col xs={4}>
                                <img src={Img3} alt="" className='img-fluid' />
                            </Col>
                            <Col xs={4}>
                                <img src={Img4} alt="" className='img-fluid' />
                            </Col>
                        </Row>
                    </Box>
                </div>
            </Box>
            <Box>
                <div className='a-h1'>
                    Mission statement
                </div>
                <div className='text-center my-3 mx-2' style={{ color: "#045538", fontWeight: 500, fontSize: 19, position: 'relative' }} >
                    <img src={LeftQuote} alt=""
                        style={{
                            left: 20,
                            top: 0,
                            width: 20,
                            marginRight: 4,
                            transform: "translateY(-10px)"
                        }}
                    />
                    Design and manufacture affordable textile  home decor products of good quality
                </div>
            </Box>
            <br />
            <br />
            <br />
            <Box>
                <Row>
                    <Col xs lg={5}>
                        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                            <img src={Img5} alt="" style={{ width: 300, height: 330 }} />
                        </div>
                    </Col>
                    <Col style={{ padding: '5%', position: 'relative' }}>
                        <div className='text-center' style={{ color: "#6C6A6A", fontWeight: 700, fontSize: 28 }}>
                            Our buyers
                        </div>
                        <div style={{ fontSize: 22, margin: '20px 0', fontWeight: 400 }}>
                            At present, SB fabrics serve almost all the states of India. We also create customized fabrics for our corporate buyers and exporters.
                        </div>
                    </Col>
                </Row>
            </Box>
            <br />
            <br />
            <div className='sm-none'>
                <Footer />
            </div>
            <div className='md-none'>
                <Box className="text-center p-2" style={{ color: "#C1C1C1", background: "#045538", fontSize: 19 }}>
                    Powered by Downpour Consultancy Services Private Limited
                </Box>
            </div>
        </div>
    )
}

export default About