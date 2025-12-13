import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BlogPost } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { t, i18n } = useTranslation(['blog', 'blogData']);
  const isRTL = i18n.language === 'fa';
  
  // Get translated blog data
  const translatedTitle = t(`blogData:${post.id}.title`, { defaultValue: post.title });
  const translatedExcerpt = t(`blogData:${post.id}.excerpt`, { defaultValue: post.excerpt });
  const translatedCategory = t(`blogData:${post.id}.category`, { defaultValue: post.category });
  
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img
            src={post.image}
            alt={translatedTitle}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <Badge className="absolute top-3 start-3 bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1">
            {translatedCategory}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span className="text-secondary font-medium">{post.date}</span>
          </div>

          <h3 className="text-base font-heading font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 h-12">
            {translatedTitle}
          </h3>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2 h-10">
            {translatedExcerpt}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex gap-1 overflow-hidden">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs text-secondary/80 bg-secondary/10 px-2 py-0.5 rounded-full truncate max-w-[70px]">
                  {tag}
                </span>
              ))}
            </div>
            <span className={`text-secondary font-semibold text-sm transition-transform inline-flex items-center gap-1 whitespace-nowrap ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
              {t('readMore')} <span className={isRTL ? 'rotate-180 inline-block' : ''}>→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
