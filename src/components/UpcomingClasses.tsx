import { Calendar, Clock, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UpcomingClasses = () => {
  const upcomingClasses = [
    {
      id: 1,
      course: "Python Fundamentals",
      topic: "Advanced Data Structures",
      date: "Today",
      time: "8:00 PM",
      status: "live",
      meetLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      course: "Machine Learning Mastery",
      topic: "Neural Networks Deep Dive",
      date: "Today",
      time: "10:00 PM",
      status: "upcoming",
      startsIn: "1h 8m",
      meetLink: "https://meet.google.com/xyz-abcd-efg",
    },
    {
      id: 3,
      course: "Web Development Pro",
      topic: "React Hooks & State Management",
      date: "Tomorrow",
      time: "6:30 PM",
      status: "scheduled",
      meetLink: "https://meet.google.com/lmn-opqr-stu",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Upcoming Classes</h2>
          <p className="text-sm text-muted-foreground mt-1">Never miss a Google Meet session</p>
        </div>
      </div>

      <div className="space-y-4">
        {upcomingClasses.map((classItem) => (
          <Card
            key={classItem.id}
            className={`border-l-4 ${
              classItem.status === "live"
                ? "border-l-secondary bg-secondary/5"
                : "border-l-primary"
            } hover:shadow-lg transition-all`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {classItem.course}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{classItem.topic}</p>
                </div>
                {classItem.status === "live" && (
                  <Badge className="bg-secondary text-secondary-foreground animate-pulse">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-secondary-foreground rounded-full" />
                      LIVE NOW
                    </span>
                  </Badge>
                )}
                {classItem.status === "upcoming" && (
                  <Badge variant="outline" className="border-secondary text-secondary">
                    Starts in {classItem.startsIn}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{classItem.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{classItem.time}</span>
                  </div>
                </div>

                <Button
                  className={
                    classItem.status === "live"
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 animate-pulse"
                      : "bg-primary text-primary-foreground"
                  }
                  onClick={() => window.open(classItem.meetLink, "_blank")}
                >
                  <Video className="w-4 h-4 mr-2" />
                  {classItem.status === "live" ? "Join Now" : "Join Google Meet"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/50 border-dashed">
        <CardContent className="p-6 text-center">
          <Calendar className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-3">
            Sync your classes with Google Calendar to get automatic reminders
          </p>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Add to Google Calendar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingClasses;
