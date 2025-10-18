import { Bell, MessageSquare, Search } from "lucide-react";
import  Button  from "@/components/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes"; // ✅ import your theme hook
import logoWhite from "@/assets/logo/elevana-logo.png"; // white version
import logoBlack from "@/assets/logo/elevanalogo-dark.png"; // black version

export function TopNav() {
  const { theme } = useTheme(); // ✅ get current theme ("light" or "dark")

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-50">
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        {/* Left side: Logo + Search */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={theme === "dark" ? logoWhite : logoBlack}
              alt="Elevana Africa"
              className="h-8 transition-all duration-300"
            />
          </Link>

          <div className="hidden md:flex relative w-64 lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, jobs, people..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Right side: Icons + Avatar dropdown */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Notification icon */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
          </Button>

          {/* Messages icon */}
          <Button variant="ghost" size="icon" className="relative">
            <MessageSquare className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
          </Button>

          {/* Avatar dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 bg-popover">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Switch Role</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
