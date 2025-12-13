import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    ChevronRight,
    FileText,
    Clock,
    CheckCircle2,
    AlertCircle,
    Upload,
    Download,
    TrendingUp,
    Award,
    Target,
    Zap,
    MessageSquare,
} from 'lucide-react';
import { courses } from '@/data/courses';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from 'recharts';

import type { ComponentProps } from 'react';
import type { LucideIcon } from 'lucide-react';

type BadgeVariant = ComponentProps<typeof Badge>['variant'];

type AssignmentStatus = 'graded' | 'submitted' | 'open' | 'upcoming' | 'late';
type AssignmentType = 'Practice' | 'Quiz' | 'Project' | 'Final Exam';

type Assignment = {
    id: number;
    title: string;
    type: AssignmentType;
    dueDate: string;
    status: AssignmentStatus;
    grade?: number;
    submitted?: string;
    feedback?: string;
    improvement?: string;
    progress?: number;
};

const CourseAssignments = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
    const course = courses.find((c) => c.id === id);

    if (!course) {
        navigate('/course-not-found');
        return null;
    }

    const translatedTitle = t(`courseData:${course.id}.title`, {
        defaultValue: course.title,
    });

    const overallGrade = 89;
    const progressData = [
        { name: 'Week 1', score: 75 },
        { name: 'Week 2', score: 82 },
        { name: 'Week 3', score: 85 },
        { name: 'Week 4', score: 89 },
        { name: 'Week 5', score: 92 },
    ];

    const skillsData = [
        { skill: 'Logic', score: 92 },
        { skill: 'Clean Code', score: 85 },
        { skill: 'Efficiency', score: 88 },
        { skill: 'Creativity', score: 90 },
        { skill: 'Documentation', score: 87 },
    ];

    const assignments: Assignment[] = [
        {
            id: 1,
            title: 'Python Basics Challenge',
            type: 'Practice',
            dueDate: '2025-11-20',
            status: 'graded',
            grade: 92,
            submitted: '2025-11-18',
            feedback:
                'Excellent work! Your code is clean and efficient. Consider adding more comments for complex logic.',
            improvement: '+12%',
        },
        {
            id: 2,
            title: 'Data Structures Quiz',
            type: 'Quiz',
            dueDate: '2025-11-22',
            status: 'submitted',
            submitted: '2025-11-21',
            progress: 100,
        },
        {
            id: 3,
            title: 'Build a Calculator',
            type: 'Project',
            dueDate: '2025-11-25',
            status: 'open',
            progress: 60,
        },
        {
            id: 4,
            title: 'Algorithm Optimization',
            type: 'Practice',
            dueDate: '2025-11-28',
            status: 'upcoming',
            progress: 0,
        },
        {
            id: 5,
            title: 'Final Project',
            type: 'Final Exam',
            dueDate: '2025-12-05',
            status: 'upcoming',
            progress: 0,
        },
    ];

    const getStatusBadge = (status: AssignmentStatus) => {
        const variants: Record<AssignmentStatus, { variant: BadgeVariant; icon: LucideIcon; text: string }> = {
            graded: { variant: 'default', icon: CheckCircle2, text: t('dashboard:assignments.status.graded') },
            submitted: { variant: 'secondary', icon: Clock, text: t('dashboard:assignments.status.submitted') },
            open: { variant: 'outline', icon: FileText, text: t('dashboard:assignments.status.open') },
            upcoming: { variant: 'secondary', icon: AlertCircle, text: t('dashboard:assignments.status.upcoming') },
            late: { variant: 'destructive', icon: AlertCircle, text: t('dashboard:assignments.status.late') },
        };

        const config = variants[status] ?? variants.upcoming;
        const Icon = config.icon;

        return (
            <Badge variant={config.variant} className="flex items-center gap-1">
                <Icon className="h-3 w-3" />
                {config.text}
            </Badge>
        );
    };

    const getTypeBadge = (type: string) => {
        const colors: Record<string, string> = {
            Practice: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            Quiz: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
            Project: 'bg-cyan border-cyan/20 text-background',
            'Final Exam':
                'bg-destructive/10 text-destructive border-destructive/20',
        };
        return <Badge className={colors[type] || ''}>{type}</Badge>;
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-muted/30 border-b">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
                        <Link
                            to="/dashboard"
                            className="hover:text-cyan transition-colors whitespace-nowrap"
                        >
                            {t('dashboard:breadcrumb.dashboard')}
                        </Link>
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                        <Link
                            to={`/my-courses/${id}`}
                            className="hover:text-cyan transition-colors truncate"
                        >
                            {translatedTitle}
                        </Link>
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                        <span className="text-foreground font-medium whitespace-nowrap">
                            {t('dashboard:breadcrumb.assignments')}
                        </span>
                    </div>
                </div>
            </div>
            <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary/20 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-3xl lg:text-5xl font-bold">
                            {t('dashboard:assignments.title')}
                        </h1>

                        <div className="flex justify-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-cyan/30 min-w-[180px]">
                                <div className="text-5xl lg:text-7xl font-bold text-cyan mb-2 flex items-center justify-center gap-2">
                                    {overallGrade}%
                                    <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-green-400" />
                                </div>
                                <div className="text-sm text-white/80">
                                    {t('dashboard:assignments.overallGrade')}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan/30 max-w-2xl mx-auto overflow-x-auto">
                            <ResponsiveContainer width="100%" height={150}>
                                <LineChart data={progressData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="rgba(255,255,255,0.1)"
                                    />
                                    <XAxis
                                        dataKey="name"
                                        stroke="rgba(255,255,255,0.5)"
                                        fontSize={12}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.5)"
                                        fontSize={12}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1a1a1a',
                                            border: '1px solid #00FFFF',
                                            borderRadius: '8px',
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#00FFFF"
                                        strokeWidth={3}
                                        dot={{ fill: '#00FFFF', r: 5 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <p className="text-cyan text-lg flex items-center justify-center gap-2 flex-wrap">
                            <Award className="h-5 w-5" />
                            {t('dashboard:assignments.improvement', {
                                percent: 28,
                            })}
                        </p>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 py-12">
                <Tabs defaultValue="assignments" className="space-y-6">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                        <TabsTrigger value="assignments">
                            {t('dashboard:assignments.tabs.assignments')}
                        </TabsTrigger>
                        <TabsTrigger value="analytics">
                            {t('dashboard:assignments.tabs.analytics')}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="assignments" className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs lg:text-sm text-muted-foreground">
                                                {t(
                                                    'dashboard:assignments.stats.averageScore'
                                                )}
                                            </p>
                                            <p className="text-xl lg:text-2xl font-bold text-cyan">
                                                {overallGrade}%
                                            </p>
                                        </div>
                                        <Target className="h-6 w-6 lg:h-8 lg:w-8 text-cyan" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs lg:text-sm text-muted-foreground">
                                                {t(
                                                    'dashboard:assignments.stats.bestScore'
                                                )}
                                            </p>
                                            <p className="text-xl lg:text-2xl font-bold text-green-500">
                                                95%
                                            </p>
                                        </div>
                                        <Award className="h-6 w-6 lg:h-8 lg:w-8 text-green-500" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs lg:text-sm text-muted-foreground">
                                                {t(
                                                    'dashboard:assignments.stats.onTime'
                                                )}
                                            </p>
                                            <p className="text-xl lg:text-2xl font-bold">
                                                100%
                                            </p>
                                        </div>
                                        <CheckCircle2 className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs lg:text-sm text-muted-foreground">
                                                {t(
                                                    'dashboard:assignments.stats.completed'
                                                )}
                                            </p>
                                            <p className="text-xl lg:text-2xl font-bold">
                                                2/5
                                            </p>
                                        </div>
                                        <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-500" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="space-y-4">
                            {assignments.map((assignment) => (
                                <Card
                                    key={assignment.id}
                                    className="hover:shadow-lg transition-shadow"
                                >
                                    <CardHeader>
                                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                                            <div className="space-y-2 flex-1 min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <CardTitle className="text-lg lg:text-xl">
                                                        {assignment.title}
                                                    </CardTitle>
                                                    {getTypeBadge(
                                                        assignment.type
                                                    )}
                                                    {getStatusBadge(
                                                        assignment.status
                                                    )}
                                                </div>
                                                <CardDescription className="flex items-center gap-4 flex-wrap">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        {t(
                                                            'dashboard:assignments.due'
                                                        )}
                                                        : {assignment.dueDate}
                                                    </span>
                                                    {assignment.submitted && (
                                                        <span className="text-cyan">
                                                            {t(
                                                                'dashboard:assignments.status.submitted'
                                                            )}
                                                            :{' '}
                                                            {
                                                                assignment.submitted
                                                            }
                                                        </span>
                                                    )}
                                                    {assignment.grade && (
                                                        <span className="font-semibold text-cyan">
                                                            {t(
                                                                'dashboard:assignments.feedback.grade'
                                                            )}
                                                            : {assignment.grade}
                                                            /100
                                                        </span>
                                                    )}
                                                    {assignment.improvement && (
                                                        <span className="text-green-500 flex items-center gap-1">
                                                            <TrendingUp className="h-4 w-4" />
                                                            {
                                                                assignment.improvement
                                                            }
                                                        </span>
                                                    )}
                                                </CardDescription>
                                            </div>
                                            <div className="flex gap-2 flex-shrink-0">
                                                {assignment.status ===
                                                    'graded' && (
                                                        <Button
                                                            variant="outline"
                                                            onClick={() =>
                                                                setSelectedAssignment(
                                                                    assignment
                                                                )
                                                            }
                                                            className="w-full lg:w-auto"
                                                        >
                                                            {t(
                                                                'dashboard:assignments.buttons.viewFeedback'
                                                            )}
                                                        </Button>
                                                    )}
                                                {assignment.status ===
                                                    'submitted' && (
                                                        <Button
                                                            variant="outline"
                                                            disabled
                                                            className="w-full lg:w-auto"
                                                        >
                                                            {t(
                                                                'dashboard:assignments.buttons.pendingReview'
                                                            )}
                                                        </Button>
                                                    )}
                                                {assignment.status ===
                                                    'open' && (
                                                        <Button
                                                            variant="secondary"
                                                            className="shadow-cyan w-full lg:w-auto"
                                                        >
                                                            <Upload className="mr-2 h-4 w-4" />
                                                            {t(
                                                                'dashboard:assignments.buttons.submitWork'
                                                            )}
                                                        </Button>
                                                    )}
                                                {assignment.status ===
                                                    'upcoming' && (
                                                        <Button
                                                            variant="outline"
                                                            disabled
                                                            className="w-full lg:w-auto"
                                                        >
                                                            {t(
                                                                'dashboard:assignments.buttons.notYetAvailable'
                                                            )}
                                                        </Button>
                                                    )}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    {assignment.progress > 0 &&
                                        assignment.status !== 'graded' && (
                                            <CardContent>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span>
                                                            {t(
                                                                'dashboard:course.progress'
                                                            )}
                                                        </span>
                                                        <span className="font-semibold">
                                                            {
                                                                assignment.progress
                                                            }
                                                            %
                                                        </span>
                                                    </div>
                                                    <Progress
                                                        value={
                                                            assignment.progress
                                                        }
                                                        className="h-2"
                                                    />
                                                </div>
                                            </CardContent>
                                        )}
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="analytics" className="space-y-6">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-cyan" />
                                        {t(
                                            'dashboard:assignments.analytics.scoreProgression'
                                        )}
                                    </CardTitle>
                                    <CardDescription>
                                        {t(
                                            'dashboard:assignments.analytics.performanceOverTime'
                                        )}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="overflow-x-auto">
                                    <ResponsiveContainer
                                        width="100%"
                                        height={300}
                                    >
                                        <LineChart data={progressData}>
                                            <CartesianGrid
                                                strokeDasharray="3 3"
                                                stroke="hsl(var(--border))"
                                            />
                                            <XAxis
                                                dataKey="name"
                                                stroke="hsl(var(--muted-foreground))"
                                                fontSize={12}
                                            />
                                            <YAxis
                                                stroke="hsl(var(--muted-foreground))"
                                                fontSize={12}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor:
                                                        'hsl(var(--card))',
                                                    border: '1px solid hsl(var(--border))',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="score"
                                                stroke="#00FFFF"
                                                strokeWidth={3}
                                                dot={{ fill: '#00FFFF', r: 6 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Target className="h-5 w-5 text-cyan" />
                                        {t(
                                            'dashboard:assignments.analytics.skillsBreakdown'
                                        )}
                                    </CardTitle>
                                    <CardDescription>
                                        {t(
                                            'dashboard:assignments.analytics.strengthsAreas'
                                        )}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="overflow-x-auto">
                                    <ResponsiveContainer
                                        width="100%"
                                        height={300}
                                    >
                                        <RadarChart data={skillsData}>
                                            <PolarGrid stroke="hsl(var(--border))" />
                                            <PolarAngleAxis
                                                dataKey="skill"
                                                stroke="hsl(var(--muted-foreground))"
                                                fontSize={12}
                                            />
                                            <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
                                            <Radar
                                                name="Skills"
                                                dataKey="score"
                                                stroke="#00FFFF"
                                                fill="#00FFFF"
                                                fillOpacity={0.3}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Award className="h-5 w-5 text-cyan" />
                                        {t(
                                            'dashboard:assignments.analytics.recentAchievements'
                                        )}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-br from-cyan/20 to-primary/20 p-6 rounded-lg border border-cyan/30 text-center space-y-2">
                                            <div className="text-4xl">🏆</div>
                                            <p className="font-semibold">
                                                {t(
                                                    'dashboard:assignments.analytics.perfectScore'
                                                )}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {t(
                                                    'dashboard:assignments.analytics.achievedPerfect'
                                                )}
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-cyan/20 to-primary/20 p-6 rounded-lg border border-cyan/30 text-center space-y-2">
                                            <div className="text-4xl">⚡</div>
                                            <p className="font-semibold">
                                                {t(
                                                    'dashboard:assignments.analytics.speedCoder'
                                                )}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {t(
                                                    'dashboard:assignments.analytics.completedRecord'
                                                )}
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-cyan/20 to-primary/20 p-6 rounded-lg border border-cyan/30 text-center space-y-2">
                                            <div className="text-4xl">📈</div>
                                            <p className="font-semibold">
                                                {t(
                                                    'dashboard:assignments.analytics.risingStar'
                                                )}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {t(
                                                    'dashboard:assignments.analytics.percentImprovement'
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle>
                                        {t(
                                            'dashboard:assignments.quickActions'
                                        )}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex gap-3 flex-wrap">
                                    <Button variant="outline" className="gap-2">
                                        <Download className="h-4 w-4" />
                                        {t(
                                            'dashboard:assignments.downloadGrades'
                                        )}
                                    </Button>
                                    <Button variant="outline" className="gap-2">
                                        <Award className="h-4 w-4" />
                                        {t(
                                            'dashboard:assignments.viewCertificate'
                                        )}
                                    </Button>
                                    <Button variant="outline" className="gap-2">
                                        <MessageSquare className="h-4 w-4" />
                                        {t('dashboard:assignments.askFarzad')}
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Dialog
                open={!!selectedAssignment}
                onOpenChange={() => setSelectedAssignment(null)}
            >
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>
                            {t('dashboard:assignments.feedback.title')}
                        </DialogTitle>
                        <DialogDescription>
                            {selectedAssignment?.title}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-cyan/20 rounded-full p-4">
                                <span className="text-2xl font-bold text-cyan">
                                    {selectedAssignment?.grade}/100
                                </span>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    {t('dashboard:assignments.feedback.grade')}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {selectedAssignment?.submitted}
                                </p>
                            </div>
                        </div>
                        <Separator />
                        <div>
                            <p className="font-semibold mb-2">
                                {t(
                                    'dashboard:assignments.feedback.teacherFeedback'
                                )}
                            </p>
                            <p className="text-muted-foreground">
                                {selectedAssignment?.feedback}
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CourseAssignments;
