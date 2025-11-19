import { useState, useEffect, type JSX } from "react";
import Login from "./pages/Login";
import DashboardLayout from "./components/Layout/DashboardLayout";
import { getCurrentUser, isAuthenticated } from "./utils/auth";
import type { UserRole } from "./types/auth.types";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import StudentPortal from "./pages/dashboards/StudentPortal";
import ParentPortal from "./pages/dashboards/ParentPortal";
import FinanceDashboard from "./pages/dashboards/FinanceDashboard";
import HeadTeacherDashboard from "./pages/dashboards/HeadTeacherDashboard";
import DOSDashboard from "./pages/dashboards/DOSDashboard";

// Placeholder dashboards - will be implemented
const dashboards: Record<UserRole, () => JSX.Element> = {
  head_teacher: () => <HeadTeacherDashboard />,
  director_of_studies: () => <DOSDashboard />,
  finance: () => <FinanceDashboard />,
  teacher: () => <TeacherDashboard />,
  student: () => <StudentPortal />,
  parent: () => <ParentPortal />,
};

function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());
  const user = getCurrentUser();

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  if (!authenticated || !user) {
    return <Login onLogin={handleLogin} />;
  }

  const DashboardComponent = dashboards[user.role];

  return (
    <DashboardLayout onLogout={handleLogout}>
      <DashboardComponent />
    </DashboardLayout>
  );
}

export default App;
