import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BookOpen, TrendingUp, CreditCard, Trophy, Settings, Calendar, HelpCircle } from "lucide-react";
import ProfileOverview from "@/components/ProfileOverview";
import MyCourses from "@/components/MyCourses";
import ProgressSection from "@/components/ProgressSection";
import PaymentsSection from "@/components/PaymentsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProfileSettings from "@/components/ProfileSettings";
import UpcomingClasses from "@/components/UpcomingClasses";

type Section = "courses" | "progress" | "payments" | "achievements" | "settings" | "classes" | "support";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<Section>("courses");
  const { t } = useTranslation('dashboard');

  const menuItems = [
    { id: "courses" as Section, label: t('menu.courses'), shortLabel: t('menu.courses').split(' ')[0], icon: BookOpen },
    { id: "classes" as Section, label: t('menu.classes'), shortLabel: t('menu.classes').split(' ')[0], icon: Calendar },
    { id: "progress" as Section, label: t('menu.progress'), shortLabel: t('menu.progress').split(' ')[0], icon: TrendingUp },
    { id: "payments" as Section, label: t('menu.payments'), shortLabel: t('menu.payments').split(' ')[0], icon: CreditCard },
    { id: "achievements" as Section, label: t('menu.achievements'), shortLabel: t('menu.achievements').split(' ')[0], icon: Trophy },
    { id: "settings" as Section, label: t('menu.settings'), shortLabel: t('menu.settings').split(' ')[0], icon: Settings },
    { id: "support" as Section, label: t('menu.support'), shortLabel: t('menu.support'), icon: HelpCircle },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "courses":
        return <MyCourses />;
      case "classes":
        return <UpcomingClasses />;
      case "progress":
        return <ProgressSection />;
      case "payments":
        return <PaymentsSection />;
      case "achievements":
        return <AchievementsSection />;
      case "settings":
        return <ProfileSettings />;
      case "support":
        return (
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">{t('support.title')}</h2>
            <p className="text-muted-foreground mb-6">{t('support.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:khufarzadasgari@gmail.com" className="text-secondary hover:underline">
                khufarzadasgari@gmail.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a href="/faq" className="text-secondary hover:underline">
                {t('support.visitFaq')}
              </a>
            </div>
          </div>
        );
      default:
        return <MyCourses />;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        <ProfileOverview />

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <nav className="bg-card rounded-lg border border-border shadow-lg overflow-hidden sticky top-24">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all relative group ${
                    activeSection === item.id
                      ? "bg-secondary text-secondary-foreground font-semibold"
                      : "text-foreground hover:bg-muted hover:text-secondary"
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-foreground animate-pulse" />
                  )}
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${activeSection === item.id ? "" : "group-hover:scale-110 transition-transform"}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 pb-24 md:pb-0">
            <div className="animate-fade-in">{renderSection()}</div>
          </main>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-40 pb-safe">
          <div className="grid grid-cols-4 gap-1 py-2 px-2">
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center gap-1 px-1 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "text-secondary bg-secondary/10"
                    : "text-muted-foreground hover:text-secondary hover:bg-muted"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-[10px] font-medium truncate max-w-full">{item.shortLabel}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
