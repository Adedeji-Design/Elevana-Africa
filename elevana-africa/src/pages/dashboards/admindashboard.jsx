import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import  Button  from "@/components/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Briefcase,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Activity,
  DollarSign
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const platformGrowthData = [
  { month: "Jan", users: 1200, courses: 45, jobs: 120 },
  { month: "Feb", users: 1800, courses: 52, jobs: 145 },
  { month: "Mar", users: 2400, courses: 68, jobs: 178 },
  { month: "Apr", users: 3200, courses: 75, jobs: 210 },
  { month: "May", users: 4100, courses: 90, jobs: 245 },
  { month: "Jun", users: 5500, courses: 102, jobs: 289 },
];

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 68000 },
  { month: "Apr", revenue: 75000 },
  { month: "May", revenue: 90000 },
  { month: "Jun", revenue: 102000 },
];

const supportTickets = [
  { id: 1, user: "Sarah Ahmed", issue: "Course access problem", priority: "high", status: "open", time: "2 hours ago" },
  { id: 2, user: "James Obi", issue: "Payment not reflected", priority: "urgent", status: "open", time: "30 mins ago" },
  { id: 3, user: "Fatima Hassan", issue: "Profile update issue", priority: "medium", status: "in-progress", time: "5 hours ago" },
  { id: 4, user: "David Kimani", issue: "Certificate download", priority: "low", status: "resolved", time: "1 day ago" },
];

const recentContent = [
  { id: 1, title: "Advanced Python Programming", author: "Dr. Jane Smith", type: "Course", status: "pending", date: "Today" },
  { id: 2, title: "Senior DevOps Engineer", author: "TechCorp", type: "Job", status: "approved", date: "Yesterday" },
  { id: 3, title: "UI/UX Design Principles", author: "Michael Chen", type: "Course", status: "approved", date: "2 days ago" },
];

// 💡 Converted StatCard from TSX to JS
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

const getPriorityColor = (priority) => {
  switch (priority) {
    case "urgent": return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    case "high": return "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300";
    case "medium": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    case "low": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "open": return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    case "in-progress": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    case "resolved": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    default: return "bg-muted text-muted-foreground";
  }
};

// 💡 Full Admin Dashboard in JSX
export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 text-primary-foreground"
        >
          <h1 className="text-3xl font-bold mb-2">Platform Overview </h1>
          <p className="text-lg opacity-90">Monitor and manage Elevana Africa's growth</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} title="Total Users" value="5.5K" change={35} delay={0.1} />
          <StatCard icon={BookOpen} title="Active Courses" value="102" change={13} delay={0.2} />
          <StatCard icon={Briefcase} title="Job Postings" value="289" change={18} delay={0.3} />
          <StatCard icon={DollarSign} title="Monthly Revenue" value="$102K" change={28} delay={0.4} />
        </div>

        {/* Platform Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Platform Growth Metrics</CardTitle>
              <CardDescription>User acquisition, course creation, and job postings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={platformGrowthData}>
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
                  <Line type="monotone" dataKey="users" stroke="var(--color-primary)" strokeWidth={3} name="Users" />
                  <Line type="monotone" dataKey="courses" stroke="var(--color-accent)" strokeWidth={3} name="Courses" />
                  <Line type="monotone" dataKey="jobs" stroke="#10b981" strokeWidth={3} name="Jobs" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Revenue and System Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trend */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue in USD</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
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
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--color-primary)"
                      fill="var(--color-primary)"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* System Health */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  System Health
                </CardTitle>
                <CardDescription>Platform performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">API Status</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      Operational
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Database</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      Healthy
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <span className="font-medium">Storage</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                      85% Used
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">CDN</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      Fast
                    </Badge>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Uptime (30 days)</span>
                    <span className="font-semibold">99.98%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg Response Time</span>
                    <span className="font-semibold">124ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Support Tickets */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Support Tickets
              </CardTitle>
              <CardDescription>Recent user support requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {supportTickets.map((ticket, index) => (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">{ticket.issue}</h4>
                      <p className="text-sm text-muted-foreground mt-1">From: {ticket.user}</p>
                      <p className="text-xs text-muted-foreground mt-1">{ticket.time}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                      <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm">Respond</Button>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Recent Content</CardTitle>
              <CardDescription>Latest courses and job postings awaiting review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentContent.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{content.title}</h4>
                        <Badge variant="outline">{content.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        By {content.author} • {content.date}
                      </p>
                    </div>
                    <Badge
                      className={
                        content.status === "approved"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      }
                    >
                      {content.status}
                    </Badge>
                  </div>
                  {content.status === "pending" && (
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">Review</Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  )}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
