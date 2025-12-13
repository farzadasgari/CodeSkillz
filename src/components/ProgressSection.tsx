import { TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgressSection = () => {
  const overallProgress = 75;
  
  const courseProgress = [
    { name: "Python Programming", progress: 65, color: "bg-primary" },
    { name: "Machine Learning", progress: 40, color: "bg-secondary" },
    { name: "Web Development", progress: 85, color: "bg-accent" },
  ];

  const recentActivities = [
    { activity: "Completed Python Module 2", date: "Oct 20, 2025" },
    { activity: "Attended ML Class", date: "Oct 18, 2025" },
    { activity: "Submitted Web Dev Project", date: "Oct 15, 2025" },
    { activity: "Completed Python Quiz 1", date: "Oct 13, 2025" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Learning Progress</h2>
        <p className="text-muted-foreground">Track your journey across all courses</p>
      </div>

      {/* Overall Progress Card */}
      <Card className="border-border shadow-purple bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary-foreground">
            <TrendingUp className="w-5 h-5" />
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-secondary">{overallProgress}% Complete</span>
              <span className="text-primary-foreground/80">Across 3 Courses</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Course-Specific Progress */}
      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle>Course Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {courseProgress.map((course, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{course.name}</span>
                <span className="text-sm font-bold text-secondary">{course.progress}%</span>
              </div>
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full transition-all ${course.color}`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
          <Button variant="secondary" className="w-full mt-4">
            View Detailed Progress
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{item.activity}</p>
                  <p className="text-sm text-secondary mt-0.5">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressSection;
