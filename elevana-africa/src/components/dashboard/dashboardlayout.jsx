import  { TopNav }  from "./topnav";
import { Sidebar } from "./sidebar";

export const DashboardLayout = ({ children, role }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <div className="flex">
        <Sidebar role={role} />
        <main className="flex-1 p-6 md:p-8 ml-0 md:ml-64 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};
