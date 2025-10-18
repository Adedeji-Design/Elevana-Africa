import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Briefcase,
  Users,
  MessageCircle,
  Settings,
  Award,
  Calendar,
  BarChart3,
  FileText,
  Home
} from "lucide-react";
import { cn } from "@/components/libs/utils";

const menuItems = {
  learner: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/learner" },
    { icon: BookOpen, label: "My Courses", path: "/dashboard/learner/courses" },
    { icon: Briefcase, label: "Job Matches", path: "/dashboard/learner/jobs" },
    { icon: Users, label: "Connections", path: "/dashboard/learner/connections" },
    { icon: MessageCircle, label: "Community", path: "/dashboard/learner/community" },
    { icon: Award, label: "Achievements", path: "/dashboard/learner/achievements" },
  ],
  mentor: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/mentor" },
    { icon: Users, label: "My Mentees", path: "/dashboard/mentor/mentees" },
    { icon: Calendar, label: "Sessions", path: "/dashboard/mentor/sessions" },
    { icon: FileText, label: "Resources", path: "/dashboard/mentor/resources" },
    { icon: MessageCircle, label: "Messages", path: "/dashboard/mentor/messages" },
  ],
  employer: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/employer" },
    { icon: Briefcase, label: "Job Posts", path: "/dashboard/employer/jobs" },
    { icon: Users, label: "Candidates", path: "/dashboard/employer/candidates" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/employer/analytics" },
    { icon: Settings, label: "Company", path: "/dashboard/employer/company" },
  ],
  admin: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/admin" },
    { icon: Users, label: "Users", path: "/dashboard/admin/users" },
    { icon: BookOpen, label: "Content", path: "/dashboard/admin/content" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/admin/analytics" },
    { icon: MessageCircle, label: "Support", path: "/dashboard/admin/support" },
    { icon: Settings, label: "Settings", path: "/dashboard/admin/settings" },
  ],
};

export const Sidebar = ({ role }) => {
  const location = useLocation();
  const items = menuItems[role] || [];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card hidden md:block flex flex-col">
      <nav className="p-4 space-y-2 flex-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <Home className="h-5 w-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
    </aside>
  );
};
