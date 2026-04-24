import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/jobs', label: 'Find Jobs' },
        { path: '/post-job', label: 'Post a Job' },
        { path: '/about', label: 'About' },
    ];

    return (
        <Navbar
            bg="light"
            expand="lg"
            expanded={expanded}
            className="shadow-sm"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                background: 'var(--bg)',
                borderBottom: '1px solid var(--border)'
            }}
        >
            <Container>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar.Brand as={Link} to="/" className="fw-bold">
                        <span className="gradient-text" style={{ fontSize: '1.5rem' }}>
                            JobPortal
                        </span>
                    </Navbar.Brand>
                </motion.div>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Nav.Link
                                    as={Link}
                                    to={item.path}
                                    onClick={() => setExpanded(false)}
                                    className={`mx-2 ${location.pathname === item.path ? 'active' : ''}`}
                                    style={{
                                        fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                                        color: location.pathname === item.path ? 'var(--accent)' : 'var(--text)',
                                    }}
                                >
                                    {item.label}
                                </Nav.Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Button
                                variant="primary"
                                className="ms-3 btn-hover"
                                style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    border: 'none'
                                }}
                            >
                                Employer Login
                            </Button>
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;