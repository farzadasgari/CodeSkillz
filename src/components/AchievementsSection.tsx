import {
    Trophy,
    Award,
    Star,
    Zap,
    Target,
    Code2,
    GraduationCap,
    Flame,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AchievementsSection = () => {
    const achievements = [
        {
            id: 1,
            title: 'First Course Completed',
            description: 'Finished your first CodeSkillz course',
            icon: GraduationCap,
            dateEarned: 'Oct 20, 2025',
            unlocked: true,
        },
        {
            id: 2,
            title: '10 Classes Attended',
            description: 'Attended 10 live Google Meet sessions',
            icon: Flame,
            dateEarned: 'Oct 15, 2025',
            unlocked: true,
        },
        {
            id: 3,
            title: 'Code Warrior',
            description: 'Completed 50 coding exercises',
            icon: Code2,
            dateEarned: 'Oct 10, 2025',
            unlocked: true,
        },
        {
            id: 4,
            title: 'Early Bird',
            description: 'Joined a class 15 minutes early',
            icon: Star,
            dateEarned: 'Oct 5, 2025',
            unlocked: true,
        },
        {
            id: 5,
            title: 'Perfect Score',
            description: 'Scored 100% on a quiz',
            icon: Target,
            dateEarned: 'Sept 28, 2025',
            unlocked: true,
        },
        {
            id: 6,
            title: 'Night Owl',
            description: 'Study past midnight 5 times',
            icon: Zap,
            dateEarned: null,
            unlocked: false,
        },
        {
            id: 7,
            title: 'Course Collector',
            description: 'Enroll in 5 different courses',
            icon: Award,
            dateEarned: null,
            unlocked: false,
        },
        {
            id: 8,
            title: 'Master Coder',
            description: 'Complete all advanced courses',
            icon: Trophy,
            dateEarned: null,
            unlocked: false,
        },
    ];

    const unlockedCount = achievements.filter((a) => a.unlocked).length;
    const totalCount = achievements.length;
    const progressPercent = (unlockedCount / totalCount) * 100;

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                    Achievements
                </h2>
                <p className="text-muted-foreground">
                    Unlock badges as you progress through your learning journey
                </p>
            </div>

            {/* Progress Overview */}
            <Card className="border-border shadow-purple bg-gradient-card">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-primary-foreground">
                            Overall Progress
                        </h3>
                        <span className="text-2xl font-bold text-secondary">
                            {unlockedCount}/{totalCount}
                        </span>
                    </div>
                    <Progress value={progressPercent} className="h-3 mb-2" />
                    <p className="text-sm text-primary-foreground/80">
                        {totalCount - unlockedCount} more badges to unlock!
                    </p>
                </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                    <Card
                        key={achievement.id}
                        className={`border-2 transition-all duration-300 ${
                            achievement.unlocked
                                ? 'border-secondary shadow-crimson hover:scale-105 hover:shadow-purple'
                                : 'border-border opacity-60 grayscale hover:grayscale-0 hover:opacity-80'
                        }`}
                    >
                        <CardContent className="p-6 text-center space-y-4">
                            {/* Icon */}
                            <div
                                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                                    achievement.unlocked
                                        ? 'bg-gradient-card shadow-purple'
                                        : 'bg-muted'
                                }`}
                            >
                                <achievement.icon
                                    className={`w-10 h-10 ${
                                        achievement.unlocked
                                            ? 'text-secondary'
                                            : 'text-muted-foreground'
                                    }`}
                                />
                            </div>

                            {/* Title & Description */}
                            <div>
                                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                                    {achievement.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {achievement.description}
                                </p>
                            </div>

                            {/* Date or Lock Status */}
                            {achievement.unlocked ? (
                                <p className="text-xs text-secondary font-medium">
                                    Earned on {achievement.dateEarned}
                                </p>
                            ) : (
                                <p className="text-xs text-muted-foreground font-medium">
                                    🔒 Keep Learning!
                                </p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
