import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Clock,
    BarChart3,
    CheckCircle,
    ArrowLeft,
    Users,
    Play,
    Video,
    Wifi,
    Shield,
    Award,
    MessageCircle,
    Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/data/courses';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import farzadAvatar from '@/assets/farzad-portrait.jpg';

const CourseDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation(['courses', 'courseData']);
    const course = courses.find((c) => c.id === id);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (!course?.nextLiveSession) return;

        const updateCountdown = () => {
            const now = new Date();
            const sessionDate = new Date(course.nextLiveSession!);
            const diff = sessionDate.getTime() - now.getTime();

            if (diff <= 0) {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setCountdown({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [course?.nextLiveSession]);

    if (!course) {
        return <Navigate to="/course-not-found" replace />;
    }
    const translatedTitle = t(`courseData:${course.id}.title`, {
        defaultValue: course.title,
    });
    const translatedDescription = t(`courseData:${course.id}.description`, {
        defaultValue: course.description,
    });
    const translatedLongDescription = t(
        `courseData:${course.id}.longDescription`,
        { defaultValue: course.longDescription }
    );

    const formatConfig = {
        live: {
            label: t('detail.liveClass', { defaultValue: 'LIVE CLASS SERIES' }),
            icon: Wifi,
            badgeClass: 'bg-secondary text-secondary-foreground',
            description: t('detail.liveDesc', {
                defaultValue: 'Real-time Google Meet classes with Farzad',
            }),
        },
        recorded: {
            label: t('detail.onDemand', { defaultValue: 'ON-DEMAND COURSE' }),
            icon: Video,
            badgeClass: 'bg-primary text-primary-foreground',
            description: t('detail.recordedDesc', {
                defaultValue: 'Start anytime • Learn at your pace',
            }),
        },
        hybrid: {
            label: t('detail.hybrid', { defaultValue: 'BEST OF BOTH' }),
            icon: Play,
            badgeClass:
                'bg-gradient-to-r from-secondary to-primary text-primary-foreground',
            description: t('detail.hybridDesc', {
                defaultValue: 'Get live Q&A + lifetime recordings',
            }),
        },
    };

    const formatInfo = formatConfig[course.format];
    const FormatIcon = formatInfo.icon;
    const levelColors = {
        Beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
        Intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        Advanced: 'bg-secondary/10 text-secondary border-secondary/20',
    };

    const faqItems = [
        {
            question: t('faq.recordingsQuestion', {
                defaultValue: 'Do I get recordings of live classes?',
            }),
            answer: t('faq.recordingsAnswer', {
                defaultValue:
                    'Yes! All live sessions are recorded and available within 24 hours. You get lifetime access to all recordings.',
            }),
        },
        {
            question: t('faq.prerequisitesQuestion', {
                defaultValue: 'What are the prerequisites?',
            }),
            answer: t('faq.prerequisitesAnswer', {
                defaultValue:
                    'Prerequisites vary by course. Check the course level badge - Beginner courses require no prior experience.',
            }),
        },
        {
            question: t('faq.certificateQuestion', {
                defaultValue: 'Do I get a certificate?',
            }),
            answer: t('faq.certificateAnswer', {
                defaultValue:
                    'Yes! Upon completion, you receive a verified certificate that you can share on LinkedIn.',
            }),
        },
    ];

    return (
        <div className="min-h-screen">
            <section className="relative bg-gradient-hero pt-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    {course.format === 'live' && (
                        <>
                            <div className="absolute top-20 left-10 w-3 h-3 bg-secondary rounded-full animate-ping" />
                            <div
                                className="absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full animate-ping"
                                style={{ animationDelay: '0.5s' }}
                            />
                            <div
                                className="absolute bottom-40 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping"
                                style={{ animationDelay: '1s' }}
                            />
                        </>
                    )}
                    <div className="absolute top-20 right-10 text-6xl font-mono text-primary-foreground/10 animate-float">
                        {'{'}
                    </div>
                    <div
                        className="absolute bottom-20 left-10 text-6xl font-mono text-primary-foreground/10 animate-float"
                        style={{ animationDelay: '1s' }}
                    >
                        {'}'}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        to="/courses"
                        className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 rtl:rotate-180 rtl:ml-2 rtl: mr-0" />
                        {t('backToCourses')}
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge
                                className={cn(
                                    'mb-4 text-sm px-4 py-1.5 font-bold',
                                    formatInfo.badgeClass
                                )}
                            >
                                <FormatIcon className="w-4 h-4 mr-2" />
                                {formatInfo.label}
                            </Badge>
                            {course.isFree && (
                                <Badge className="mb-4 ml-2 bg-secondary text-secondary-foreground text-sm px-4 py-1.5 font-bold">
                                    100%{' '}
                                    {t('detail.free', { defaultValue: 'FREE' })}
                                </Badge>
                            )}

                            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
                                {translatedTitle}
                            </h1>

                            <p className="text-xl text-primary-foreground/80 mb-6">
                                {translatedDescription}
                            </p>
                            <p className="text-primary-foreground/60 mb-6">
                                {formatInfo.description}
                            </p>
                            {course.format === 'live' &&
                                course.nextLiveSession && (
                                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                                        <p className="text-secondary font-semibold mb-3">
                                            {t('detail.nextSession', {
                                                defaultValue:
                                                    'Next session starts in:',
                                            })}
                                        </p>
                                        <div className="flex gap-4">
                                            {[
                                                {
                                                    value: countdown.days,
                                                    label: t('detail.days', {
                                                        defaultValue: 'Days',
                                                    }),
                                                },
                                                {
                                                    value: countdown.hours,
                                                    label: t('detail.hours', {
                                                        defaultValue: 'Hours',
                                                    }),
                                                },
                                                {
                                                    value: countdown.minutes,
                                                    label: t('detail.min', {
                                                        defaultValue: 'Min',
                                                    }),
                                                },
                                                {
                                                    value: countdown.seconds,
                                                    label: t('detail.sec', {
                                                        defaultValue: 'Sec',
                                                    }),
                                                },
                                            ].map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="text-center"
                                                >
                                                    <div className="bg-card text-card-foreground text-2xl md:text-3xl font-bold rounded-lg px-4 py-2 min-w-[60px]">
                                                        {String(
                                                            item.value
                                                        ).padStart(2, '0')}
                                                    </div>
                                                    <p className="text-primary-foreground/60 text-xs mt-1">
                                                        {item.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {course.totalSeats && (
                                            <p className="text-secondary mt-4 text-sm">
                                                <Users className="w-4 h-4 inline mr-1" />
                                                {t('detail.seatsRemaining', {
                                                    defaultValue:
                                                        'Limited seats: {{current}}/{{total}} remaining',
                                                    current:
                                                        course.totalSeats -
                                                        course.enrolledCount,
                                                    total: course.totalSeats,
                                                })}
                                            </p>
                                        )}
                                    </div>
                                )}
                            {course.format === 'recorded' && (
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-primary-foreground/80">
                                        <Video className="w-5 h-5 text-secondary" />
                                        <span>
                                            {course.totalVideoHours}{' '}
                                            {t('detail.videoHours', {
                                                defaultValue: 'hours of video',
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary-foreground/80">
                                        <Play className="w-5 h-5 text-secondary" />
                                        <span>
                                            {course.modulesCount}{' '}
                                            {t('detail.modules', {
                                                defaultValue: 'modules',
                                            })}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 text-primary-foreground/80">
                                    <Clock className="w-5 h-5 text-secondary" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-primary-foreground/80">
                                    <Users className="w-5 h-5 text-secondary" />
                                    <span>
                                        {course.enrolledCount.toLocaleString()}{' '}
                                        {t('detail.enrolled', {
                                            defaultValue: 'enrolled',
                                        })}
                                    </span>
                                </div>
                                <Badge
                                    variant="outline"
                                    className={cn(
                                        'text-sm',
                                        levelColors[course.level]
                                    )}
                                >
                                    <BarChart3 className="w-4 h-4 mr-1" />
                                    {t(
                                        `card.levels.${course.level.toLowerCase()}`,
                                        { defaultValue: course.level }
                                    )}
                                </Badge>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={course.image}
                                    alt={translatedTitle}
                                    className="w-full aspect-video object-cover"
                                />
                                {course.featured && (
                                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-semibold">
                                        {t('bestSeller')}
                                    </Badge>
                                )}
                                <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                                    <div className="w-20 h-20 rounded-full bg-secondary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-cyan">
                                        <Play className="w-10 h-10 text-secondary-foreground fill-current ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
                            <h2 className="font-heading font-bold text-xl text-card-foreground mb-4">
                                {t('detail.instructor', {
                                    defaultValue: 'Your Instructor',
                                })}
                            </h2>
                            <div className="flex items-center gap-4">
                                <img
                                    src={farzadAvatar}
                                    alt={course.instructor.name}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-secondary"
                                />
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-card-foreground">
                                        {course.instructor.name}
                                    </h3>
                                    <p className="text-secondary">
                                        {course.instructor.title}
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    {t('detail.messageFarzad', {
                                        defaultValue: 'Message',
                                    })}
                                </Button>
                            </div>
                        </div>
                        <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
                            <h2 className="font-heading font-bold text-2xl text-card-foreground mb-6">
                                {t('whatYouLearn')}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {course.topics.map((topic, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">
                                            {topic}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
                            <h2 className="font-heading font-bold text-2xl text-card-foreground mb-4">
                                {t('aboutThisCourse')}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {translatedLongDescription}
                            </p>
                        </div>
                        <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
                            <h2 className="font-heading font-bold text-2xl text-card-foreground mb-6">
                                {t('detail.curriculum', {
                                    defaultValue: 'Curriculum Preview',
                                })}
                            </h2>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {course.topics
                                    .slice(0, 4)
                                    .map((topic, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`module-${index}`}
                                        >
                                            <AccordionTrigger className="text-card-foreground hover:text-secondary">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold">
                                                        {index + 1}
                                                    </span>
                                                    {topic}
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pl-11">
                                                {t('detail.moduleContent', {
                                                    defaultValue:
                                                        'This module covers essential concepts and hands-on exercises.',
                                                })}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                            </Accordion>
                        </div>
                        <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
                            <h2 className="font-heading font-bold text-2xl text-card-foreground mb-6">
                                {t('detail.faq', {
                                    defaultValue: 'Frequently Asked Questions',
                                })}
                            </h2>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`faq-${index}`}
                                    >
                                        <AccordionTrigger className="text-card-foreground hover:text-secondary text-left">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-card rounded-xl border-2 border-primary shadow-purple p-6">
                            <div className="text-center mb-6">
                                {course.isFree ? (
                                    <div className="text-4xl font-heading font-bold text-secondary mb-2">
                                        {t('detail.free', {
                                            defaultValue: 'FREE',
                                        })}
                                    </div>
                                ) : (
                                    <>
                                        <div className="text-4xl font-heading font-bold text-primary mb-1">
                                            €{course.price}
                                        </div>
                                        {course.originalPrice && (
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <span className="text-muted-foreground line-through">
                                                    €{course.originalPrice}
                                                </span>
                                                <Badge className="bg-destructive text-destructive-foreground text-xs">
                                                    {Math.round(
                                                        (1 -
                                                            course.price /
                                                                course.originalPrice) *
                                                            100
                                                    )}
                                                    % OFF
                                                </Badge>
                                            </div>
                                        )}
                                    </>
                                )}
                                <p className="text-sm text-muted-foreground">
                                    {course.isFree
                                        ? t('detail.noCardRequired', {
                                              defaultValue:
                                                  'No card required • Start now',
                                          })
                                        : t('oneTimePayment')}
                                </p>
                            </div>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full mb-3 text-lg font-bold"
                            >
                                {course.isFree
                                    ? t('detail.startFreeCourse', {
                                          defaultValue: 'Start Free Course',
                                      })
                                    : t('enrollNow')}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                {t('addToWishlist')}
                            </Button>
                            <div className="mt-6 space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">
                                        {t('duration')}
                                    </span>
                                    <span className="font-semibold text-foreground">
                                        {course.duration}
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">
                                        {t('level')}
                                    </span>
                                    <span className="font-semibold text-foreground">
                                        {t(
                                            `card.levels.${course.level.toLowerCase()}`,
                                            { defaultValue: course.level }
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">
                                        {t('access')}
                                    </span>
                                    <span className="font-semibold text-foreground">
                                        {t('lifetime')}
                                    </span>
                                </div>
                                {course.totalVideoHours && (
                                    <div className="flex justify-between py-2 border-b border-border">
                                        <span className="text-muted-foreground">
                                            {t('detail.videoContent', {
                                                defaultValue: 'Video content',
                                            })}
                                        </span>
                                        <span className="font-semibold text-foreground">
                                            {course.totalVideoHours}h
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 p-4 bg-muted rounded-lg">
                                <h4 className="font-semibold text-foreground mb-3">
                                    {t('includes')}
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    {[
                                        {
                                            icon: Video,
                                            text:
                                                course.format === 'live'
                                                    ? t('liveClasses')
                                                    : t('detail.videoLessons', {
                                                          defaultValue:
                                                              'Video lessons',
                                                      }),
                                        },
                                        { icon: Award, text: t('certificate') },
                                        {
                                            icon: MessageCircle,
                                            text: t('communityAccess'),
                                        },
                                        {
                                            icon: Shield,
                                            text: t('detail.lifetimeUpdates', {
                                                defaultValue:
                                                    'Lifetime updates',
                                            }),
                                        },
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 text-muted-foreground"
                                        >
                                            <item.icon className="w-4 h-4 text-secondary" />
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                <Shield className="w-4 h-4" />
                                {t('detail.securePayment', {
                                    defaultValue: 'Secure payment with Stripe',
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-20" />
        </div>
    );
};

export default CourseDetail;
