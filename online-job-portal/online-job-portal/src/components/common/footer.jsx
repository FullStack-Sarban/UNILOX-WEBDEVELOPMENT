import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--code-bg)',
            color: 'var(--text)',
            padding: '3rem 0 1rem 0',
            borderTop: '1px solid var(--border)',
            marginTop: 'auto'
        }}>
            <Container>
                <Row className="mb-4">
                    <Col md={4} className="mb-4 mb-md-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="mb-3 gradient-text">JobPortal</h4>
                            <p style={{ color: 'var(--text)', opacity: 0.8 }}>
                                Connecting talented professionals with amazing employers. Your dream job is just a click away.
                            </p>
                        </motion.div>
                    </Col>

                    <Col md={2} className="mb-4 mb-md-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h5 className="mb-3" style={{ color: 'var(--text-h)' }}>Quick Links</h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><a href="/" style={{ color: 'var(--text)', textDecoration: 'none' }}>Home</a></li>
                                <li><a href="/jobs" style={{ color: 'var(--text)', textDecoration: 'none' }}>Find Jobs</a></li>
                                <li><a href="/post-job" style={{ color: 'var(--text)', textDecoration: 'none' }}>Post a Job</a></li>
                                <li><a href="/about" style={{ color: 'var(--text)', textDecoration: 'none' }}>About Us</a></li>
                            </ul>
                        </motion.div>
                    </Col>

                    <Col md={3} className="mb-4 mb-md-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h5 className="mb-3" style={{ color: 'var(--text-h)' }}>Contact Info</h5>
                            <p style={{ color: 'var(--text)', marginBottom: '0.5rem', opacity: 0.8 }}>📧 info@jobportal.com</p>
                            <p style={{ color: 'var(--text)', marginBottom: '0.5rem', opacity: 0.8 }}>📞 +1 234 567 8900</p>
                            <p style={{ color: 'var(--text)', opacity: 0.8 }}>📍 123 Job Street, Career City, CC 12345</p>
                        </motion.div>
                    </Col>

                    <Col md={3}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h5 className="mb-3" style={{ color: 'var(--text-h)' }}>Follow Us</h5>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" style={{ color: 'var(--text)', fontSize: '1.5rem', textDecoration: 'none' }}>📘</a>
                                <a href="#" style={{ color: 'var(--text)', fontSize: '1.5rem', textDecoration: 'none' }}>🐦</a>
                                <a href="#" style={{ color: 'var(--text)', fontSize: '1.5rem', textDecoration: 'none' }}>📷</a>
                                <a href="#" style={{ color: 'var(--text)', fontSize: '1.5rem', textDecoration: 'none' }}>💼</a>
                            </div>
                        </motion.div>
                    </Col>
                </Row>

                <hr style={{ borderColor: 'var(--border)' }} />

                <Row>
                    <Col className="text-center">
                        <p style={{ color: 'var(--text)', margin: 0, opacity: 0.7 }}>
                            &copy; 2024 JobPortal. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;