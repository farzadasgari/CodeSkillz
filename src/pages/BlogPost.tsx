import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useTranslation(['blog', 'blogData']);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3);

  const translatedTitle = t(`blogData:${post.id}.title`, { defaultValue: post.title });
  const translatedExcerpt = t(`blogData:${post.id}.excerpt`, { defaultValue: post.excerpt });
  const translatedCategory = t(`blogData:${post.id}.category`, { defaultValue: post.category });

  return (
    <div className="min-h-screen bg-background mt-10">
      <div className="bg-gradient-hero pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button variant="outline" className="mb-6 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToBlog')}
            </Link>
          </Button>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-secondary text-secondary-foreground">{translatedCategory}</Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-primary-foreground border-primary-foreground">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 border-b-4 border-secondary pb-4">
            {translatedTitle}
          </h1>

          <div className="flex flex-wrap gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-secondary" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 -mt-8">
        <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-secondary/30">
          <img src={post.image} alt={translatedTitle} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
      </div>

      <article className="container mx-auto max-w-4xl px-4 py-16">
        <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border border-border">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg text-foreground italic">{translatedExcerpt}</p>
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground whitespace-pre-line leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h2 key={index} className="text-3xl font-heading font-bold text-primary mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-2xl font-heading font-bold text-primary mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={index} className="text-xl font-heading font-semibold text-foreground mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                return (
                  <p key={index} className="text-foreground mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {post.category === "Class Updates" && (
            <div className="mt-12 bg-secondary/10 border-2 border-secondary rounded-lg p-6 text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {t('readyToJoinClass')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('accessDashboardText')}
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/dashboard">{t('goToDashboard')}</Link>
              </Button>
            </div>
          )}

          {(post.category === "Coding Tutorials" || post.category === "Research Insights") && (
            <div className="mt-12 bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {t('wantToLearnMore')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('checkCoursesText')}
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/courses">{t('exploreCourses')}</Link>
              </Button>
            </div>
          )}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="container mx-auto max-w-6xl px-4 pb-16">
          <Separator className="mb-12" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            {t('relatedPosts')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
