import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form, InputGroup } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';
import { useJobs } from '../context/JobContext';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('all');
  const [location, setLocation] = useState('');

  const { jobs } = useJobs();

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = jobType === 'all' || job.type.toLowerCase() === jobType.toLowerCase();
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: '4rem' }}>
      <Container className="py-5">
        {/* Header */}
        <AnimatedSection>
          <h1 className="text-center mb-4 gradient-text" style={{ fontWeight: 'bold' }}>
            Job Portal
          </h1>
          <p className="text-center mb-5" style={{ color: 'var(--text)' }}>
            Find your next career opportunity from thousands of job listings
          </p>
        </AnimatedSection>

        {/* Filters */}
        <Row className="mb-5">
          <Col lg={12}>
            <AnimatedSection animation="fadeUp">
              <Card className="shadow-sm border-0" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <Card.Body className="p-4">
                  <Row>
                    <Col md={5} className="mb-3 mb-md-0">
                      <InputGroup>
                        <InputGroup.Text style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}>🔍</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Search by job title or company"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}
                        />
                      </InputGroup>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                      <Form.Select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}
                      >
                        <option value="all">All Job Types</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                      </Form.Select>
                    </Col>
                    <Col md={4}>
                      <InputGroup>
                        <InputGroup.Text style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}>📍</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          style={{ background: 'var(--bg)', color: 'var(--text)', borderColor: 'var(--border)' }}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </AnimatedSection>
          </Col>
        </Row>

        {/* Results Count */}
        <AnimatedSection animation="fadeLeft">
          <p className="mb-4" style={{ color: 'var(--text)' }}>
            Found <strong style={{ color: 'var(--accent)' }}>{filteredJobs.length}</strong> jobs
          </p>
        </AnimatedSection>

        {/* Job Listings */}
        <AnimatePresence>
          <Row>
            {filteredJobs.map((job, index) => (
              <Col lg={6} xl={4} key={job.id} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="card-hover h-100 border-0 shadow" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="mb-1" style={{ color: 'var(--text-h)' }}>{job.title}</h5>
                          <p className="mb-0" style={{ color: 'var(--text)' }}>{job.company}</p>
                        </div>
                        <Badge
                          bg={job.type === 'Full-time' ? 'success' : job.type === 'Part-time' ? 'warning' : 'info'}
                          pill
                        >
                          {job.type}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2">
                          <span style={{ color: 'var(--text)' }} className="me-3">📍 {job.location}</span>
                          <span style={{ color: 'var(--text)' }}>💼 {job.experience || 'Not specified'}</span>
                        </div>
                        <div>
                          <span className="gradient-text fw-bold">💰 {job.salary || 'Competitive'}</span>
                          <span style={{ color: 'var(--text)' }} className="ms-3">🕒 {job.posted}</span>
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <Button
                          variant="primary"
                          className="flex-grow-1 btn-hover"
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none'
                          }}
                          href={`/job/${job.id}`}
                        >
                          Apply Now
                        </Button>
                        <Button variant="outline-secondary" className="btn-hover">
                          Save
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </AnimatePresence>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-5"
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ color: 'var(--text-h)' }}>No jobs found</h3>
            <p style={{ color: 'var(--text)' }}>Try adjusting your search criteria</p>
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default Jobs;