import "./App.css";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import NotFound from "./pages/pagenotfound";
import LearnerDashboard from "@/pages/dashboards/learnerdashboard";
import MentorDashboard from "@/pages/dashboards/mentordashboard";
import EmployerDashboard from "@/pages/dashboards/employerdashboard";
import AdminDashboard from "@/pages/dashboards/admindashboard";
import DashboardSelector from "@/pages/dashboardselection";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboards" element={<DashboardSelector />} />
        <Route path="/dashboard/learner" element={<LearnerDashboard />} />
        <Route path="/dashboard/mentor" element={<MentorDashboard />} />
        <Route path="/dashboard/employer" element={<EmployerDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>

  
);

export default App;
