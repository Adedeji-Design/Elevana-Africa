import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import  Button  from "../components/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Briefcase, Shield } from "lucide-react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const roles = [
  {
    id: "learner",
    title: "Learner Dashboard",
    description: "Access courses, track progress, find jobs, and connect with mentors",
    icon: GraduationCap,
    path: "/dashboard/learner",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mentor",
    title: "Mentor Dashboard",
    description: "Manage mentees, schedule sessions, and share resources",
    icon: Users,
    path: "/dashboard/mentor",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "employer",
    title: "Employer Dashboard",
    description: "Post jobs, review candidates, and manage recruitment",
    icon: Briefcase,
    path: "/dashboard/employer",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "admin",
    title: "Admin Dashboard",
    description: "Monitor platform analytics, manage content, and oversee operations",
    icon: Shield,
    path: "/dashboard/admin",
    color: "from-green-500 to-teal-500",
  },
];

export default function DashboardSelector() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a role to explore the dashboard MVP. Each dashboard is tailored to specific user needs.
            </p>
          </motion.div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                    <CardHeader>
                      <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{role.title}</CardTitle>
                      <CardDescription className="text-base">
                        {role.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full" size="lg">
                        <Link to={role.path}>View Dashboard</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              This is an MVP demonstration with mock data. No backend authentication required.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
