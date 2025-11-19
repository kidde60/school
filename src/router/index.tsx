import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import DashboardLayout from "../components/Layout/DashboardLayout";
import TeacherDashboard from "../pages/dashboards/TeacherDashboard";
import StudentPortal from "../pages/dashboards/StudentPortal";
import ParentPortal from "../pages/dashboards/ParentPortal";
import FinanceDashboard from "../pages/dashboards/FinanceDashboard";
import HeadTeacherDashboard from "../pages/dashboards/HeadTeacherDashboard";
import DOSDashboard from "../pages/dashboards/DOSDashboard";

import StudentsList from "../pages/students/StudentsList";
import TeachersList from "../pages/teachers/TeachersList";
import ClassesList from "../pages/classes/ClassesList";
import AssignmentsList from "../pages/assignments/AssignmentsList";
import ExamsList from "../pages/exams/ExamsList";
import AttendanceList from "../pages/attendance/AttendanceList";
import FeeManagement from "../pages/finance/FeeManagement";
import AcademicReports from "../pages/reports/AcademicReports";
import ProfileSettings from "../pages/settings/ProfileSettings";
import { isAuthenticated, getCurrentUser } from "../utils/auth";
import type { UserRole } from "../types/auth.types";
import StudentProfile from "../pages/students/StudentProfile";
import PaymentHistory from "../pages/finance/PaymentHistory";
import BudgetManagement from "../pages/finance/BudgetManagement";
import TeacherProfile from "../pages/teachers/TeacherProfile";
import ClassDetails from "../pages/classes/ClassDetails";
import AssignmentDetails from "../pages/assignments/AssignmentDetails";
import ExamDetails from "../pages/exams/ExamDetails";
import AttendanceReport from "../pages/attendance/AttendanceReport";
import FinancialReports from "../pages/reports/FinancialReports";
import AttendanceReports from "../pages/reports/AttendanceReports";
import SystemSettings from "../pages/settings/SystemSettings";
import ParentChildren from "../pages/parent/ParentChildren";
import ParentFees from "../pages/parent/ParentFees";

