import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';

const About = () => {
    const teamMembers = [
        { name: 'Sarah Johnson', role: 'CEO & Founder', icon: '👩‍💼', bio: '10+ years in recruitment tech' },
        { name: 'Michael Chen', role: 'CTO', icon: '👨‍💻', bio: 'Former tech lead at Google' },
        { name: 'Emily Rodriguez', role: 'Head of Operations', icon: '👩‍⚙️', bio: 'Operations expert' },
        { name: 'David Kim', role: 'Product Manager', icon: '👨‍🎨', bio: 'Product innovation specialist' },
    ];

    const values = [
        { title: 'Innovation', icon: '💡', description: 'Constantly evolving to meet market needs' },
        { title: 'Integrity', icon: '🤝', description: 'Honest and transparent in all we do' },
        { title: 'Excellence', icon: '⭐', description: 'Striving for the best in every aspect' },
        { title: 'Community', icon: '🌍', description: 'Building meaningful connections' },
    ];

    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
            {/* Hero Section */}
            <div className="gradient-bg" style={{ padding: '80px 0', color: 'white', textAlign: 'center' }}>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>About JobPortal</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                            We're on a mission to connect talented professionals with their dream careers
                        </p>
                    </motion.div>
                </Container>
            </div>

            <Container className="py-5">
                {/* Our Story Section */}
                <AnimatedSection animation="fadeUp">
                    <Row className="align-items-center mb-5">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h2 className="gradient-text mb-3" style={{ fontWeight: 'bold' }}>Our Story</h2>
                            <p style={{ color: 'var(--text)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                Founded in 2020, JobPortal was born from a simple idea: make job searching
                                easier and more effective for everyone. What started as a small team of
                                passionate individuals has grown into a platform trusted by thousands of
                                job seekers and employers worldwide.
                            </p>
                            <p style={{ color: 'var(--text)', lineHeight: '1.8', fontSize: '1.05rem', marginTop: '1rem' }}>
                                We believe that finding the right job shouldn't be complicated. Our platform
                                combines cutting-edge technology with human-centric design to create a seamless
                                experience for both candidates and companies.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                style={{ textAlign: 'center', fontSize: '8rem' }}
                            >
                                📖✨
                            </motion.div>
                        </Col>
                    </Row>
                </AnimatedSection>

                {/* Our Mission Section */}
                <AnimatedSection animation="fadeUp" delay={0.2}>
                    <div style={{
                        background: 'var(--code-bg)',
                        padding: '3rem',
                        borderRadius: '15px',
                        marginBottom: '3rem',
                        border: '1px solid var(--border)'
                    }}>
                        <Row className="text-center">
                            <Col lg={12}>
                                <h2 className="gradient-text mb-4" style={{ fontWeight: 'bold' }}>Our Mission</h2>
                                <p style={{ color: 'var(--text)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                                    To empower professionals to find fulfilling careers while helping businesses
                                    build exceptional teams through a transparent, efficient, and user-friendly platform.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </AnimatedSection>

                {/* Our Values Section */}
                <AnimatedSection animation="fadeUp" delay={0.3}>
                    <h2 className="text-center mb-5 gradient-text" style={{ fontWeight: 'bold' }}>Our Values</h2>
                    <Row className="mb-5">
                        {values.map((value, index) => (
                            <Col md={3} key={index} className="mb-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <Card className="text-center card-hover h-100 border-0 shadow-sm" style={{
                                        background: 'var(--bg)',
                                        border: '1px solid var(--border)',
                                        cursor: 'pointer'
                                    }}>
                                        <Card.Body>
                                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                                            <h4 style={{ color: 'var(--text-h)' }}>{value.title}</h4>
                                            <p style={{ color: 'var(--text)' }}>{value.description}</p>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </AnimatedSection>

                {/* Statistics Section */}
                <AnimatedSection animation="fadeUp" delay={0.4}>
                    <div style={{
                        background: 'var(--code-bg)',
                        padding: '3rem',
                        borderRadius: '15px',
                        marginBottom: '3rem',
                        border: '1px solid var(--border)'
                    }}>
                        <Row>
                            {[
                                { number: '50K+', label: 'Active Users' },
                                { number: '10K+', label: 'Companies' },
                                { number: '25K+', label: 'Jobs Filled' },
                                { number: '98%', label: 'Satisfaction Rate' },
                            ].map((stat, index) => (
                                <Col md={3} key={index} className="text-center mb-4 mb-md-0">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                    >
                                        <h3 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                            {stat.number}
                                        </h3>
                                        <p style={{ color: 'var(--text)' }}>{stat.label}</p>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </AnimatedSection>

                {/* Team Section */}
                <AnimatedSection animation="fadeUp" delay={0.5}>
                    <h2 className="text-center mb-5 gradient-text" style={{ fontWeight: 'bold' }}>Meet Our Team</h2>
                    <Row>
                        {teamMembers.map((member, index) => (
                            <Col md={3} key={index} className="mb-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <Card className="text-center card-hover h-100 border-0 shadow-sm" style={{
                                        background: 'var(--bg)',
                                        border: '1px solid var(--border)'
                                    }}>
                                        <Card.Body>
                                            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{member.icon}</div>
                                            <h5 style={{ color: 'var(--text-h)' }}>{member.name}</h5>
                                            <p style={{ color: 'var(--accent)', fontWeight: '500' }}>{member.role}</p>
                                            <p style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{member.bio}</p>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </AnimatedSection>

                {/* CTA Section */}
                <AnimatedSection animation="scale" delay={0.6}>
                    <div className="gradient-bg" style={{
                        padding: '3rem',
                        borderRadius: '15px',
                        marginTop: '2rem',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
                        <p style={{ color: 'white', opacity: 0.9, marginBottom: '1.5rem' }}>
                            Join thousands of professionals who found their dream job through JobPortal
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <button
                                className="btn btn-light btn-hover"
                                style={{ fontWeight: 'bold', padding: '10px 25px' }}
                                onClick={() => window.location.href = '/jobs'}
                            >
                                Find Jobs
                            </button>
                            <button
                                className="btn btn-outline-light btn-hover"
                                style={{ padding: '10px 25px' }}
                                onClick={() => window.location.href = '/post-job'}
                            >
                                Post a Job
                            </button>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </div>
    );
};

export default About;