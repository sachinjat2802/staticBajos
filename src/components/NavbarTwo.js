import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from '../assets/images/side.png'
import MenuWhite from '../assets/icons/MenuWhite';

export default function NavbarTwo() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div style={{ background: "#219653", height: window.innerHeight, padding: 12 }}>
                <div>
                    <Link className='side-link' to="/">Home</Link>
                    <Link className='side-link' to="/about">About Us</Link>
                    <Link className='side-link' to="/contact">Contact Us</Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', height: 400 }}>
                    <img src={Logo} />
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div style={{ width: '100%', background: 'transparent' }}>
                        <div className="d-flex justify-content-end">
                            <Button onClick={toggleDrawer(anchor, true)}>
                                <div className='me-2' style={{marginTop: 20}}>
                                    <MenuWhite
                                        style={{ FontSize: 24 }}
                                    />
                                </div>
                            </Button>
                        </div>
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
