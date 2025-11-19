import StatsCard from "../../components/shared/StatsCard";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";

export default function HeadTeacherDashboard() {
  // Mock school overview data
  const schoolOverview = {
    totalStudents: 543,
    totalTeachers: 45,
    totalClasses: 18,
    attendanceRate: 94,
    staffAttendance: 96,
    activeIssues: 3,
  };

  // Recent activities
  const recentActivities = [
    {
      id: "A001",
      type: "admission" as const,
      title: "New Student Admission",
      description: "Alice Mukasa admitted to Grade 9A",
      time: "2 hours ago",
    },
    {
      id: "A002",
      type: "finance" as const,
      title: "Payment Received",
      description: "UGX 500,000 from David Brown",
      time: "3 hours ago",
    },
    {
      id: "A003",
      type: "discipline" as const,
      title: "Disciplinary Case",
      description: "Late arrival report - Grade 10B",
      time: "5 hours ago",
    },
    {
      id: "A004",
      type: "staff" as const,
      title: "Leave Request",
      description: "Emily Wilson - Medical Leave (2 days)",
      time: "1 day ago",
    },
  ];

  // Performance by class
  const classPerformance = [
    { class: "Grade 10A", students: 35, avgScore: 85, attendance: 95 },
    { class: "Grade 10B", students: 32, avgScore: 82, attendance: 93 },
    { class: "Grade 9A", students: 30, avgScore: 80, attendance: 92 },
    { class: "Grade 9B", students: 28, avgScore: 83, attendance: 94 },
  ];

  // Staff overview
  const staffSummary = [
    { department: "Science", teachers: 8, classes: 15, avgLoad: 18 },
    { department: "Mathematics", teachers: 6, classes: 12, avgLoad: 20 },
    { department: "Languages", teachers: 10, classes: 18, avgLoad: 16 },
    { department: "Humanities", teachers: 7, classes: 14, avgLoad: 17 },
  ];

  // Pending approvals
  const pendingApprovals = [
    {
      id: "P001",
      type: "Leave Request",
      from: "Sarah Johnson",
      details: "Annual Leave - 5 days",
      date: "2025-11-20",
      priority: "medium" as const,
    },
    {
      id: "P002",
      type: "Budget Request",
      from: "Finance Department",
      details: "Science Lab Equipment - UGX 2M",
      date: "2025-11-19",
      priority: "high" as const,
    },
    {
      id: "P003",
      type: "Student Admission",
      from: "Admissions Office",
      details: "Transfer Student - Grade 10",
      date: "2025-11-18",
      priority: "low" as const,
    },
  ];

  // Financial snapshot
  const financialSnapshot = {
    totalRevenue: 15750000,
    collected: 12500000,
    outstanding: 3250000,
    monthlyExpenses: 8500000,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Head Teacher Dashboard
          </h1>
          <p className="text-blue-600 mt-1">
            Complete school overview and administration
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            leftIcon={
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            }
          >
            Announcements
          </Button>
          <Button
            leftIcon={
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          >
            Generate Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value={schoolOverview.totalStudents}
          icon={
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
          trend={{ value: 3, isPositive: true }}
          color="blue"
        />
        <StatsCard
          title="Teaching Staff"
          value={schoolOverview.totalTeachers}
          icon={
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
          color="green"
        />
        <StatsCard
          title="Student Attendance"
          value={`${schoolOverview.attendanceRate}%`}
          icon={
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          trend={{ value: 2, isPositive: true }}
          color="green"
        />
        <StatsCard
          title="Active Issues"
          value={schoolOverview.activeIssues}
          icon={
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          }
          color="yellow"
        />
      </div>

      {/* Financial Summary */}
      <Card title="Financial Summary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-blue-900">
              {(financialSnapshot.totalRevenue / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600 mb-1">Collected</p>
            <p className="text-2xl font-bold text-green-900">
              {(financialSnapshot.collected / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600 mb-1">Outstanding</p>
            <p className="text-2xl font-bold text-red-900">
              {(financialSnapshot.outstanding / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-600 mb-1">Monthly Expenses</p>
            <p className="text-2xl font-bold text-yellow-900">
              {(financialSnapshot.monthlyExpenses / 1000000).toFixed(1)}M
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <Card
          title="Pending Approvals"
          actions={<Badge variant="warning">{pendingApprovals.length}</Badge>}
        >
          <div className="space-y-3">
            {pendingApprovals.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border border-blue-100 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-blue-900">{item.type}</h4>
                    <Badge
                      variant={
                        item.priority === "high"
                          ? "danger"
                          : item.priority === "medium"
                          ? "warning"
                          : "info"
                      }
                      size="sm"
                    >
                      {item.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-600">{item.from}</p>
                  <p className="text-xs text-blue-500 mt-1">{item.details}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activities */}
        <Card title="Recent Activities">
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-3 bg-blue-50 rounded-lg"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === "admission"
                      ? "bg-blue-100 text-blue-600"
                      : activity.type === "finance"
                      ? "bg-green-100 text-green-600"
                      : activity.type === "discipline"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {activity.type === "admission"
                    ? "👤"
                    : activity.type === "finance"
                    ? "💰"
                    : activity.type === "discipline"
                    ? "⚠️"
                    : "📋"}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 text-sm">
                    {activity.title}
                  </h4>
                  <p className="text-xs text-blue-600 mt-1">
                    {activity.description}
                  </p>
                  <p className="text-xs text-blue-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Class Performance Overview */}
      <Card title="Class Performance Overview">
        <Table
          columns={[
            {
              header: "Class",
              accessor: "class",
            },
            {
              header: "Students",
              accessor: "students",
            },
            {
              header: "Avg Score",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{row.avgScore}%</span>
                  <Badge
                    variant={
                      row.avgScore >= 85
                        ? "success"
                        : row.avgScore >= 75
                        ? "info"
                        : "warning"
                    }
                    size="sm"
                  >
                    {row.avgScore >= 85
                      ? "Excellent"
                      : row.avgScore >= 75
                      ? "Good"
                      : "Fair"}
                  </Badge>
                </div>
              ),
            },
            {
              header: "Attendance",
              accessor: (row) => `${row.attendance}%`,
            },
            {
              header: "Action",
              accessor: () => (
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              ),
            },
          ]}
          data={classPerformance}
        />
      </Card>

      {/* Staff Overview */}
      <Card title="Staff Distribution by Department">
        <Table
          columns={[
            {
              header: "Department",
              accessor: "department",
            },
            {
              header: "Teachers",
              accessor: "teachers",
            },
            {
              header: "Classes",
              accessor: "classes",
            },
            {
              header: "Avg Teaching Load",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{row.avgLoad} hrs/week</span>
                  {row.avgLoad > 20 && (
                    <Badge variant="warning" size="sm">
                      High
                    </Badge>
                  )}
                </div>
              ),
            },
          ]}
          data={staffSummary}
        />
      </Card>

      {/* Quick Actions */}
      <Card title="Administrative Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            <span className="mt-2 text-sm">Admit Student</span>
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="mt-2 text-sm">Manage Staff</span>
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="mt-2 text-sm">View Reports</span>
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="mt-2 text-sm">School Settings</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
