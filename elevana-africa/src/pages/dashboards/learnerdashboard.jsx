import   {DashboardLayout} from "@/components/dashboard/dashboardlayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import   Button  from "../../components/button";
import { Progress } from "../../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Users,
  TrendingUp,
  Clock,
  Award,
  ArrowRight,
  Target
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const progressData = [
  { month: "Jan", hours: 20 },
  { month: "Feb", hours: 35 },
  { month: "Mar", hours: 45 },
  { month: "Apr", hours: 55 },
  { month: "May", hours: 70 },
  { month: "Jun", hours: 85 },

];

const courses = [
  { id: 1, title: "Data Science Fundamentals", progress: 65, instructor: "Dr. Sarah Johnson", image: "/placeholder.svg" },
  { id: 2, title: "UI/UX Design Mastery", progress: 40, instructor: "Michael Chen", image: "/placeholder.svg" },
  { id: 3, title: "Digital Marketing Strategy", progress: 80, instructor: "Amara Okonkwo", image: "/placeholder.svg" },
];

const jobMatches = [
  { id: 1, title: "Junior Data Analyst", company: "TechCorp Africa", match: 95, location: "Lagos, Nigeria" },
  { id: 2, title: "UX Designer", company: "Design Studio", match: 88, location: "Nairobi, Kenya" },
  { id: 3, title: "Marketing Coordinator", company: "Growth Partners", match: 82, location: "Cape Town, SA" },
];

const mentors = [
  { id: 1, name: "Dr. Kwame Nkrumah", role: "Senior Data Scientist", avatar: "/placeholder.svg" },
  { id: 2, name: "Fatima Al-Rashid", role: "UX Lead", avatar: "/placeholder.svg" },
  { id: 3, name: "John Mwangi", role: "Marketing Director", avatar: "/placeholder.svg" },
];

function StatCard({ icon: Icon, title, value, change, delay }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-3xl font-bold mt-2">{value}</p>
              {change && (
                <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+{change}% this month</span>
                </div>
              )}
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function LearnerDashboard() {
  return (
    <DashboardLayout role="learner">
      <div className="space-y-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 text-primary-foreground"
        >
          <h1 className="text-3xl font-bold mb-2">Hi Amina 👋</h1>
          <p className="text-lg opacity-90">Ready to continue your learning journey?</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={BookOpen} title="Courses Enrolled" value="12" change={15} delay={0.1} />
          <StatCard icon={Clock} title="Hours Learned" value="85" change={23} delay={0.2} />
          <StatCard icon={Award} title="Certificates" value="5" change={40} delay={0.3} />
          <StatCard icon={Target} title="Profile Completion" value="78%" delay={0.4} />
        </div>

        {/* Learning Progress Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Your monthly learning hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="var(--color-primary)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-primary)", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Continue Learning */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <img src={course.image} alt={course.title} className="h-16 w-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{course.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                        <div className="flex items-center gap-2">
                          <Progress value={course.progress} className="flex-1" />
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Job Matches */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  AI-Powered Job Matches
                </CardTitle>
                <CardDescription>Based on your skills and interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {jobMatches.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">{job.location}</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        {job.match}% Match
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2">
                      View Details
                    </Button>
                  </motion.div>
                ))}
                <Button className="w-full">
                  Explore All Jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Suggested Mentors */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Connect with Mentors
              </CardTitle>
              <CardDescription>Industry experts ready to guide you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg text-center hover:shadow-md transition-all duration-200"
                  >
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarImage src={mentor.avatar} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">{mentor.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{mentor.role}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      Connect
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
