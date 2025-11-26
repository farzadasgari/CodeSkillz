import pyImage from '@/assets/courses/course-py.jpg';
import mlImage from '@/assets/courses/course-ml.jpg';
import webImage from '@/assets/courses/course-web.jpg';
import adwebImage from '@/assets/courses/course-adweb.jpg';
import adjsImage from '@/assets/courses/course-adjs.jpg';
import uxImage from '@/assets/courses/course-ux.jpg';

export interface Course {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    featured: boolean;
    category: string;
    topics: string[];
}

export const courses: Course[] = [
    {
        id: 'python-fundamentals',
        title: 'Python Fundamentals',
        description:
            'Master Python from basics to advanced concepts with hands-on projects and real-world applications.',
        longDescription:
            "Dive deep into Python programming with this comprehensive course. You'll learn everything from basic syntax and data structures to advanced topics like decorators, generators, and asynchronous programming. Perfect for beginners and those looking to solidify their Python knowledge.",
        image: pyImage,
        duration: '12 weeks',
        level: 'Beginner',
        price: 299,
        featured: true,
        category: 'Python',
        topics: [
            'Python Basics',
            'Data Structures',
            'Object-Oriented Programming',
            'File Handling',
            'Error Handling',
            'Modules & Packages',
        ],
    },
    {
        id: 'frontend-essentials',
        title: 'Frontend Essentials',
        description:
            'Learn the core building blocks of modern web development: HTML, CSS, and Bootstrap.',
        longDescription:
            'This foundational course teaches you how to structure web content with HTML, style pages with CSS, and build responsive layouts using Bootstrap. Through practical exercises and mini-projects, you’ll gain confidence in creating visually appealing and responsive websites.',
        image: webImage,
        duration: '8 weeks',
        level: 'Beginner',
        price: 199,
        featured: false,
        category: 'Web Development',
        topics: [
            'HTML5 Structure',
            'CSS Styling & Animations',
            'Bootstrap Components',
            'Responsive Layouts',
            'Forms & Validation',
            'Best Practices',
        ],
    },
    {
        id: 'machine-learning-mastery',
        title: 'Machine Learning Mastery',
        description:
            'Learn ML algorithms, neural networks, and deep learning with practical projects and industry insights.',
        longDescription:
            "Explore the fascinating world of machine learning and artificial intelligence. This course covers supervised and unsupervised learning, neural networks, deep learning frameworks, and practical ML projects. You'll gain hands-on experience with TensorFlow, scikit-learn, and real-world datasets.",
        image: mlImage,
        duration: '16 weeks',
        level: 'Advanced',
        price: 499,
        featured: false,
        category: 'Machine Learning',
        topics: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Neural Networks',
            'Deep Learning',
            'TensorFlow & Keras',
            'Model Deployment',
        ],
    },
    {
        id: 'advanced-frontend-js',
        title: 'Advanced JavaScript & Frontend Frameworks',
        description:
            'Master advanced JavaScript concepts and build dynamic applications with modern frameworks.',
        longDescription:
            'Take your JavaScript skills to the next level. This course covers advanced ES6+ concepts, asynchronous programming, API handling, and introduces you to modern frontend frameworks. Learn through real interactive projects and build production-level web applications.',
        image: adjsImage,
        duration: '10 weeks',
        level: 'Intermediate',
        price: 349,
        featured: false,
        category: 'Web Development',
        topics: [
            'Advanced ES6+',
            'Async / Await',
            'Fetch & REST APIs',
            'DOM Manipulation',
            'Intro to Frameworks (React/Vue)',
            'Webpack & Tooling',
        ],
    },
    {
        id: 'ux-ui-design-foundations',
        title: 'UX/UI Design Foundations',
        description:
            'Learn user-centered design, wireframing, and interface design using Figma and modern principles.',
        longDescription:
            'This course introduces the fundamentals of user experience and user interface design. You will work with tools like Figma to create wireframes, prototypes, and final UI layouts. Learn color theory, typography, layout systems, and how to design interfaces that are both visually appealing and highly usable.',
        image: uxImage,
        duration: '10 weeks',
        level: 'Beginner',
        price: 259,
        featured: true,
        category: 'Web Design',
        topics: [
            'UX Research Basics',
            'Wireframing & User Flows',
            'Figma Essentials',
            'UI Components',
            'Color & Typography',
            'Prototyping',
        ],
    },
    {
        id: 'web-development-pro',
        title: 'Web Development Pro',
        description:
            'Build modern, responsive web applications with HTML, CSS, JavaScript, and popular frameworks.',
        longDescription:
            "Become a proficient web developer by mastering HTML, CSS, JavaScript, and modern frameworks like React. You'll learn responsive design, API integration, state management, and best practices for building scalable web applications.",
        image: adwebImage,
        duration: '14 weeks',
        level: 'Intermediate',
        price: 399,
        featured: false,
        category: 'Web Development',
        topics: [
            'HTML5 & CSS3',
            'JavaScript ES6+',
            'React & React Hooks',
            'RESTful APIs',
            'Responsive Design',
            'Version Control with Git',
        ],
    },
];

export const categories = [
    'All',
    'Python',
    'Machine Learning',
    'Web Development',
];

export const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
