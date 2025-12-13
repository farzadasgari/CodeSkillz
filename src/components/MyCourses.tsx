import { Video, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import coursePython from "@/assets/course-python.jpg";
import courseML from "@/assets/course-ml.jpg";
import courseWeb from "@/assets/course-web.jpg";

const MyCourses = () => {
  const { t } = useTranslation();

  const enrolledCourses = [
    {
      id: "python-fundamentals",
      thumbnail: coursePython,
      progress: 65,
      duration: "8 weeks",
      level: "Beginner",
      nextClass: "Oct 25, 2025 at 2:00 PM",
      meetLink: "https://meet.google.com/xyz-abc-def",
      hasActiveSession: true,
    },
    {
      id: "machine-learning-mastery",
      thumbnail: courseML,
      progress: 40,
      duration: "10 weeks",
      level: "Intermediate",
      nextClass: "Oct 27, 2025 at 3:00 PM",
      meetLink: "https://meet.google.com/abc-def-ghi",
      hasActiveSession: true,
    },
    {
      id: "web-development-pro",
      thumbnail: courseWeb,
      progress: 85,
      duration: "12 weeks",
      level: "Beginner",
      nextClass: "Completed",
      meetLink: "",
      hasActiveSession: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">{t('dashboard:title')}</h2>
        <p className="text-muted-foreground">
          {t('dashboard:description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {enrolledCourses.map((course) => {
          const courseTitle = t(`courseData:${course.id}.title`, { defaultValue: course.id });

          return (
            <div
              key={course.id}
              className="bg-card rounded-lg border border-border shadow-sm overflow-hidden group hover:shadow-purple hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={courseTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-heading font-bold text-white mb-1 line-clamp-2">
                    {courseTitle}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{t('dashboard:course.progress')}</span>
                    <span className="text-sm font-bold text-secondary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    {course.duration}
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {t(`courses:card.levels.${course.level.toLowerCase()}`, { defaultValue: course.level })}
                  </span>
                </div>

                {course.hasActiveSession && (
                  <div className="flex items-center gap-2 text-sm flex-wrap">
                    <span className="text-muted-foreground">{t('dashboard:course.nextClass')}:</span>
                    <span className="text-secondary font-medium">{course.nextClass}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {course.hasActiveSession && course.meetLink && (
                    <Button
                      variant="secondary"
                      className="flex-1 gap-2 font-semibold animate-pulse-glow text-sm"
                      asChild
                    >
                      <a href={course.meetLink} target="_blank" rel="noopener noreferrer">
                        <Video className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{t('dashboard:course.joinMeet')}</span>
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm"
                    asChild
                  >
                    <Link to={`/my-courses/${course.id}`}>
                      <BookOpen className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{t('dashboard:course.continueLearning')}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCourses;
