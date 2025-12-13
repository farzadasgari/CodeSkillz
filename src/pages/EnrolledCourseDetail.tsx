import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
    PlayCircle,
    CheckCircle2,
    Clock,
    Trophy,
    Video,
    FileText,
    Download,
    MessageSquare,
    Calendar,
    Lock,
    ChevronRight,
    Sparkles,
} from 'lucide-react';
import { courses } from '@/data/courses';
import portraitImage from '@/assets/farzad-portrait.jpg';

const EnrolledCourseDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const course = courses.find((c) => c.id === id);

    if (!course) {
        navigate('/course-not-found');
        return null;
    }

    // Get translated course data
    const translatedTitle = t(`courseData:${course.id}.title`, {
        defaultValue: course.title,
    });
    const translatedDescription = t(`courseData:${course.id}.longDescription`, {
        defaultValue: course.longDescription,
    });

    // Mock data for enrolled course
    const courseProgress = 68;
    const modulesCompleted = 12;
    const totalModules = 18;
    const hoursLearned = 24.5;
    const currentGrade = 89;

    const modules = [
        {
            id: 1,
            title: 'Introduction to Python',
            duration: '2h 30m',
            completed: true,
            lessons: [
                {
                    title: 'What is Python?',
                    type: 'video',
                    duration: '15m',
                    completed: true,
                },
                {
                    title: 'Setting Up Your Environment',
                    type: 'video',
                    duration: '20m',
                    completed: true,
                },
                {
                    title: 'Your First Program',
                    type: 'reading',
                    duration: '10m',
                    completed: true,
                },
            ],
        },
        {
            id: 2,
            title: 'Variables and Data Types',
            duration: '3h 15m',
            completed: true,
            lessons: [
                {
                    title: 'Understanding Variables',
                    type: 'video',
                    duration: '25m',
                    completed: true,
                },
                {
                    title: 'Data Types in Python',
                    type: 'video',
                    duration: '30m',
                    completed: true,
                },
                {
                    title: 'Practice: Type Conversion',
                    type: 'quiz',
                    duration: '15m',
                    completed: true,
                },
            ],
        },
        {
            id: 3,
            title: 'Control Flow and Loops',
            duration: '4h 00m',
            completed: false,
            inProgress: true,
            lessons: [
                {
                    title: 'If Statements',
                    type: 'video',
                    duration: '30m',
                    completed: true,
                },
                {
                    title: 'For and While Loops',
                    type: 'video',
                    duration: '40m',
                    completed: false,
                },
                {
                    title: 'Loop Challenges',
                    type: 'quiz',
                    duration: '20m',
                    completed: false,
                },
            ],
        },
        {
            id: 4,
            title: 'Functions and Modules',
            duration: '3h 45m',
            completed: false,
            locked: true,
            lessons: [],
        },
    ];

    const upcomingClasses = [
        {
            id: 1,
            topic: 'Advanced Python Concepts',
            date: '2025-11-15',
            time: '8:00 PM',
            hoursUntil: 2,
            meetLink: 'https://meet.google.com/example',
        },
        {
            id: 2,
            topic: 'Q&A Session',
            date: '2025-11-16',
            time: '10:00 PM',
            hoursUntil: 26,
            meetLink: 'https://meet.google.com/example',
        },
    ];

    const resources = [
        { name: 'Python Cheat Sheet', type: 'PDF', size: '2.4 MB' },
        { name: 'Practice Dataset', type: 'CSV', size: '1.8 MB' },
        { name: 'Code Templates', type: 'ZIP', size: '5.2 MB' },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Breadcrumb */}
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
                        <span className="text-foreground font-medium truncate">
                            {translatedTitle}
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Banner */}
            <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary/20 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-cyan text-xs font-mono animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        >
                            {'{ }'}
                        </div>
                    ))}
                </div>

                <div className="container mx-auto px-4 py-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="secondary"
                                    className="text-cyan border-cyan/30"
                                >
                                    <Sparkles className="h-3 w-3 mr-1" />
                                    {t('dashboard:enrolled.badge')}
                                </Badge>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-bold">
                                {translatedTitle}
                            </h1>
                            <p className="text-lg text-white/90">
                                with <span className="text-cyan">Farzad</span>
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-cyan/20">
                                    <div className="text-xl lg:text-2xl font-bold text-cyan">
                                        {modulesCompleted}/{totalModules}
                                    </div>
                                    <div className="text-xs text-white/80">
                                        {t('dashboard:enrolled.modulesDone')}
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-cyan/20">
                                    <div className="text-xl lg:text-2xl font-bold text-cyan">
                                        {hoursLearned}h
                                    </div>
                                    <div className="text-xs text-white/80">
                                        {t('dashboard:enrolled.hoursLearned')}
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-cyan/20">
                                    <div className="text-xl lg:text-2xl font-bold text-cyan">
                                        {upcomingClasses[0].hoursUntil}h
                                    </div>
                                    <div className="text-xs text-white/80">
                                        {t('dashboard:enrolled.nextClass')}
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-cyan/20">
                                    <div className="text-xl lg:text-2xl font-bold text-cyan">
                                        {currentGrade}%
                                    </div>
                                    <div className="text-xs text-white/80">
                                        {t('dashboard:enrolled.currentGrade')}
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                variant="secondary"
                                className="w-full md:w-auto shadow-cyan"
                            >
                                <PlayCircle className="mr-2 h-5 w-5" />
                                {t('dashboard:enrolled.continueButton')}
                            </Button>
                        </div>

                        {/* Progress Ring */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white/10 backdrop-blur-sm border-8 border-cyan/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl lg:text-6xl font-bold text-cyan animate-pulse">
                                            {courseProgress}%
                                        </div>
                                        <div className="text-sm text-white/80 mt-2">
                                            {t('dashboard:enrolled.compiling')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="modules" className="space-y-6">
                            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto">
                                <TabsTrigger
                                    value="overview"
                                    className="text-xs px-2 py-2"
                                >
                                    {t('dashboard:enrolled.tabs.overview')}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="modules"
                                    className="text-xs px-2 py-2"
                                >
                                    {t('dashboard:enrolled.tabs.modules')}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="classes"
                                    className="text-xs px-2 py-2"
                                >
                                    {t('dashboard:enrolled.tabs.classes')}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="resources"
                                    className="text-xs px-2 py-2"
                                >
                                    {t('dashboard:enrolled.tabs.resources')}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="submissions"
                                    className="text-xs px-2 py-2"
                                >
                                    {t('dashboard:enrolled.tabs.submissions')}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="discussion"
                                    className="text-xs px-2 py-2"
                                >
                                    {t('dashboard:enrolled.tabs.discussion')}
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            {t(
                                                'dashboard:enrolled.overview.welcome'
                                            )}{' '}
                                            {translatedTitle}
                                        </CardTitle>
                                        <CardDescription>
                                            {t(
                                                'dashboard:enrolled.overview.personalizedJourney'
                                            )}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                            <PlayCircle className="h-16 w-16 text-cyan" />
                                        </div>
                                        <p className="text-muted-foreground">
                                            {translatedDescription}
                                        </p>

                                        <div className="bg-secondary/20 border border-cyan/30 rounded-lg p-4 space-y-2">
                                            <div className="flex items-center gap-2 text-cyan">
                                                <Trophy className="h-5 w-5" />
                                                <span className="font-semibold">
                                                    {t(
                                                        'dashboard:enrolled.overview.recentAchievement'
                                                    )}
                                                </span>
                                            </div>
                                            <p className="text-sm">
                                                {t(
                                                    'dashboard:enrolled.overview.completedModule'
                                                )}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="modules" className="space-y-4">
                                {modules.map((module) => (
                                    <Card
                                        key={module.id}
                                        className={
                                            module.locked ? 'opacity-60' : ''
                                        }
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="space-y-1 flex-1 min-w-0">
                                                    <div className="flex items-center gap-3">
                                                        {module.completed ? (
                                                            <CheckCircle2 className="h-6 w-6 text-cyan flex-shrink-0" />
                                                        ) : module.locked ? (
                                                            <Lock className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                                                        ) : (
                                                            <PlayCircle className="h-6 w-6 text-primary flex-shrink-0" />
                                                        )}
                                                        <CardTitle className="text-lg lg:text-xl truncate">
                                                            {module.title}
                                                        </CardTitle>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground ms-9">
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4" />
                                                            {module.duration}
                                                        </span>
                                                        {!module.locked && (
                                                            <Progress
                                                                value={
                                                                    module.completed
                                                                        ? 100
                                                                        : module.inProgress
                                                                          ? 50
                                                                          : 0
                                                                }
                                                                className="w-24 lg:w-32"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                {!module.locked && (
                                                    <Button
                                                        size="sm"
                                                        variant={
                                                            module.inProgress
                                                                ? 'secondary'
                                                                : 'outline'
                                                        }
                                                        className="flex-shrink-0"
                                                    >
                                                        {module.completed
                                                            ? t(
                                                                  'dashboard:enrolled.modules.review'
                                                              )
                                                            : module.inProgress
                                                              ? t(
                                                                    'dashboard:enrolled.modules.resume'
                                                                )
                                                              : t(
                                                                    'dashboard:enrolled.modules.start'
                                                                )}
                                                    </Button>
                                                )}
                                            </div>
                                        </CardHeader>
                                        {!module.locked &&
                                            module.lessons.length > 0 && (
                                                <CardContent className="space-y-2">
                                                    {module.lessons.map(
                                                        (lesson, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center justify-between py-2 px-3 rounded hover:bg-muted/50 transition-colors"
                                                            >
                                                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                                                    {lesson.type ===
                                                                        'video' && (
                                                                        <Video className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                                    )}
                                                                    {lesson.type ===
                                                                        'reading' && (
                                                                        <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                                    )}
                                                                    {lesson.type ===
                                                                        'quiz' && (
                                                                        <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                                    )}
                                                                    <span className="text-sm truncate">
                                                                        {
                                                                            lesson.title
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-3 flex-shrink-0">
                                                                    <span className="text-xs text-muted-foreground">
                                                                        {
                                                                            lesson.duration
                                                                        }
                                                                    </span>
                                                                    {lesson.completed && (
                                                                        <CheckCircle2 className="h-4 w-4 text-cyan" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </CardContent>
                                            )}
                                        {module.locked && (
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">
                                                    {t(
                                                        'dashboard:enrolled.modules.completePrevious'
                                                    )}
                                                </p>
                                            </CardContent>
                                        )}
                                    </Card>
                                ))}
                            </TabsContent>

                            <TabsContent value="classes" className="space-y-4">
                                {upcomingClasses.map((classItem) => (
                                    <Card key={classItem.id}>
                                        <CardHeader>
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                                <div className="space-y-1 min-w-0">
                                                    <CardTitle className="flex items-center gap-2 flex-wrap">
                                                        {classItem.hoursUntil <
                                                            24 && (
                                                            <Badge
                                                                variant="secondary"
                                                                className="text-cyan border-cyan/30"
                                                            >
                                                                <span className="relative flex h-2 w-2 mr-1">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                                                                </span>
                                                                {t(
                                                                    'dashboard:enrolled.classes.liveSoon'
                                                                )}
                                                            </Badge>
                                                        )}
                                                        <span className="truncate">
                                                            {classItem.topic}
                                                        </span>
                                                    </CardTitle>
                                                    <CardDescription className="flex items-center gap-4 flex-wrap">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            {classItem.date} at{' '}
                                                            {classItem.time}
                                                        </span>
                                                        <span className="text-cyan">
                                                            {t(
                                                                'dashboard:enrolled.classes.startingIn'
                                                            )}{' '}
                                                            {
                                                                classItem.hoursUntil
                                                            }
                                                            h
                                                        </span>
                                                    </CardDescription>
                                                </div>
                                                <Button
                                                    variant="secondary"
                                                    className="shadow-cyan w-full sm:w-auto"
                                                    asChild
                                                >
                                                    <a
                                                        href={
                                                            classItem.meetLink
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Video className="mr-2 h-4 w-4" />
                                                        {t(
                                                            'dashboard:enrolled.classes.joinMeet'
                                                        )}
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </TabsContent>

                            <TabsContent
                                value="resources"
                                className="space-y-4"
                            >
                                <div className="grid md:grid-cols-2 gap-4">
                                    {resources.map((resource, idx) => (
                                        <Card
                                            key={idx}
                                            className="hover:shadow-md transition-shadow"
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                                        <FileText className="h-8 w-8 text-cyan flex-shrink-0" />
                                                        <div className="min-w-0">
                                                            <p className="font-semibold truncate">
                                                                {resource.name}
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">
                                                                {resource.type}{' '}
                                                                ·{' '}
                                                                {resource.size}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="flex-shrink-0"
                                                    >
                                                        <Download className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="submissions">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            {t(
                                                'dashboard:enrolled.submissions.title'
                                            )}
                                        </CardTitle>
                                        <CardDescription>
                                            {t(
                                                'dashboard:enrolled.submissions.description'
                                            )}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted/50 rounded-lg gap-3">
                                            <div>
                                                <p className="font-semibold">
                                                    Assignment 1: Python Basics
                                                </p>
                                                <Badge className="mt-1">
                                                    {t(
                                                        'dashboard:enrolled.submissions.graded'
                                                    )}
                                                    : 92/100
                                                </Badge>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full sm:w-auto"
                                            >
                                                {t(
                                                    'dashboard:enrolled.submissions.viewFeedback'
                                                )}
                                            </Button>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted/50 rounded-lg gap-3">
                                            <div>
                                                <p className="font-semibold">
                                                    Assignment 2: Data
                                                    Structures
                                                </p>
                                                <Badge variant="secondary">
                                                    {t(
                                                        'dashboard:enrolled.submissions.submitted'
                                                    )}
                                                </Badge>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                disabled
                                                className="w-full sm:w-auto"
                                            >
                                                {t(
                                                    'dashboard:enrolled.submissions.pendingReview'
                                                )}
                                            </Button>
                                        </div>
                                        <Separator />
                                        <Button
                                            className="w-full"
                                            variant="secondary"
                                            asChild
                                        >
                                            <Link
                                                to={`/courses/${id}/assignments`}
                                            >
                                                {t(
                                                    'dashboard:enrolled.submissions.goToAll'
                                                )}
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="discussion">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <MessageSquare className="h-5 w-5 text-cyan" />
                                            {t(
                                                'dashboard:enrolled.discussion.title'
                                            )}
                                        </CardTitle>
                                        <CardDescription>
                                            {t(
                                                'dashboard:enrolled.discussion.description'
                                            )}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="bg-muted/50 rounded-lg p-8 text-center">
                                            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                            <p className="text-lg font-semibold mb-2">
                                                {t(
                                                    'dashboard:enrolled.discussion.comingSoon'
                                                )}
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                {t(
                                                    'dashboard:enrolled.discussion.stayTuned'
                                                )}
                                            </p>
                                            <ul className="text-sm text-muted-foreground mt-4 space-y-1">
                                                <li>
                                                    •{' '}
                                                    {t(
                                                        'dashboard:enrolled.discussion.askQuestions'
                                                    )}
                                                </li>
                                                <li>
                                                    •{' '}
                                                    {t(
                                                        'dashboard:enrolled.discussion.shareCode'
                                                    )}
                                                </li>
                                                <li>
                                                    •{' '}
                                                    {t(
                                                        'dashboard:enrolled.discussion.connectPeers'
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        {/* Instructor Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    {t('dashboard:enrolled.instructor.title')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage
                                            src={portraitImage}
                                            alt="Farzad"
                                        />
                                        <AvatarFallback>F</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-lg">
                                            Farzad
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Educator
                                        </p>
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    <p>
                                        2,500+{' '}
                                        {t(
                                            'dashboard:enrolled.instructor.joinedStudents'
                                        )}
                                    </p>
                                </div>
                                <Button variant="outline" className="w-full">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    {t('dashboard:enrolled.instructor.message')}
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Quick Access */}
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    {t('dashboard:enrolled.tabs.resources')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {resources.map((resource, idx) => (
                                    <Button
                                        key={idx}
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        <span className="truncate">
                                            {resource.name}
                                        </span>
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default EnrolledCourseDetail;
