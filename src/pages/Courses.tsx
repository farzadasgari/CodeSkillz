import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, X, Filter, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CourseCard from '@/components/CourseCard';
import {
    courses,
    categories,
    levels,
    formats,
    priceFilters,
    durationFilters,
} from '@/data/courses';
import { cn } from '@/lib/utils';

const Courses = () => {
    const { t } = useTranslation(['courses', 'courseData']);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedFormat, setSelectedFormat] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');
    const [selectedDuration, setSelectedDuration] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

    const activeFiltersCount = [
        selectedCategory !== 'All',
        selectedLevel !== 'All',
        selectedFormat !== 'All',
        selectedPrice !== 'All',
        selectedDuration !== 'All',
    ].filter(Boolean).length;

    const clearAllFilters = () => {
        setSelectedCategory('All');
        setSelectedLevel('All');
        setSelectedFormat('All');
        setSelectedPrice('All');
        setSelectedDuration('All');
        setSearchQuery('');
    };

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === 'All' || course.category === selectedCategory;
        const matchesLevel =
            selectedLevel === 'All' || course.level === selectedLevel;
        const matchesFormat =
            selectedFormat === 'All' || course.format === selectedFormat;
        const matchesPrice =
            selectedPrice === 'All' ||
            (selectedPrice === 'free' && course.isFree) ||
            (selectedPrice === 'paid' && !course.isFree);
        const matchesDuration =
            selectedDuration === 'All' ||
            (selectedDuration === '<4' && course.durationWeeks < 4) ||
            (selectedDuration === '4-12' &&
                course.durationWeeks >= 4 &&
                course.durationWeeks <= 12) ||
            (selectedDuration === '12+' && course.durationWeeks > 12);

        return (
            matchesSearch &&
            matchesCategory &&
            matchesLevel &&
            matchesFormat &&
            matchesPrice &&
            matchesDuration
        );
    });

    const activeFilters = [
        selectedCategory !== 'All' && {
            type: 'category',
            value: selectedCategory,
            clear: () => setSelectedCategory('All'),
        },
        selectedLevel !== 'All' && {
            type: 'level',
            value: selectedLevel,
            clear: () => setSelectedLevel('All'),
        },
        selectedFormat !== 'All' && {
            type: 'format',
            value: selectedFormat,
            clear: () => setSelectedFormat('All'),
        },
        selectedPrice !== 'All' && {
            type: 'price',
            value: selectedPrice,
            clear: () => setSelectedPrice('All'),
        },
        selectedDuration !== 'All' && {
            type: 'duration',
            value: selectedDuration,
            clear: () => setSelectedDuration('All'),
        },
    ].filter(Boolean) as { type: string; value: string; clear: () => void }[];

    const getCategoryKey = (category: string) => {
        if (category === 'All') return 'all';
        if (category === 'Python') return 'python';
        if (category === 'Machine Learning') return 'machineLearning';
        return 'webDevelopment';
    };

    return (
        <div className="min-h-screen pb-20 mt-10">
            <section className="relative bg-gradient-hero pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 text-6xl font-mono text-primary-foreground/10 animate-float">
                        {'{'}
                    </div>
                    <div
                        className="absolute top-40 right-20 text-6xl font-mono text-primary-foreground/10 animate-float"
                        style={{ animationDelay: '1s' }}
                    >
                        {'}'}
                    </div>
                    <div
                        className="absolute bottom-20 left-1/4 text-4xl font-mono text-secondary/20 animate-float"
                        style={{ animationDelay: '2s' }}
                    >
                        {'</>'}
                    </div>
                    <div
                        className="absolute top-1/2 right-1/3 text-3xl font-mono text-secondary/20 animate-float"
                        style={{ animationDelay: '0.5s' }}
                    >
                        {'()'}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <span className="text-secondary text-sm font-medium">
                                {t('hero.badge', {
                                    defaultValue: 'Premium Learning Experience',
                                })}
                            </span>
                        </div>

                        <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary-foreground mb-6">
                            {t('hero.title', { defaultValue: 'Learn Coding' })}{' '}
                            <span className="text-secondary">
                                {t('hero.titleHighlight', {
                                    defaultValue: 'Your Way',
                                })}
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4">
                            {t('hero.subtitle', {
                                defaultValue:
                                    'Live classes with Farzad • On-demand recorded courses • Free & Paid',
                            })}
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto mt-8">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <Input
                                type="text"
                                placeholder={t('search', {
                                    defaultValue: 'Search courses...',
                                })}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-4 h-14 text-lg bg-background/95 backdrop-blur-sm border-0 shadow-lg rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-8 relative z-20">
                {/* Filter Bar */}
                <div className="bg-card rounded-xl shadow-lg border border-border p-4 mb-8">
                    {/* Mobile Filter Toggle */}
                    <div className="md:hidden flex items-center justify-between mb-4">
                        <Button
                            variant="outline"
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2"
                        >
                            <Filter className="w-4 h-4" />
                            {t('filters.toggle', { defaultValue: 'Filters' })}
                            {activeFiltersCount > 0 && (
                                <Badge className="bg-secondary text-secondary-foreground ml-1">
                                    {activeFiltersCount}
                                </Badge>
                            )}
                        </Button>

                        {activeFiltersCount > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearAllFilters}
                                className="text-muted-foreground"
                            >
                                {t('filters.clearAll', {
                                    defaultValue: 'Clear all',
                                })}
                            </Button>
                        )}
                    </div>

                    {/* Filter Pills */}
                    <div
                        className={cn(
                            'space-y-4',
                            !showFilters && 'hidden md:block'
                        )}
                    >
                        {/* Format Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                                {t('filters.format', {
                                    defaultValue: 'Format',
                                })}
                                :
                            </span>
                            {formats.map((format) => (
                                <Button
                                    key={format}
                                    variant={
                                        selectedFormat === format
                                            ? 'default'
                                            : 'outline'
                                    }
                                    size="sm"
                                    onClick={() => setSelectedFormat(format)}
                                    className={cn(
                                        'rounded-full text-xs',
                                        selectedFormat === format
                                            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                                            : 'hover:border-secondary'
                                    )}
                                >
                                    {format === 'All'
                                        ? t('filters.all', {
                                              defaultValue: 'All',
                                          })
                                        : t(`card.formats.${format}`, {
                                              defaultValue:
                                                  format.toUpperCase(),
                                          })}
                                </Button>
                            ))}
                        </div>

                        {/* Price Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                                {t('filters.price', { defaultValue: 'Price' })}:
                            </span>
                            {priceFilters.map((price) => (
                                <Button
                                    key={price}
                                    variant={
                                        selectedPrice === price
                                            ? 'default'
                                            : 'outline'
                                    }
                                    size="sm"
                                    onClick={() => setSelectedPrice(price)}
                                    className={cn(
                                        'rounded-full text-xs',
                                        selectedPrice === price
                                            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                                            : 'hover:border-secondary'
                                    )}
                                >
                                    {price === 'All'
                                        ? t('filters.all', {
                                              defaultValue: 'All',
                                          })
                                        : t(`filters.${price}`, {
                                              defaultValue:
                                                  price
                                                      .charAt(0)
                                                      .toUpperCase() +
                                                  price.slice(1),
                                          })}
                                </Button>
                            ))}
                        </div>

                        {/* Level Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                                {t('filters.level', { defaultValue: 'Level' })}:
                            </span>
                            {levels.map((level) => (
                                <Button
                                    key={level}
                                    variant={
                                        selectedLevel === level
                                            ? 'default'
                                            : 'outline'
                                    }
                                    size="sm"
                                    onClick={() => setSelectedLevel(level)}
                                    className={cn(
                                        'rounded-full text-xs',
                                        selectedLevel === level
                                            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                                            : 'hover:border-secondary'
                                    )}
                                >
                                    {level === 'All'
                                        ? t('filters.all', {
                                              defaultValue: 'All',
                                          })
                                        : t(
                                              `card.levels.${level.toLowerCase()}`,
                                              { defaultValue: level }
                                          )}
                                </Button>
                            ))}
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                                {t('filters.topic', { defaultValue: 'Topic' })}:
                            </span>
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={
                                        selectedCategory === category
                                            ? 'default'
                                            : 'outline'
                                    }
                                    size="sm"
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    className={cn(
                                        'rounded-full text-xs',
                                        selectedCategory === category
                                            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                                            : 'hover:border-secondary'
                                    )}
                                >
                                    {t(
                                        `courseData:categories.${getCategoryKey(category)}`,
                                        { defaultValue: category }
                                    )}
                                </Button>
                            ))}
                        </div>

                        {/* Duration Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                                {t('filters.duration', {
                                    defaultValue: 'Duration',
                                })}
                                :
                            </span>
                            {durationFilters.map((duration) => (
                                <Button
                                    key={duration}
                                    variant={
                                        selectedDuration === duration
                                            ? 'default'
                                            : 'outline'
                                    }
                                    size="sm"
                                    onClick={() =>
                                        setSelectedDuration(duration)
                                    }
                                    className={cn(
                                        'rounded-full text-xs',
                                        selectedDuration === duration
                                            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                                            : 'hover:border-secondary'
                                    )}
                                >
                                    {duration === 'All'
                                        ? t('filters.all', {
                                              defaultValue: 'All',
                                          })
                                        : duration === '<4'
                                          ? t('filters.under4weeks', {
                                                defaultValue: '< 4 weeks',
                                            })
                                          : duration === '4-12'
                                            ? t('filters.4to12weeks', {
                                                  defaultValue: '4-12 weeks',
                                              })
                                            : t('filters.over12weeks', {
                                                  defaultValue: '12+ weeks',
                                              })}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Active Filter Chips */}
                    {activeFilters.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
                            <span className="text-sm text-muted-foreground">
                                {t('filters.active', {
                                    defaultValue: 'Active filters',
                                })}
                                :
                            </span>
                            {activeFilters.map((filter, index) => (
                                <Badge
                                    key={index}
                                    className="bg-secondary/10 text-secondary border border-secondary/30 flex items-center gap-1 cursor-pointer hover:bg-secondary/20"
                                    onClick={filter.clear}
                                >
                                    {filter.value}
                                    <X className="w-3 h-3" />
                                </Badge>
                            ))}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearAllFilters}
                                className="text-muted-foreground text-xs hidden md:inline-flex"
                            >
                                {t('filters.clearAll', {
                                    defaultValue: 'Clear all',
                                })}
                            </Button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-muted-foreground">
                        {t('showing', { defaultValue: 'Showing' })}{' '}
                        <span className="font-semibold text-foreground">
                            {filteredCourses.length}
                        </span>{' '}
                        {filteredCourses.length === 1
                            ? t('course', { defaultValue: 'course' })
                            : t('courses', { defaultValue: 'courses' })}
                    </p>
                </div>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card rounded-xl border border-border">
                        <div className="text-6xl mb-4">🔍</div>
                        <p className="text-muted-foreground text-lg mb-4">
                            {t('noCourses', {
                                defaultValue:
                                    'No courses found matching your criteria.',
                            })}
                        </p>
                        <Button onClick={clearAllFilters} variant="outline">
                            {t('filters.clearAll', {
                                defaultValue: 'Clear all filters',
                            })}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
