import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Clock,
    BarChart3,
    Users,
    Play,
    Calendar,
    Video,
    Wifi,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/data/courses';
import { cn } from '@/lib/utils';

interface CourseCardProps extends Course {}

const CourseCard = ({
    id,
    title,
    description,
    image,
    duration,
    level,
    price,
    originalPrice,
    isFree,
    featured,
    format,
    enrolledCount,
    totalSeats,
    nextLiveSession,
}: CourseCardProps) => {
    const { t } = useTranslation(['courses', 'courseData']);

    // Get translated content
    const translatedTitle = t(`courseData:${id}.title`, {
        defaultValue: title,
    });
    const translatedDescription = t(`courseData:${id}.description`, {
        defaultValue: description,
    });

    const levelColors = {
        Beginner: 'bg-green-500/10 text-green-500 border-green-500/30',
        Intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
        Advanced: 'bg-secondary/10 text-secondary border-secondary/30',
    };

    const formatConfig = {
        live: {
            label: t('card.formats.live', { defaultValue: 'LIVE' }),
            icon: Wifi,
            className: 'bg-secondary text-secondary-foreground animate-pulse',
        },
        recorded: {
            label: t('card.formats.recorded', { defaultValue: 'RECORDED' }),
            icon: Video,
            className: 'bg-primary text-primary-foreground',
        },
        hybrid: {
            label: t('card.formats.hybrid', { defaultValue: 'HYBRID' }),
            icon: Play,
            className:
                'bg-gradient-to-r from-secondary to-primary text-primary-foreground',
        },
    };

    const formatInfo = formatConfig[format];
    const FormatIcon = formatInfo.icon;

    // Calculate countdown for live sessions
    const getCountdown = () => {
        if (!nextLiveSession) return null;
        const now = new Date();
        const sessionDate = new Date(nextLiveSession);
        const diff = sessionDate.getTime() - now.getTime();

        if (diff <= 0) return null;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) return `${days}d ${hours}h`;
        if (hours > 0) return `${hours}h ${minutes}m`;
        return `${minutes}m`;
    };

    const countdown = getCountdown();

    return (
        <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-cyan hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={translatedTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Format Badge - Top Left */}
                <Badge
                    className={cn(
                        'absolute top-3 left-3 flex items-center gap-1.5 font-bold text-xs',
                        formatInfo.className
                    )}
                >
                    <FormatIcon className="w-3 h-3" />
                    {formatInfo.label}
                </Badge>

                {/* Price Badge - Top Right */}
                <div className="absolute top-3 right-3">
                    {isFree ? (
                        <Badge className="bg-secondary text-secondary-foreground font-bold text-sm px-3 py-1">
                            {t('card.free', { defaultValue: 'FREE' })}
                        </Badge>
                    ) : (
                        <Badge className="bg-card/90 backdrop-blur-sm text-card-foreground font-bold text-sm px-3 py-1 border border-border">
                            {originalPrice && (
                                <span className="line-through text-muted-foreground mr-1.5 text-xs">
                                    €{originalPrice}
                                </span>
                            )}
                            €{price}
                        </Badge>
                    )}
                </div>

                {/* Featured Badge */}
                {featured && (
                    <Badge className="absolute bottom-3 left-3 bg-secondary text-secondary-foreground font-semibold">
                        {t('bestSeller')}
                    </Badge>
                )}

                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center shadow-cyan">
                        <Play className="w-8 h-8 text-secondary-foreground fill-current ml-1" />
                    </div>
                </div>

                {/* Floating brackets on hover */}
                <span className="absolute top-1/2 left-4 -translate-y-1/2 text-4xl font-mono text-secondary/0 group-hover:text-secondary/60 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                    {'{'}
                </span>
                <span className="absolute top-1/2 right-4 -translate-y-1/2 text-4xl font-mono text-secondary/0 group-hover:text-secondary/60 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    {'}'}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col">
                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-card-foreground mb-2 line-clamp-2 h-14 group-hover:text-secondary transition-colors">
                    {translatedTitle}
                </h3>

                {/* Instructor */}
                <p className="text-secondary text-sm mb-2">
                    {t('card.withInstructor', { defaultValue: 'with Farzad' })}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2 h-10">
                    {translatedDescription}
                </p>

                {/* Info Row */}
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                    {format === 'live' && countdown && (
                        <div className="flex items-center gap-1.5 text-secondary">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="font-medium">
                                {t('card.nextIn', { defaultValue: 'Next in' })}{' '}
                                {countdown}
                            </span>
                        </div>
                    )}

                    {format === 'recorded' && (
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Play className="w-3.5 h-3.5" />
                            <span>
                                {t('card.onDemand', {
                                    defaultValue: 'On-demand',
                                })}
                            </span>
                        </div>
                    )}

                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{duration}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Users className="w-3.5 h-3.5" />
                        <span>{enrolledCount.toLocaleString()}</span>
                    </div>
                </div>

                {/* Level Badge */}
                <div className="flex items-center mb-4">
                    <Badge
                        variant="outline"
                        className={cn('text-xs', levelColors[level])}
                    >
                        <BarChart3 className="w-3 h-3 mr-1" />
                        {t(`card.levels.${level.toLowerCase()}`, {
                            defaultValue: level,
                        })}
                    </Badge>
                </div>

                {/* CTA Button */}
                <Link to={`/courses/${id}`}>
                    <Button
                        className={cn(
                            'w-full font-semibold transition-all duration-300',
                            isFree
                                ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                                : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        )}
                    >
                        {isFree
                            ? t('card.startFree', {
                                  defaultValue: 'Start Free',
                              })
                            : t('card.enrollFor', {
                                  price,
                                  defaultValue: `Enroll for €${price}`,
                              })}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
