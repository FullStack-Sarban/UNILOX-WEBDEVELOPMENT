import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';

const Home = () => {
    const featuredJobs = [
        { id: 1, title: 'Senior Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-time', salary: '$120k - $150k' },
        { id: 2, title: 'UX/UI Designer', company: 'Design Studio', location: 'New York', type: 'Full-time', salary: '$90k - $110k' },
        { id: 3, title: 'Product Manager', company: 'Innovation Labs', location: 'San Francisco', type: 'Remote', salary: '$130k - $160k' },
    ];

    const categories = [
        { name: 'Technology', icon: '💻', jobs: '1,234 jobs' },
        { name: 'Design', icon: '🎨', jobs: '567 jobs' },
        { name: 'Marketing', icon: '📊', jobs: '890 jobs' },
        { name: 'Finance', icon: '💰', jobs: '456 jobs' },
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="gradient-bg" style={{ padding: '80px 0', color: 'white' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
                                    Find Your Dream Job Today
                                </h1>
                                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                                    Join thousands of professionals who found their perfect career match through JobPortal.
                                    Your next opportunity is waiting for you!
                                </p>
                                <div className="d-flex gap-3">
                                    <Button
                                        size="lg"
                                        variant="light"
                                        className="btn-hover"
                                        style={{ fontWeight: 'bold' }}
                                        href="/jobs"
                                    >
                                        Find Jobs
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline-light"
                                        className="btn-hover"
                                        href="/post-job"
                                    >
                                        Post a Job
                                    </Button>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ fontSize: '8rem' }}>💼✨</div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Search Section */}
            <Container className="position-relative" style={{ marginTop: '-30px', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Card className="shadow-lg p-4" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                        <Row>
                            <Col md={5} className="mb-3 mb-md-0">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Job title or keyword"
                                    style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}
                                />
                            </Col>
                            <Col md={5} className="mb-3 mb-md-0">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Location"
                                    style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}
                                />
                            </Col>
                            <Col md={2}>
                                <Button
                                    size="lg"
                                    className="w-100 btn-hover"
                                    style={{
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        border: 'none'
                                    }}
                                >
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </motion.div>
            </Container>

            {/* Categories Section */}
            <Container className="py-5 mt-5">
                <AnimatedSection>
                    <h2 className="text-center mb-5 gradient-text" style={{ fontWeight: 'bold' }}>
                        Popular Categories
                    </h2>
                </AnimatedSection>
                <Row>
                    {categories.map((category, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <AnimatedSection animation="scale" delay={index * 0.1}>
                                <Card className="text-center card-hover h-100 border-0 shadow-sm" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                                    <Card.Body>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.icon}</div>
                                        <h5 style={{ color: 'var(--text-h)' }}>{category.name}</h5>
                                        <p style={{ color: 'var(--text)' }}>{category.jobs}</p>
                                    </Card.Body>
                                </Card>
                            </AnimatedSection>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Featured Jobs Section */}
            <Container className="py-5">
                <AnimatedSection>
                    <h2 className="text-center mb-5 gradient-text" style={{ fontWeight: 'bold' }}>
                        Featured Jobs
                    </h2>
                </AnimatedSection>
                <Row>
                    {featuredJobs.map((job, index) => (
                        <Col md={4} key={job.id} className="mb-4">
                            <AnimatedSection animation="fadeUp" delay={index * 0.2}>
                                <Card className="card-hover h-100 border-0 shadow" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <h5 className="mb-0" style={{ color: 'var(--text-h)' }}>{job.title}</h5>
                                            <Badge bg="primary" pill>{job.type}</Badge>
                                        </div>
                                        <p style={{ color: 'var(--text)' }} className="mb-2">{job.company}</p>
                                        <p style={{ color: 'var(--text)' }} className="mb-2">📍 {job.location}</p>
                                        <p className="gradient-text fw-bold mb-3">💰 {job.salary}</p>
                                        <Button
                                            variant="outline-primary"
                                            className="w-100 btn-hover"
                                        >
                                            Apply Now
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </AnimatedSection>
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-4">
                    <Button
                        size="lg"
                        variant="primary"
                        className="btn-hover px-5"
                        href="/jobs"
                        style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none'
                        }}
                    >
                        View All Jobs
                    </Button>
                </div>
            </Container>

            {/* Stats Section */}
            <div style={{ background: 'var(--code-bg)', padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <Container>
                    <Row>
                        {[
                            { number: '10K+', label: 'Job Seekers' },
                            { number: '500+', label: 'Companies' },
                            { number: '2K+', label: 'Jobs Posted' },
                            { number: '95%', label: 'Satisfaction Rate' },
                        ].map((stat, index) => (
                            <Col md={3} key={index} className="text-center mb-4 mb-md-0">
                                <AnimatedSection animation="scale" delay={index * 0.1}>
                                    <h3 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                                        {stat.number}
                                    </h3>
                                    <p style={{ color: 'var(--text)' }}>{stat.label}</p>
                                </AnimatedSection>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;