// Protected Route wrapper
const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}) => {
  const authenticated = isAuthenticated();
  const user = getCurrentUser();

  if (!authenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};

// Dashboard routes by role
const dashboardRoutes: Record<UserRole, string> = {
  head_teacher: "/head-teacher",
  director_of_studies: "/director-of-studies",
  finance: "/finance",
  teacher: "/teacher",
  student: "/student",
  parent: "/parent",
};

export const getDashboardRoute = () => {
  const user = getCurrentUser();
  return user ? dashboardRoutes[user.role] : "/login";
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to={getDashboardRoute()} replace />,
  },

  // Head Teacher Routes
  {
    path: "/head-teacher",
    element: (
      <ProtectedRoute allowedRoles={["head_teacher"]}>
        <HeadTeacherDashboard />
      </ProtectedRoute>
    ),
  },

  // Director of Studies Routes
  {
    path: "/director-of-studies",
    element: (
      <ProtectedRoute allowedRoles={["director_of_studies"]}>
        <DOSDashboard />
      </ProtectedRoute>
    ),
  },

  // Finance Routes
  {
    path: "/finance",
    element: (
      <ProtectedRoute allowedRoles={["finance"]}>
        <FinanceDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/finance/fees",
    element: (
      <ProtectedRoute allowedRoles={["finance", "head_teacher"]}>
        <FeeManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: "/finance/payments",
    element: (
      <ProtectedRoute allowedRoles={["finance", "head_teacher"]}>
        <PaymentHistory />
      </ProtectedRoute>
    ),
  },
  {
    path: "/finance/budget",
    element: (
      <ProtectedRoute allowedRoles={["finance", "head_teacher"]}>
        <BudgetManagement />
      </ProtectedRoute>
    ),
  },

  // Teacher Routes
  {
    path: "/teacher",
    element: (
      <ProtectedRoute allowedRoles={["teacher"]}>
        <TeacherDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/teachers",
    element: (
      <ProtectedRoute
        allowedRoles={["head_teacher", "director_of_studies", "teacher"]}
      >
        <TeachersList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/teachers/:id",
    element: (
      <ProtectedRoute
        allowedRoles={["head_teacher", "director_of_studies", "teacher"]}
      >
        <TeacherProfile />
      </ProtectedRoute>
    ),
  },

  // Student Routes
  {
    path: "/student",
    element: (
      <ProtectedRoute allowedRoles={["student"]}>
        <StudentPortal />
      </ProtectedRoute>
    ),
  },
  {
    path: "/students",
    element: (
      <ProtectedRoute
        allowedRoles={[
          "head_teacher",
          "director_of_studies",
          "teacher",
          "finance",
        ]}
      >
        <StudentsList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/students/:id",
    element: (
      <ProtectedRoute
        allowedRoles={[
          "head_teacher",
          "director_of_studies",
          "teacher",
          "finance",
          "parent",
        ]}
      >
        <StudentProfile />
      </ProtectedRoute>
    ),
  },

  // Parent Routes
  {
    path: "/parent",
    element: (
      <ProtectedRoute allowedRoles={["parent"]}>
        <ParentPortal />
      </ProtectedRoute>
    ),
  },
  {
    path: "/parent/children",
    element: (
      <ProtectedRoute allowedRoles={["parent"]}>
        <ParentChildren />
      </ProtectedRoute>
    ),
  },
  {
    path: "/parent/fees",
    element: (
      <ProtectedRoute allowedRoles={["parent"]}>
        <ParentFees />
      </ProtectedRoute>
    ),
  },

  // Classes Routes
  {
    path: "/classes",
    element: (
      <ProtectedRoute
        allowedRoles={["head_teacher", "director_of_studies", "teacher"]}
      >
        <ClassesList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/classes/:id",
    element: (
      <ProtectedRoute
        allowedRoles={["head_teacher", "director_of_studies", "teacher"]}
      >
        <ClassDetails />
      </ProtectedRoute>
    ),
  },

  // Assignments Routes
  {
    path: "/assignments",
    element: (
      <ProtectedRoute
        allowedRoles={["director_of_studies", "teacher", "student"]}
      >
        <AssignmentsList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/assignments/:id",
    element: (
      <ProtectedRoute
        allowedRoles={["director_of_studies", "teacher", "student"]}
      >
        <AssignmentDetails />
      </ProtectedRoute>
    ),
  },

  // Exams Routes
  {
    path: "/exams",
    element: (
      <ProtectedRoute
        allowedRoles={[
          "head_teacher",
          "director_of_studies",
          "teacher",
          "student",
          "parent",
        ]}
      >
        <ExamsList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/exams/:id",
    element: (
      <ProtectedRoute
        allowedRoles={[
          "head_teacher",
          "director_of_studies",
          "teacher",
          "student",
          "parent",
        ]}
      >
        <ExamDetails />
      </ProtectedRoute>
    ),
  },

  // Attendance Routes
  {
    path: "/attendance",
    element: (
      <ProtectedRoute
        allowedRoles={["head_teacher", "director_of_studies", "teacher"]}
      >
        <AttendanceList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/attendance/report",
    element: (
      <ProtectedRoute
        allowedRoles={["head_teacher", "director_of_studies", "teacher"]}
      >
        <AttendanceReport />
      </ProtectedRoute>
    ),
  },

  // Reports Routes
  {
    path: "/reports/academic",
    element: (
      <ProtectedRoute allowedRoles={["head_teacher", "director_of_studies"]}>
        <AcademicReports />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/financial",
    element: (
      <ProtectedRoute allowedRoles={["head_teacher", "finance"]}>
        <FinancialReports />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/attendance",
    element: (
      <ProtectedRoute allowedRoles={["head_teacher", "director_of_studies"]}>
        <AttendanceReports />
      </ProtectedRoute>
    ),
  },

  // Settings Routes
  {
    path: "/settings/profile",
    element: (
      <ProtectedRoute>
        <ProfileSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings/system",
    element: (
      <ProtectedRoute allowedRoles={["head_teacher"]}>
        <SystemSettings />
      </ProtectedRoute>
    ),
  },

  // 404 Not Found
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
