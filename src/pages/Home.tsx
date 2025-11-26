import { Hero } from '@/components/home/Hero';
import { FeatureCourses } from '@/components/home/FeatureCourses';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <FeatureCourses />
        </div>
    );
};

export default Home;
