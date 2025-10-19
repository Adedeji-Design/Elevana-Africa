import { DashboardLayout } from "@/components/dashboard/dashboardlayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import   Button  from "@/components/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  Clock,
  TrendingUp,
  Star,
  MessageSquare,
  Video
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sessionData = [
  { month: "Jan", sessions: 12 },
  { month: "Feb", sessions: 15 },
  { month: "Mar", sessions: 18 },
  { month: "Apr", sessions: 22 },
  { month: "May", sessions: 20 },
  { month: "Jun", sessions: 25 },
];

const mentees = [
  { id: 1, name: "Sarah Ahmed", course: "Data Science", progress: 75, avatar: "/placeholder.svg", lastSession: "2 days ago" },
  { id: 2, name: "James Obi", course: "Web Development", progress: 60, avatar: "/placeholder.svg", lastSession: "5 days ago" },
  { id: 3, name: "Fatima Hassan", course: "Digital Marketing", progress: 85, avatar: "/placeholder.svg", lastSession: "1 day ago" },
  { id: 4, name: "David Kimani", course: "UI/UX Design", progress: 50, avatar: "/placeholder.svg", lastSession: "3 days ago" },
];

const upcomingSessions = [
  { id: 1, mentee: "Sarah Ahmed", time: "Today, 2:00 PM", topic: "Machine Learning Basics", type: "video" },
  { id: 2, mentee: "David Kimani", time: "Tomorrow, 10:00 AM", topic: "Design Thinking Workshop", type: "video" },
  { id: 3, mentee: "Fatima Hassan", time: "Tomorrow, 3:00 PM", topic: "SEO Strategy Review", type: "chat" },
];

const StatCard = ({ icon: Icon, title, value, change, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
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

export default function MentorDashboard() {
  return (
    <DashboardLayout role="mentor">
      <div className="space-y-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 text-primary-foreground"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Kwame 👋</h1>
          <p className="text-lg opacity-90">You have 3 sessions scheduled today</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} title="Active Mentees" value="12" change={8} delay={0.1} />
          <StatCard icon={Calendar} title="Sessions This Month" value="25" change={12} delay={0.2} />
          <StatCard icon={Star} title="Avg. Rating" value="4.8" delay={0.3} />
          <StatCard icon={Clock} title="Hours Mentored" value="156" change={18} delay={0.4} />
        </div>

        {/* Session Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Activity</CardTitle>
              <CardDescription>Monthly sessions completed</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sessionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "var(--color-card)", 
                      border: "2px solid var(--color-border)",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="sessions" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mentee Progress */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Mentee Progress</CardTitle>
                <CardDescription>Track your mentees' learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mentees.map((mentee, index) => (
                  <motion.div
                    key={mentee.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <Avatar>
                        <AvatarImage src={mentee.avatar} />
                        <AvatarFallback>
                          {mentee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{mentee.name}</h4>
                        <p className="text-sm text-muted-foreground">{mentee.course}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {mentee.lastSession}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={mentee.progress} className="flex-1" />
                      <span className="text-sm font-medium">{mentee.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Sessions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>Your scheduled mentorship sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{session.topic}</h4>
                        <p className="text-sm text-muted-foreground">with {session.mentee}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{session.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {session.type === "video" ? (
                          <Video className="h-5 w-5 text-primary" />
                        ) : (
                          <MessageSquare className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3">
                      Join Session
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-20">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Session
                </Button>
                <Button variant="outline" className="h-20">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Message Mentees
                </Button>
                <Button variant="outline" className="h-20">
                  <Star className="mr-2 h-5 w-5" />
                  Share Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
