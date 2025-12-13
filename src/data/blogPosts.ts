import pythonImage from '@/assets/course-python.jpg';
import mlImage from '@/assets/course-ml.jpg';
import webImage from '@/assets/course-web.jpg';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    image: string;
    date: string;
    author: string;
    featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'how-to-join-google-meet',
        title: 'How to Join Your Google Meet Class',
        excerpt:
            'Step-by-step guide to accessing your live coding classes through Google Meet. Learn how to find your meeting links and troubleshoot common issues.',
        content: `# Getting Started with Google Meet Classes

After enrolling in a CodeSkillz course, you'll receive Google Meet links for all scheduled live classes. Here's everything you need to know:

## Finding Your Meeting Link

1. Log into your Dashboard
2. Navigate to "My Courses"
3. Click the cyan "Join Google Meet" button on your enrolled course
4. You'll be redirected to the live class

## Before the Class

- Test your camera and microphone
- Ensure stable internet connection
- Have your coding environment ready
- Join 5 minutes early to troubleshoot

## During the Class

- Keep your microphone muted unless speaking
- Use the chat for questions
- Share your screen when working on problems
- Take notes in your preferred editor

## Troubleshooting

If you can't find your meeting link, check your email or contact support at khufarzadasgari@gmail.com.`,
        category: 'Class Updates',
        tags: ['Google Meet', 'Classes', 'Tutorial'],
        image: pythonImage,
        date: '2025-01-15',
        author: 'Farzad',
        featured: true,
    },
    {
        id: 'accepted-payment-methods',
        title: 'Accepted Payment Methods for CodeSkillz Courses',
        excerpt:
            'Learn about all the payment options available for enrolling in our courses, including Stripe, PayPal, and credit cards.',
        content: `# Payment Options at CodeSkillz

We offer flexible payment methods to make learning accessible to everyone.

## Available Payment Methods

### Credit & Debit Cards
We accept all major cards through our secure Stripe integration:
- Visa
- Mastercard
- American Express
- Discover

### PayPal
Pay securely using your PayPal account for instant enrollment.

### Bank Transfer
For bulk enrollments or corporate training, contact us for bank transfer details.

## Security & Privacy

All payments are processed through industry-standard encryption. We never store your payment information on our servers.

## Refund Policy

30-day money-back guarantee if you're not satisfied with your course.`,
        category: 'Payment Info',
        tags: ['Payment', 'Stripe', 'Enrollment'],
        image: mlImage,
        date: '2025-01-10',
        author: 'Farzad',
    },
    {
        id: 'python-best-practices',
        title: '10 Python Best Practices Every Developer Should Know',
        excerpt:
            'Master these essential Python coding standards and practices to write cleaner, more maintainable code.',
        content: `# Python Best Practices

## 1. Follow PEP 8 Style Guide
Use consistent naming conventions and formatting.

## 2. Write Docstrings
Document your functions and classes properly.

## 3. Use Virtual Environments
Isolate project dependencies with venv or conda.

## 4. Handle Exceptions Gracefully
Use try-except blocks for error handling.

## 5. Leverage List Comprehensions
Write more Pythonic and efficient code.

## 6. Use Type Hints
Add type annotations for better code clarity.

## 7. Keep Functions Small
Follow the single responsibility principle.

## 8. Write Unit Tests
Test your code with pytest or unittest.

## 9. Use Context Managers
Properly manage resources with 'with' statements.

## 10. Optimize Imports
Keep imports organized and remove unused ones.`,
        category: 'Coding Tutorials',
        tags: ['Python', 'Best Practices', 'Tutorial'],
        image: mlImage,
        date: '2025-01-05',
        author: 'Farzad',
    },
    {
        id: 'machine-learning-fundamentals',
        title: "Introduction to Machine Learning: A Beginner's Guide",
        excerpt:
            'Understand the core concepts of machine learning and how to get started with your first ML project.',
        content: `# Machine Learning Fundamentals

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

## Types of Machine Learning

### Supervised Learning
Learn from labeled data to make predictions.

### Unsupervised Learning
Discover patterns in unlabeled data.

### Reinforcement Learning
Learn through trial and error with rewards.

## Getting Started

1. Learn Python fundamentals
2. Master NumPy and Pandas
3. Understand statistics and linear algebra
4. Practice with scikit-learn
5. Build your first project

## Resources

Enroll in our Machine Learning course to dive deeper into these concepts with hands-on projects.`,
        category: 'Research Insights',
        tags: ['Machine Learning', 'AI', 'Tutorial'],
        image: webImage,
        date: '2024-12-28',
        author: 'Farzad',
    },
    {
        id: 'web-development-roadmap',
        title: 'Complete Web Development Roadmap for 2025',
        excerpt:
            'Navigate your journey from beginner to professional web developer with this comprehensive roadmap.',
        content: `# Web Development Roadmap 2025

## Frontend Fundamentals
- HTML5 & Semantic Markup
- CSS3 & Modern Layouts (Flexbox, Grid)
- JavaScript ES6+
- Responsive Design

## Frontend Frameworks
- React.js
- TypeScript
- State Management (Redux, Zustand)
- Build Tools (Vite, Webpack)

## Backend Development
- Node.js & Express
- REST APIs
- Authentication & Authorization
- Database Design (SQL & NoSQL)

## DevOps Basics
- Git & GitHub
- CI/CD Pipelines
- Cloud Deployment (AWS, Vercel)
- Docker Fundamentals

## Best Practices
- Clean Code Principles
- Testing (Unit, Integration, E2E)
- Security Best Practices
- Performance Optimization

Join our Full-Stack Web Development course to master all these skills!`,
        category: 'Coding Tutorials',
        tags: ['Web Development', 'Frontend', 'Backend'],
        image: webImage,
        date: '2024-12-20',
        author: 'Farzad',
    },
    {
        id: 'new-course-announcement',
        title: 'New Advanced Python Course Launching Next Month!',
        excerpt:
            'Excited to announce our new Advanced Python course covering async programming, decorators, and metaclasses.',
        content: `# Advanced Python Course Coming Soon!

We're thrilled to announce a brand new course: **Advanced Python: Master the Language**.

## What You'll Learn

- Asynchronous Programming with asyncio
- Decorators and Function Factories
- Context Managers and Generators
- Metaclasses and Descriptors
- Performance Optimization
- Advanced Data Structures
- Concurrency and Parallelism

## Course Details

- **Start Date**: February 15, 2025
- **Duration**: 8 weeks
- **Live Classes**: Every Tuesday & Thursday, 7 PM EST
- **Price**: $399 (Early bird: $299)

## Prerequisites

Completion of our Python Fundamentals course or equivalent experience.

## Early Bird Discount

Sign up before January 31st to get 25% off! Limited spots available.`,
        category: 'Announcements',
        tags: ['Python', 'Advanced', 'New Course'],
        image: pythonImage,
        date: '2024-12-15',
        author: 'Farzad',
    },
];

export const categories = [
    'All',
    'Class Updates',
    'Payment Info',
    'Coding Tutorials',
    'Research Insights',
    'Announcements',
];
