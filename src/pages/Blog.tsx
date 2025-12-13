import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { blogPosts, categories } from '@/data/blogPosts';
import BlogCard from '@/components/BlogCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
    const { t } = useTranslation(['blog', 'blogData']);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    const filteredPosts = useMemo(() => {
        return regularPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === 'All' ||
                post.category === selectedCategory;
            const matchesSearch =
                searchQuery === '' ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                post.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery, regularPosts]);

    const popularPosts = blogPosts.slice(0, 3);

    return (
        <div className="min-h-screen bg-background mt-10">
            {/* Hero Section */}
            <section className="relative bg-gradient-hero pt-20 pb-20 px-4 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 text-secondary animate-pulse">
                        {'<code>'}
                    </div>
                    <div className="absolute bottom-20 right-20 text-secondary animate-pulse">
                        {'</code>'}
                    </div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                                {t('title')}{' '}
                                <span className="text-secondary">
                                    {t('titleHighlight')}
                                </span>
                            </h1>
                            <p className="text-lg text-primary-foreground/90 mb-8">
                                {t('description')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Button variant="secondary" size="lg" asChild>
                                    <a href="#posts">{t('browseAllPosts')}</a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    <a href="#newsletter">
                                        {t('signUpForUpdates')}
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Featured Post Card */}
                        {featuredPost && (
                            <Link to={`/blog/${featuredPost.id}`}>
                                <div className="group bg-card rounded-lg overflow-hidden shadow-2xl hover:shadow-cyan transition-all duration-300 border-2 border-secondary/50 hover:border-secondary">
                                    <img
                                        src={featuredPost.image}
                                        alt={t(
                                            `blogData:${featuredPost.id}.title`,
                                            { defaultValue: featuredPost.title }
                                        )}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <Badge className="mb-3 bg-secondary text-secondary-foreground">
                                            {t('featured')}
                                        </Badge>
                                        <h3 className="text-2xl font-heading font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                                            {t(
                                                `blogData:${featuredPost.id}.title`,
                                                {
                                                    defaultValue:
                                                        featuredPost.title,
                                                }
                                            )}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {t(
                                                `blogData:${featuredPost.id}.excerpt`,
                                                {
                                                    defaultValue:
                                                        featuredPost.excerpt,
                                                }
                                            )}
                                        </p>
                                        <Button variant="secondary">
                                            {t('readNow')}
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section id="posts" className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar (Desktop) / Top Filters (Mobile) */}
                        <aside className="lg:col-span-1">
                            <div className="bg-card rounded-lg p-6 shadow-md border border-border sticky top-24">
                                {/* Search */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-heading font-bold text-card-foreground mb-3">
                                        {t('search')}
                                    </h3>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            type="text"
                                            placeholder={t(
                                                'searchPlaceholder',
                                                {
                                                    defaultValue:
                                                        'Search posts...',
                                                }
                                            )}
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                {/* Categories */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-heading font-bold text-card-foreground mb-3">
                                        {t('categories')}
                                    </h3>
                                    <div className="flex flex-col gap-2">
                                        {categories.map((category) => {
                                            const categoryKey =
                                                category === 'All'
                                                    ? 'all'
                                                    : category ===
                                                        'Class Updates'
                                                      ? 'classUpdates'
                                                      : category ===
                                                          'Payment Info'
                                                        ? 'paymentInfo'
                                                        : category ===
                                                            'Coding Tutorials'
                                                          ? 'codingTutorials'
                                                          : category ===
                                                              'Research Insights'
                                                            ? 'researchInsights'
                                                            : category ===
                                                                'Announcements'
                                                              ? 'announcements'
                                                              : 'all';

                                            return (
                                                <Button
                                                    key={category}
                                                    variant={
                                                        selectedCategory ===
                                                        category
                                                            ? 'default'
                                                            : 'ghost'
                                                    }
                                                    className="justify-start"
                                                    onClick={() =>
                                                        setSelectedCategory(
                                                            category
                                                        )
                                                    }
                                                >
                                                    {t(
                                                        `blogData:categories.${categoryKey}`,
                                                        {
                                                            defaultValue:
                                                                category,
                                                        }
                                                    )}
                                                </Button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Popular Posts */}
                                <div>
                                    <h3 className="text-lg font-heading font-bold text-card-foreground mb-3">
                                        {t('popularPosts')}
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                        {popularPosts.map((post) => (
                                            <Link
                                                key={post.id}
                                                to={`/blog/${post.id}`}
                                                className="group flex gap-3 hover:bg-accent/10 p-2 rounded-lg transition-colors"
                                            >
                                                <img
                                                    src={post.image}
                                                    alt={t(
                                                        `blogData:${post.id}.title`,
                                                        {
                                                            defaultValue:
                                                                post.title,
                                                        }
                                                    )}
                                                    className="w-16 h-16 rounded object-cover"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                        {t(
                                                            `blogData:${post.id}.title`,
                                                            {
                                                                defaultValue:
                                                                    post.title,
                                                            }
                                                        )}
                                                    </p>
                                                    <p className="text-xs text-secondary mt-1">
                                                        {post.date}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Course Promo */}
                                <div className="mt-6 bg-gradient-card rounded-lg p-6 text-center border-2 border-secondary/50">
                                    <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">
                                        {t('readyToStart')}
                                    </h3>
                                    <p className="text-sm text-primary-foreground/90 mb-4">
                                        {t('joinStudents')}
                                    </p>
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                        asChild
                                    >
                                        <Link to="/courses">
                                            {t('exploreCourses')}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </aside>

                        {/* Posts Grid */}
                        <div className="lg:col-span-3">
                            <div className="mb-6">
                                <h2 className="text-2xl font-heading font-bold text-foreground">
                                    {selectedCategory === 'All'
                                        ? t('allPosts')
                                        : (() => {
                                              const categoryKey =
                                                  selectedCategory ===
                                                  'Class Updates'
                                                      ? 'classUpdates'
                                                      : selectedCategory ===
                                                          'Payment Info'
                                                        ? 'paymentInfo'
                                                        : selectedCategory ===
                                                            'Coding Tutorials'
                                                          ? 'codingTutorials'
                                                          : selectedCategory ===
                                                              'Research Insights'
                                                            ? 'researchInsights'
                                                            : selectedCategory ===
                                                                'Announcements'
                                                              ? 'announcements'
                                                              : 'all';
                                              return t(
                                                  `blogData:categories.${categoryKey}`,
                                                  {
                                                      defaultValue:
                                                          selectedCategory,
                                                  }
                                              );
                                          })()}
                                    <span className="text-muted-foreground text-lg ml-2">
                                        ({filteredPosts.length})
                                    </span>
                                </h2>
                            </div>

                            {filteredPosts.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredPosts.map((post) => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-xl text-muted-foreground">
                                        {t('noPostsFound')}
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-4"
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedCategory('All');
                                        }}
                                    >
                                        {t('clearFilters')}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <div id="newsletter">
                <NewsletterSignup />
            </div>
        </div>
    );
};

export default Blog;
