import { Edit, BookOpen, Trophy, Video, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ProfileOverview = () => {
  // Mock user data - replace with real data from your auth system
  const user = {
    name: "Farzad",
    email: "farzad@example.com",
    tagline: "Ready to code?",
    avatar: "/placeholder.svg",
    coursesEnrolled: 3,
    liveClassesToday: 2,
    achievements: 7,
    pendingAmount: 49.99,
  };

  return (
    <Card className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground border-none shadow-lg overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <Avatar className="w-24 h-24 border-4 border-secondary shadow-lg shadow-secondary/20 ring-4 ring-primary-foreground/10">
            <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-bold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-1">
              Welcome back, <span className="text-secondary">{user.name}</span>!
            </h1>
            <p className="text-xl text-secondary/90 mb-6">{user.tagline}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {/* Quick Stats */}
              <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 rounded-lg backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105">
                <BookOpen className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">{user.coursesEnrolled}</div>
                  <div className="text-xs text-primary-foreground/80">Enrolled</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 rounded-lg backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105">
                <Video className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">{user.liveClassesToday} <span className="text-sm">Today</span></div>
                  <div className="text-xs text-primary-foreground/80">Live Classes</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 rounded-lg backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105">
                <Trophy className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">{user.achievements}/12</div>
                  <div className="text-xs text-primary-foreground/80">Achievements</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 rounded-lg backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105">
                <Wallet className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">€{user.pendingAmount}</div>
                  <div className="text-xs text-primary-foreground/80">Pending</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" size="lg" className="gap-2 animate-pulse hover:animate-none">
                Resume Learning
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground">
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileOverview;
