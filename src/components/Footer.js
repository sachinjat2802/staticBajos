import { Box } from '@mui/material'
import React from 'react'
import './Footer.css'
import Img1 from '../assets/images/fb.png'
import Img2 from '../assets/images/twitter.png'
import Img3 from '../assets/images/ig.png'

const Footer = () => {
    return (
        <>
            <Box style={{ background: "#2E9572", height: 250 }}>
                <div className='d-flex justify-content-center py-4 pt-5'>
                    <div style={{ background: "#045538", height: 70, width: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                        <img src={Img1} alt="" style={{ width: 20 }} />
                    </div>
                    <div style={{
                        background: "#045538", height: 70, width: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 100
                    }}
                        className="mx-4"
                    >
                        <a href="mailto:Sbfabrics19@gmail.com" target="_blank">
                            <img src={Img2} alt="" style={{ width: 40 }} />
                        </a>
                    </div>
                    <div style={{ background: "#045538", height: 70, width: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                        <a href="https://wa.me/919896218905" target="_blank">
                            <img src={Img3} alt="" style={{ width: 40 }} />
                        </a>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center py-3' style={{ color: "#fff", fontWeight: 500, fontSize: 20 }}>
                        <div style={{ borderRight: ".5px solid #fff", padding: "5px 20px " }}>ABOUT US</div>
                        <div style={{ borderRight: ".5px solid #fff", padding: "5px 20px " }}>CONTACT US</div>
                        <div style={{ padding: "5px 20px " }}>PRODUCTS</div>
                    </div>
                </div>
            </Box>
            <Box className="text-center p-2" style={{ color: "#C1C1C1", background: "#045538", fontSize: 19 }}>
                Powered by Downpour Consultancy Services Private Limited
            </Box>
        </>
    )
}

export default Footer