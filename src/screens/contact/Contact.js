import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../../components/Navbar'
import "./Contact.css"
import Img1 from '../../assets/images/Whatsapp.png'
import Img2 from '../../assets/images/Mail.png'
import Img3 from '../../assets/images/Phone.png'
import Footer from '../../components/Footer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavbarTwo from '../../components/NavbarTwo'
import Nav from '../../components/Nav'
import Logo from '../../assets/logo.png'
// import Img

const Contact = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '35%', top: 10 }}>
                    <img src={Logo} alt="" />
                </div>

                <div className='sm-none'>
                    <Navbar
                        color="#F4A938"
                    />
                </div>
                <div className="md-none">
                    <Nav />
                </div>
            </div>
            <Box className="text-center container">
                <div style={{ fontSize: 34 }} className="my-3">How can we help you</div>
                <div style={{ position: 'relative' }}>
                    <select
                        className="select-issue"
                    >
                        <option selected>Select</option>
                    </select>
                    <div style={{ position: 'absolute', right: 12, top: 10 }}>
                        <KeyboardArrowDownIcon />
                    </div>

                </div>
                <div className='my-4'>
                    <Button variant="contained"
                        style={{
                            background: "#219653", minWidth: 270, borderRadius: 100, textTransform: 'capitalize', fontWeight: 400, letterSpacing: 1, height: 45, fontSize: 18
                        }}
                    >Continue</Button>
                </div>
                <div className='my-5' style={{ fontSize: 23, fontWeight: 500 }}>
                    <div className='st-1'>Don’t be shy, ask the Hepler squad</div>
                    <div className="green-hr"></div>
                    <div className='st-1'>Monday - Saturday: 10:00 Am - 6:00 Pm</div>
                </div>
                <br />
                <Box className="sm-none">
                    <Box className="d-flex align-items-center justify-content-center">
                        <div className='contact-card'>
                            <div><img src={Img1} alt="" /></div>
                            <div className='text-center'>
                                <div style={{ color: 'white', padding: '16px 0', fontWeight: 300 }}>Whatsapp us</div>
                                <Button style={{ background: "#fff", color: "#219553", width: '100%', fontWeight: 400, textTransform: "capitalize" }}>Whatsapp</Button>
                            </div>
                        </div>
                        <div className='contact-card'>
                            <div><img src={Img2} alt="" /></div>
                            <div className='text-center'>
                                <div style={{ color: 'white', padding: '16px 0', fontWeight: 300 }}>Drop us a line</div>
                                <Button style={{ background: "#fff", color: "#219553", width: '100%', fontWeight: 400, textTransform: "capitalize" }}>Submit a request</Button>
                            </div>
                        </div>
                        <div className='contact-card'>
                            <div><img src={Img3} alt="" /></div>
                            <div className='text-center'>
                                <div style={{ color: 'white', padding: '16px 0', fontWeight: 300 }}>Call Us</div>
                                <Button style={{ background: "#fff", color: "#219553", width: '100%', fontWeight: 400, textTransform: "capitalize" }}>9896218905</Button>
                            </div>
                        </div>
                    </Box>
                </Box>
                <Box className="md-none">
                    <Box className="d-flex align-items-center justify-content-center ">
                        <div>
                            <div className='contact-card'>
                                <div><img src={Img1} alt="" /></div>
                                <div className='text-center'>
                                    <div style={{ color: 'white', padding: '16px 0', fontWeight: 300 }}>Whatsapp us</div>
                                    <a href="https://wa.me/919896218905" target="_blank">
                                        <Button style={{ background: "#fff", color: "#219553", width: '100%', fontWeight: 400, textTransform: "capitalize" }}>Whatsapp</Button>
                                        </a>
                                </div>
                            </div>
                            <div className='contact-card'>
                                <div><img src={Img2} alt="" /></div>
                                <div className='text-center'>
                                    <div style={{ color: 'white', padding: '16px 0', fontWeight: 300 }}>Drop us a line</div>
                                    <a href="mailto:Sbfabrics19@gmail.com" target="_blank">
                                        <Button style={{ background: "#fff", color: "#219553", width: '100%', fontWeight: 400, textTransform: "capitalize" }}>Submit a request</Button>
                                    </a>
                                </div>
                            </div>
                            <div className='contact-card'>
                                <div><img src={Img3} alt="" /></div>
                                <div className='text-center'>
                                    <div style={{ color: 'white', padding: '16px 0', fontWeight: 300 }}>Call Us</div>
                                    <a href="9896218905" target="_blank">
                                        <Button style={{ background: "#fff", color: "#219553", width: '100%', fontWeight: 400, textTransform: "capitalize" }}>9896218905</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>

            </Box>
            <br />
            <div className='sm-none'>
                <Footer />
            </div>
            <div className='md-none'>
                <Box className="text-center p-2" style={{ color: "#C1C1C1", background: "#045538", fontSize: 19 }}>
                    Powered by Downpour Consultancy Services Private Limited
                </Box>
            </div>
        </>
    )
}

export default Contact