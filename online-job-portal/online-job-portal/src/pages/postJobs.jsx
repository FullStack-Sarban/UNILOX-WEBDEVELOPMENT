import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { useJobs } from '../context/JobContext';

const PostJob = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { addJob } = useJobs();

    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        salary: '',
        experience: '',
        description: '',
        requirements: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.title || !formData.company || !formData.location || !formData.email) {
            setError('Please fill in all required fields');
            return;
        }

        // Add the job using context
        addJob(formData);
        setSubmitted(true);
        setError('');

        // Reset form after 2 seconds and redirect to jobs page
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                title: '',
                company: '',
                location: '',
                type: 'Full-time',
                salary: '',
                experience: '',
                description: '',
                requirements: '',
                email: ''
            });
            navigate('/jobs'); // Redirect to jobs page to see the new listing
        }, 2000);
    };

    return (
        <Container className="py-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    <AnimatedSection animation="fadeUp">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border-0 shadow" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                                <Card.Body className="p-4">
                                    <div className="text-center mb-4">
                                        <h1 className="gradient-text mb-3" style={{ fontWeight: 'bold' }}>
                                            Post a New Job
                                        </h1>
                                        <p style={{ color: 'var(--text)' }}>
                                            Reach thousands of qualified candidates. Fill out the form below to list your job opening.
                                        </p>
                                    </div>

                                    {submitted && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Alert variant="success" className="mb-4">
                                                <Alert.Heading>🎉 Job Posted Successfully!</Alert.Heading>
                                                <p>Your job has been posted! Redirecting to jobs page...</p>
                                            </Alert>
                                        </motion.div>
                                    )}

                                    {error && (
                                        <Alert variant="danger" className="mb-4">
                                            {error}
                                        </Alert>
                                    )}

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                Job Title <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                placeholder="e.g., Senior Frontend Developer"
                                                required
                                                style={{
                                                    background: 'var(--bg)',
                                                    color: 'var(--text)',
                                                    borderColor: 'var(--border)',
                                                    padding: '12px'
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                Company Name <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="e.g., Tech Corp"
                                                required
                                                style={{
                                                    background: 'var(--bg)',
                                                    color: 'var(--text)',
                                                    borderColor: 'var(--border)',
                                                    padding: '12px'
                                                }}
                                            />
                                        </Form.Group>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                        Location <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="location"
                                                        value={formData.location}
                                                        onChange={handleChange}
                                                        placeholder="e.g., Remote, New York"
                                                        required
                                                        style={{
                                                            background: 'var(--bg)',
                                                            color: 'var(--text)',
                                                            borderColor: 'var(--border)',
                                                            padding: '12px'
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                        Job Type <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        name="type"
                                                        value={formData.type}
                                                        onChange={handleChange}
                                                        required
                                                        style={{
                                                            background: 'var(--bg)',
                                                            color: 'var(--text)',
                                                            borderColor: 'var(--border)',
                                                            padding: '12px'
                                                        }}
                                                    >
                                                        <option>Full-time</option>
                                                        <option>Part-time</option>
                                                        <option>Contract</option>
                                                        <option>Remote</option>
                                                        <option>Internship</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                        Salary Range
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="salary"
                                                        value={formData.salary}
                                                        onChange={handleChange}
                                                        placeholder="e.g., $80k - $100k"
                                                        style={{
                                                            background: 'var(--bg)',
                                                            color: 'var(--text)',
                                                            borderColor: 'var(--border)',
                                                            padding: '12px'
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                        Experience Required
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="experience"
                                                        value={formData.experience}
                                                        onChange={handleChange}
                                                        placeholder="e.g., 3-5 years"
                                                        style={{
                                                            background: 'var(--bg)',
                                                            color: 'var(--text)',
                                                            borderColor: 'var(--border)',
                                                            padding: '12px'
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                Job Description <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                placeholder="Describe the role, responsibilities, and what makes this opportunity great..."
                                                required
                                                style={{
                                                    background: 'var(--bg)',
                                                    color: 'var(--text)',
                                                    borderColor: 'var(--border)',
                                                    padding: '12px'
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                Requirements
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="requirements"
                                                value={formData.requirements}
                                                onChange={handleChange}
                                                placeholder="List requirements separated by commas (e.g., React, JavaScript, 3+ years experience)"
                                                style={{
                                                    background: 'var(--bg)',
                                                    color: 'var(--text)',
                                                    borderColor: 'var(--border)',
                                                    padding: '12px'
                                                }}
                                            />
                                            <Form.Text style={{ color: 'var(--text)' }}>
                                                Separate each requirement with a comma
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                                                Contact Email <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="hr@company.com"
                                                required
                                                style={{
                                                    background: 'var(--bg)',
                                                    color: 'var(--text)',
                                                    borderColor: 'var(--border)',
                                                    padding: '12px'
                                                }}
                                            />
                                            <Form.Text style={{ color: 'var(--text)' }}>
                                                Candidates will send applications to this email
                                            </Form.Text>
                                        </Form.Group>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-100 btn-hover"
                                            style={{
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                border: 'none',
                                                padding: '12px'
                                            }}
                                        >
                                            Post Job Listing
                                        </Button>

                                        <p className="text-center mt-3" style={{ color: 'var(--text)', fontSize: '0.85rem' }}>
                                            By posting a job, you agree to our Terms of Service and Privacy Policy
                                        </p>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </AnimatedSection>
                </Col>
            </Row>
        </Container>
    );
};

export default PostJob;