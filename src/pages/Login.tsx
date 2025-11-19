import { useState } from "react";
import { login } from "../utils/auth";
import type { UserRole } from "../types/auth.types";

interface LoginProps {
  onLogin: () => void;
}

const roleOptions: { value: UserRole; label: string; icon: string }[] = [
  { value: "head_teacher", label: "Head Teacher", icon: "👔" },
  { value: "director_of_studies", label: "Director of Studies", icon: "📚" },
  { value: "finance", label: "Finance/Bursar", icon: "💰" },
  { value: "teacher", label: "Teacher", icon: "👨‍🏫" },
  { value: "student", label: "Student", icon: "🎓" },
  { value: "parent", label: "Parent", icon: "👨‍👩‍👧" },
];

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("teacher");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = login(email, password, selectedRole);

      if (user) {
        onLogin();
      } else {
        setError("Invalid credentials. Try: password123");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleSelect = (role: UserRole) => {
    console.log("Selected role:", role);
    setSelectedRole(role);
    // Auto-fill email for testing
    setEmail(
      roleOptions.find((r) => r.value === role)?.value.replace("_", "") +
        "@school.com"
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-full p-4 mb-4 shadow-xl">
            <svg
              className="w-16 h-16 text-blue-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Dangotech School Management System
          </h1>
          <p className="text-blue-200">
            Streamlining Education, Empowering Growth
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Role Selection */}
            <div className="bg-linear-to-br from-blue-50 to-white p-8 border-r border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Select Your Role
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {roleOptions.map((role) => (
                  <button
                    key={role.value}
                    onClick={() => handleRoleSelect(role.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedRole === role.value
                        ? "border-blue-600 bg-blue-50 shadow-lg scale-105"
                        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <div className="text-4xl mb-2">{role.icon}</div>
                    <div
                      className={`text-sm font-semibold ${
                        selectedRole === role.value
                          ? "text-blue-900"
                          : "text-blue-700"
                      }`}
                    >
                      {role.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Sign In</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Enter your password"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>

                <div className="pt-4 border-t border-blue-200">
                  <div className="text-sm text-blue-700 space-y-1">
                    <p className="font-semibold text-blue-900">
                      Demo Credentials:
                    </p>
                    <p>
                      Email:{" "}
                      <span className="text-blue-600">
                        {selectedRole.replace("_", "") + "@school.com"}
                      </span>
                    </p>
                    <p>
                      Password:{" "}
                      <span className="text-blue-600">password123</span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-blue-200 text-sm">
          <p>&copy; 2025 Dangotech Concepts Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
