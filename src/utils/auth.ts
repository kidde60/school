import type { User, UserRole } from "../types/auth.types";

const AUTH_KEY = "dangotech_auth";

// Dummy users for testing
export const dummyUsers: Record<UserRole, User> = {
  head_teacher: {
    id: "1",
    email: "headteacher@school.com",
    name: "John Doe",
    role: "head_teacher",
  },
  director_of_studies: {
    id: "2",
    email: "directorof_studies@school.com",
    name: "Jane Smith",
    role: "director_of_studies",
  },
  finance: {
    id: "3",
    email: "finance@school.com",
    name: "Michael Brown",
    role: "finance",
  },
  teacher: {
    id: "4",
    email: "teacher@school.com",
    name: "Sarah Johnson",
    role: "teacher",
  },
  student: {
    id: "5",
    email: "student@school.com",
    name: "David Wilson",
    role: "student",
  },
  parent: {
    id: "6",
    email: "parent@school.com",
    name: "Robert Taylor",
    role: "parent",
  },
};

export const login = (
  email: string,
  password: string,
  role: UserRole
): User | null => {
  // Simple dummy authentication - in production, this would be an API call
  const user = dummyUsers[role];

  console.log("Attempting login with:", { email, password, role });

  if (user && user.email === email && password === "password123") {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return user;
  }

  return null;
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem(AUTH_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
