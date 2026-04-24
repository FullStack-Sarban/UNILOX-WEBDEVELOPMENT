import React, { createContext, useState, useContext, useEffect } from 'react';

const JobContext = createContext();

export const useJobs = () => {
    const context = useContext(JobContext);
    if (!context) {
        throw new Error('useJobs must be used within a JobProvider');
    }
    return context;
};

export const JobProvider = ({ children }) => {
    // Initial sample jobs
    const initialJobs = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            company: 'Tech Corp',
            location: 'Remote',
            type: 'Full-time',
            salary: '$120k - $150k',
            experience: '3-5 years',
            posted: '2 days ago',
            description: 'We are looking for an experienced Frontend Developer...',
            requirements: ['React.js', 'JavaScript', 'HTML5/CSS3'],
            email: 'hr@techcorp.com'
        },
        {
            id: 2,
            title: 'Backend Engineer',
            company: 'Data Systems',
            location: 'New York',
            type: 'Full-time',
            salary: '$130k - $160k',
            experience: '4-6 years',
            posted: '1 day ago',
            description: 'Join our backend team...',
            requirements: ['Node.js', 'Python', 'SQL'],
            email: 'careers@datasystems.com'
        },
        {
            id: 3,
            title: 'UX/UI Designer',
            company: 'Creative Studio',
            location: 'Los Angeles',
            type: 'Contract',
            salary: '$80k - $100k',
            experience: '2-4 years',
            posted: '3 days ago',
            description: 'Creative designer needed...',
            requirements: ['Figma', 'Adobe XD', 'UI/UX principles'],
            email: 'design@creativestudio.com'
        },
    ];

    const [jobs, setJobs] = useState(() => {
        // Load saved jobs from localStorage
        const savedJobs = localStorage.getItem('jobs');
        return savedJobs ? JSON.parse(savedJobs) : initialJobs;
    });

    // Save jobs to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }, [jobs]);

    // Function to add a new job
    const addJob = (newJob) => {
        const jobWithId = {
            ...newJob,
            id: Date.now(), // Unique ID based on timestamp
            posted: 'Just now',
            description: newJob.description || 'No description provided',
            requirements: newJob.requirements ? newJob.requirements.split(',').map(req => req.trim()) : [],
        };
        setJobs(prevJobs => [jobWithId, ...prevJobs]);
        return jobWithId;
    };

    // Function to get a single job by ID
    const getJobById = (id) => {
        return jobs.find(job => job.id === parseInt(id));
    };

    return (
        <JobContext.Provider value={{ jobs, addJob, getJobById }}>
            {children}
        </JobContext.Provider>
    );
};