import React, { useState, useRef } from 'react';
import {Box, Typography, Grid, Container, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import { GiWireframeGlobe } from 'react-icons/gi';
import { CgMenuRight, CgMenuGridO } from 'react-icons/cg';

const navbarStyles = {
    left: { },

    wrapper: {
        borderBottom: '1px solid var(--light-gray)',
    },
    
    newIcon: {
        fontSize: '10px',
        top: '-15px',
        right: '7.5px',
        backgroundColor: 'rgba(184, 134, 11, 0.3)',
        padding: '2.5px 7px',
    }
};

export default function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container maxWidth={false} disableGutters style={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 2000, backgroundColor: 'black', padding: '0 14px 0' }}>
            <Container maxWidth="lg" disableGutters style={{color: 'white'}}>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4" style={{ padding: 0, margin: 0 }}>
                            <span style={{marginRight: '14px'}}>Bitbrox</span>
                        </Typography>
                        <span style={{ marginTop: '8px' }}>
                            <CgMenuGridO size={18} />
                        </span>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                        {/* <div className="position-relative">
                            <span className="text-dark-goldenrod rounded position-absolute" style={{ fontSize: '10px', top: '-15px', right: '7.5px', backgroundColor: 'rgba(184, 134, 11, 0.3)', padding: '2.5px 7px' }}>New</span>
                            <Link to="/wallet" className="me-4 text-decoration-none text-dark-green">Wallet</Link>
                        </div> */}
                        {/* <Link to="/signup" className="me-4 text-decoration-none text-dark-green">Signup</Link> */}
                        {/* <Link to="/about" className="me-4 text-decoration-none text-dark-green">About</Link> */}
                        {/* <div className="me-4 cursor-pointer">
                            <span className="text-dark-green">Buy Crypto</span>
                        </div> */}
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <Link to="/login" className="me-3 text-decoration-none text-dark-green">Login</Link> */}
                        {/* <Button href="/signup" className="me-3 rounded-pill bg-dark-green text-white px-4 border-0">Signup</Button> */}
                        <h5 className="m-0 cursor-pointer">
                            <GiWireframeGlobe className="text-dark-goldenrod" size={18} style={{marginRight: '14px'}} />
                        </h5>
                        <h5 className="m-0 cursor-pointer" onClick={handleShow}>
                            <CgMenuRight size={18} />
                        </h5>
                    </Box>
                </Box>
            </Container>
        </Container>
    )
}