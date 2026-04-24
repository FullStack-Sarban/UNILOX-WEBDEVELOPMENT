import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { useJobs } from '../context/JobContext';

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getJobById } = useJobs();

    // Get job from context based on ID
    const job = getJobById(id);

    // Show loading or not found state if job doesn't exist
    if (!job) {
        return (
            <Container className="py-5">
                <Row>
                    <Col lg={8} className="mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                            <h2 style={{ color: 'var(--text-h)' }}>Job Not Found</h2>
                            <p style={{ color: 'var(--text)', marginBottom: '2rem' }}>
                                The job you're looking for doesn't exist or has been removed.
                            </p>
                            <Button
                                onClick={() => navigate('/jobs')}
                                style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    border: 'none'
                                }}
                            >
                                Back to Jobs
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button
                            variant="link"
                            className="mb-3 p-0"
                            onClick={() => navigate('/jobs')}
                            style={{ color: 'var(--accent)', textDecoration: 'none' }}
                        >
                            ← Back to Jobs
                        </Button>
                    </motion.div>

                    <AnimatedSection animation="fadeUp">
                        <Card className="border-0 shadow" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                            <Card.Body className="p-4">
                                {/* Header */}
                                <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                                    <div>
                                        <h1 className="mb-2" style={{ color: 'var(--text-h)' }}>{job.title}</h1>
                                        <h5 style={{ color: 'var(--text)' }}>{job.company}</h5>
                                    </div>
                                    <Badge
                                        bg={job.type === 'Full-time' ? 'success' : job.type === 'Part-time' ? 'warning' : 'info'}
                                        pill
                                        style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                                    >
                                        {job.type}
                                    </Badge>
                                </div>

                                {/* Job Meta Info */}
                                <div className="mb-4 pb-2" style={{ borderBottom: '1px solid var(--border)' }}>
                                    <div className="d-flex flex-wrap gap-3">
                                        <span style={{ color: 'var(--text)' }}>📍 {job.location}</span>
                                        <span style={{ color: 'var(--text)' }}>💰 {job.salary || 'Competitive'}</span>
                                        <span style={{ color: 'var(--text)' }}>💼 {job.experience || 'Not specified'}</span>
                                        <span style={{ color: 'var(--text)' }}>🕒 Posted {job.posted}</span>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div className="mb-4">
                                    <h4 className="mb-3" style={{ color: 'var(--text-h)' }}>Job Description</h4>
                                    <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>{job.description}</p>
                                </div>

                                {/* About Company - Only show if job has about field */}
                                {job.about && (
                                    <div className="mb-4">
                                        <h4 className="mb-3" style={{ color: 'var(--text-h)' }}>About the Company</h4>
                                        <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>{job.about}</p>
                                    </div>
                                )}

                                {/* Responsibilities - Only show if job has responsibilities */}
                                {job.responsibilities && job.responsibilities.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="mb-3" style={{ color: 'var(--text-h)' }}>Key Responsibilities</h4>
                                        <ul style={{ color: 'var(--text)', lineHeight: '1.6' }}>
                                            {job.responsibilities.map((item, idx) => (
                                                <li key={idx} className="mb-2">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Requirements */}
                                {job.requirements && job.requirements.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="mb-3" style={{ color: 'var(--text-h)' }}>Requirements</h4>
                                        <ul style={{ color: 'var(--text)', lineHeight: '1.6' }}>
                                            {job.requirements.map((item, idx) => (
                                                <li key={idx} className="mb-2">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Benefits - Only show if job has benefits */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="mb-3" style={{ color: 'var(--text-h)' }}>Benefits</h4>
                                        <Row>
                                            {job.benefits.map((item, idx) => (
                                                <Col md={6} key={idx}>
                                                    <p style={{ color: 'var(--text)' }}>✓ {item}</p>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                )}

                                {/* Contact Email */}
                                {job.email && (
                                    <div className="mb-4">
                                        <h4 className="mb-3" style={{ color: 'var(--text-h)' }}>Contact Information</h4>
                                        <p style={{ color: 'var(--text)' }}>
                                            Send your application to: <strong style={{ color: 'var(--accent)' }}>{job.email}</strong>
                                        </p>
                                    </div>
                                )}

                                {/* Apply Buttons */}
                                <div className="d-flex gap-3 mt-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                                    <Button
                                        size="lg"
                                        className="flex-grow-1 btn-hover"
                                        style={{
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            border: 'none'
                                        }}
                                    >
                                        Apply Now
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline-primary"
                                        className="btn-hover"
                                        style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                                    >
                                        Save Job
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </AnimatedSection>
                </Col>
            </Row>
        </Container>
    );
};

export default JobDetails;