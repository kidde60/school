import { useState } from "react";
import type { ReactNode } from "react";
import { getCurrentUser, logout } from "../../utils/auth";
import type { UserRole } from "../../types/auth.types";

interface DashboardLayoutProps {
  children: ReactNode;
  onLogout: () => void;
}

const roleLabels: Record<UserRole, string> = {
  head_teacher: "Head Teacher",
  director_of_studies: "Director of Studies",
  finance: "Finance Officer",
  teacher: "Teacher",
  student: "Student",
  parent: "Parent",
};

export default function DashboardLayout({
  children,
  onLogout,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    onLogout();
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="bg-linear-to-r from-blue-900 to-blue-800 shadow-lg sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-white hover:bg-blue-700 p-2 rounded-lg transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="ml-4 flex items-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="ml-3 text-white font-bold text-xl hidden md:block">
                  Dangotech SMS
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="text-white hover:bg-blue-700 p-2 rounded-lg relative transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="text-right hidden md:block">
                  <div className="text-white font-semibold text-sm">
                    {user.name}
                  </div>
                  <div className="text-blue-200 text-xs">
                    {roleLabels[user.role]}
                  </div>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-900">
                  {user.name.charAt(0)}
                </div>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-blue-700 p-2 rounded-lg transition"
                  title="Logout"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-4rem)] w-full">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto">
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                  Menu
                </h3>
              </div>
              {/* Sidebar menu items will go here */}
              <nav className="space-y-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-blue-700 bg-blue-50 border-l-4 border-blue-600 font-semibold"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </a>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
