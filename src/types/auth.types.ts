export type UserRole =
  | "head_teacher"
  | "director_of_studies"
  | "finance"
  | "teacher"
  | "student"
  | "parent";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  role: UserRole;
}
