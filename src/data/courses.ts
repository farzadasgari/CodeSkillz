import pythonImage from '@/assets/course-python.jpg';
import mlImage from '@/assets/course-ml.jpg';
import webImage from '@/assets/course-web.jpg';

export type CourseFormat = 'live' | 'recorded' | 'hybrid';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    duration: string;
    durationWeeks: number;
    level: CourseLevel;
    price: number;
    originalPrice?: number;
    discountEndsAt?: string;
    isFree: boolean;
    featured: boolean;
    category: string;
    topics: string[];
    format: CourseFormat;
    instructor: {
        name: string;
        title: string;
        avatar?: string;
    };
    enrolledCount: number;
    totalSeats?: number;
    nextLiveSession?: string;
    totalVideoHours?: number;
    modulesCount?: number;
    schedule?: {
        day: string;
        time: string;
    }[];
}

export const courses: Course[] = [
    {
        id: 'python-fundamentals',
        title: 'Python Fundamentals',
        description:
            'Master Python from basics to advanced concepts with hands-on projects.',
        longDescription:
            "Dive deep into Python programming with this comprehensive course. You'll learn everything from basic syntax and data structures to advanced topics like decorators, generators, and asynchronous programming. Perfect for beginners and those looking to solidify their Python knowledge.",
        image: pythonImage,
        duration: '12 weeks',
        durationWeeks: 12,
        level: 'Beginner',
        price: 0,
        isFree: true,
        featured: true,
        category: 'Python',
        format: 'recorded',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 1247,
        totalVideoHours: 24,
        modulesCount: 8,
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
        id: 'machine-learning-mastery',
        title: 'Machine Learning Mastery',
        description:
            'Learn ML algorithms, neural networks, and deep learning with projects.',
        longDescription:
            "Explore the fascinating world of machine learning and artificial intelligence. This course covers supervised and unsupervised learning, neural networks, deep learning frameworks, and practical ML projects. You'll gain hands-on experience with TensorFlow, scikit-learn, and real-world datasets.",
        image: mlImage,
        duration: '16 weeks',
        durationWeeks: 16,
        level: 'Advanced',
        price: 399,
        originalPrice: 499,
        discountEndsAt: '2025-01-15',
        isFree: false,
        featured: false,
        category: 'Machine Learning',
        format: 'live',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 234,
        nextLiveSession: '2025-12-08T18:00:00',
        totalVideoHours: 40,
        modulesCount: 12,
        schedule: [
            { day: 'Monday', time: '18:00 - 20:00' },
            { day: 'Wednesday', time: '18:00 - 20:00' },
        ],
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
        id: 'web-development-pro',
        title: 'Web Development Pro',
        description:
            'Build modern, responsive web apps with HTML, CSS, JS and React.',
        longDescription:
            "Become a proficient web developer by mastering HTML, CSS, JavaScript, and modern frameworks like React. You'll learn responsive design, API integration, state management, and best practices for building scalable web applications.",
        image: webImage,
        duration: '14 weeks',
        durationWeeks: 14,
        level: 'Intermediate',
        price: 299,
        isFree: false,
        featured: false,
        category: 'Web Development',
        format: 'hybrid',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 456,
        nextLiveSession: '2025-12-10T19:00:00',
        totalVideoHours: 32,
        modulesCount: 10,
        schedule: [{ day: 'Tuesday', time: '19:00 - 21:00' }],
        topics: [
            'HTML5 & CSS3',
            'JavaScript ES6+',
            'React & React Hooks',
            'RESTful APIs',
            'Responsive Design',
            'Version Control with Git',
        ],
    },
    {
        id: 'data-science-bootcamp',
        title: 'Data Science Bootcamp',
        description:
            'Complete data science journey from statistics to visualization.',
        longDescription:
            'A comprehensive bootcamp covering statistics, data analysis, pandas, numpy, and data visualization with matplotlib and seaborn. Learn to extract insights from real-world datasets and build your data science portfolio.',
        image: pythonImage,
        duration: '10 weeks',
        durationWeeks: 10,
        level: 'Intermediate',
        price: 249,
        isFree: false,
        featured: true,
        category: 'Data Science',
        format: 'recorded',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 892,
        totalVideoHours: 28,
        modulesCount: 9,
        topics: [
            'Statistics Fundamentals',
            'Pandas & NumPy',
            'Data Visualization',
            'Exploratory Analysis',
            'Feature Engineering',
            'Reporting & Dashboards',
        ],
    },
    {
        id: 'algorithms-dsa',
        title: 'Algorithms & DSA',
        description:
            'Master data structures and algorithms for coding interviews.',
        longDescription:
            'Prepare for technical interviews with this in-depth course on data structures and algorithms. Cover arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming with hundreds of practice problems.',
        image: mlImage,
        duration: '8 weeks',
        durationWeeks: 8,
        level: 'Intermediate',
        price: 0,
        isFree: true,
        featured: false,
        category: 'DSA',
        format: 'recorded',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 2156,
        totalVideoHours: 20,
        modulesCount: 10,
        topics: [
            'Arrays & Strings',
            'Linked Lists',
            'Trees & Graphs',
            'Sorting Algorithms',
            'Dynamic Programming',
            'Problem Solving',
        ],
    },
    {
        id: 'deep-learning-ai',
        title: 'Deep Learning & AI',
        description: 'Build neural networks and AI systems from scratch.',
        longDescription:
            'Advanced deep learning course covering CNNs, RNNs, transformers, and generative AI. Build real projects including image classifiers, chatbots, and recommendation systems using PyTorch and TensorFlow.',
        image: mlImage,
        duration: '12 weeks',
        durationWeeks: 12,
        level: 'Advanced',
        price: 449,
        originalPrice: 599,
        discountEndsAt: '2025-01-20',
        isFree: false,
        featured: true,
        category: 'Machine Learning',
        format: 'live',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 178,
        nextLiveSession: '2025-12-12T17:00:00',
        totalVideoHours: 36,
        modulesCount: 11,
        schedule: [
            { day: 'Thursday', time: '17:00 - 19:00' },
            { day: 'Saturday', time: '10:00 - 12:00' },
        ],
        topics: [
            'Neural Network Fundamentals',
            'CNNs for Vision',
            'RNNs & LSTMs',
            'Transformers & Attention',
            'GANs & Generative AI',
            'Deployment & MLOps',
        ],
    },
    {
        id: 'javascript-essentials',
        title: 'JavaScript Essentials',
        description: 'Learn modern JavaScript from zero to hero.',
        longDescription:
            'Complete JavaScript course covering ES6+, async programming, DOM manipulation, and modern tooling. Perfect foundation for React, Node.js, or any JavaScript framework.',
        image: webImage,
        duration: '6 weeks',
        durationWeeks: 6,
        level: 'Beginner',
        price: 0,
        isFree: true,
        featured: false,
        category: 'Web Development',
        format: 'recorded',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 3421,
        totalVideoHours: 18,
        modulesCount: 7,
        topics: [
            'JavaScript Basics',
            'ES6+ Features',
            'Async Programming',
            'DOM Manipulation',
            'Error Handling',
            'Modern Tooling',
        ],
    },
    {
        id: 'react-masterclass',
        title: 'React Masterclass',
        description: 'Advanced React patterns, hooks, and state management.',
        longDescription:
            'Deep dive into React ecosystem including advanced hooks, context, Redux Toolkit, React Query, and testing. Build production-ready applications with best practices.',
        image: webImage,
        duration: '10 weeks',
        durationWeeks: 10,
        level: 'Advanced',
        price: 349,
        isFree: false,
        featured: false,
        category: 'Web Development',
        format: 'hybrid',
        instructor: {
            name: 'Farzad',
            title: 'PhD Researcher & Mentor',
        },
        enrolledCount: 567,
        nextLiveSession: '2025-12-15T18:00:00',
        totalVideoHours: 30,
        modulesCount: 8,
        schedule: [{ day: 'Sunday', time: '18:00 - 20:00' }],
        topics: [
            'Advanced Hooks',
            'State Management',
            'Performance Optimization',
            'Testing Strategies',
            'Server Components',
            'Deployment',
        ],
    },
];

export const categories = [
    'All',
    'Python',
    'Machine Learning',
    'Web Development',
    'Data Science',
    'DSA',
];
export const levels: ('All' | CourseLevel)[] = [
    'All',
    'Beginner',
    'Intermediate',
    'Advanced',
];
export const formats = ['All', 'live', 'recorded', 'hybrid'];
export const priceFilters = ['All', 'free', 'paid'];
export const durationFilters = ['All', '<4', '4-12', '12+'];
