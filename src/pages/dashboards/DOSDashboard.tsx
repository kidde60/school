import StatsCard from "../../components/shared/StatsCard";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";

export default function DOSDashboard() {
  // Mock academic data
  const academicOverview = {
    totalClasses: 18,
    totalSubjects: 12,
    activeTeachers: 42,
    upcomingExams: 8,
    averagePerformance: 83,
    curriculumCoverage: 78,
  };

  // Teacher performance data
  const teacherPerformance = [
    {
      name: "Sarah Johnson",
      subject: "Mathematics",
      classes: 3,
      lessonCompletion: 95,
      studentAvg: 85,
      status: "excellent" as const,
    },
    {
      name: "Michael Brown",
      subject: "English",
      classes: 3,
      lessonCompletion: 88,
      studentAvg: 82,
      status: "good" as const,
    },
    {
      name: "Emily Wilson",
      subject: "Science",
      classes: 2,
      lessonCompletion: 92,
      studentAvg: 84,
      status: "excellent" as const,
    },
    {
      name: "James Taylor",
      subject: "History",
      classes: 2,
      lessonCompletion: 85,
      studentAvg: 80,
      status: "good" as const,
    },
  ];

  // Curriculum progress
  const curriculumProgress = [
    {
      subject: "Mathematics",
      planned: 40,
      completed: 35,
      percentage: 88,
      onTrack: true,
    },
    {
      subject: "English",
      planned: 38,
      completed: 30,
      percentage: 79,
      onTrack: true,
    },
    {
      subject: "Science",
      planned: 42,
      completed: 38,
      percentage: 90,
      onTrack: true,
    },
    {
      subject: "History",
      planned: 36,
      completed: 25,
      percentage: 69,
      onTrack: false,
    },
  ];

  // Upcoming examinations
  const upcomingExaminations = [
    {
      id: "E001",
      name: "Mid-Term Exams",
      startDate: "2025-11-30",
      endDate: "2025-12-05",
      classes: ["Grade 10A", "Grade 10B"],
      status: "scheduled" as const,
    },
    {
      id: "E002",
      name: "Monthly Tests",
      startDate: "2025-11-25",
      endDate: "2025-11-27",
      classes: ["Grade 9A", "Grade 9B"],
      status: "preparation" as const,
    },
  ];

  // Academic issues
  const academicIssues = [
    {
      id: "I001",
      type: "Performance",
      class: "Grade 9B",
      subject: "Mathematics",
      description: "Class average below 70%",
      severity: "high" as const,
    },
    {
      id: "I002",
      type: "Curriculum",
      class: "Grade 10A",
      subject: "History",
      description: "Behind schedule by 2 weeks",
      severity: "medium" as const,
    },
    {
      id: "I003",
      type: "Assessment",
      class: "Grade 9A",
      subject: "Science",
      description: "Pending marks submission",
      severity: "low" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Director of Studies Dashboard
          </h1>
          <p className="text-blue-600 mt-1">
            Academic management and curriculum oversight
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          >
            Schedule Exam
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
          >
            Academic Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Classes"
          value={academicOverview.totalClasses}
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          }
          color="blue"
        />
        <StatsCard
          title="Active Teachers"
          value={academicOverview.activeTeachers}
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
          title="Avg Performance"
          value={`${academicOverview.averagePerformance}%`}
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          }
          trend={{ value: 4, isPositive: true }}
          color="green"
        />
        <StatsCard
          title="Curriculum Coverage"
          value={`${academicOverview.curriculumCoverage}%`}
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          }
          trend={{ value: 2, isPositive: true }}
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Academic Issues */}
        <Card
          title="Academic Issues"
          actions={<Badge variant="danger">{academicIssues.length}</Badge>}
        >
          <div className="space-y-3">
            {academicIssues.map((issue) => (
              <div
                key={issue.id}
                className="p-4 border border-blue-100 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-blue-900">
                      {issue.type}
                    </h4>
                    <Badge
                      variant={
                        issue.severity === "high"
                          ? "danger"
                          : issue.severity === "medium"
                          ? "warning"
                          : "info"
                      }
                      size="sm"
                    >
                      {issue.severity}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-blue-600">
                  {issue.class} - {issue.subject}
                </p>
                <p className="text-xs text-blue-500 mt-1">
                  {issue.description}
                </p>
                <Button size="sm" variant="outline" className="mt-3">
                  Resolve
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Examinations */}
        <Card title="Upcoming Examinations">
          <div className="space-y-4">
            {upcomingExaminations.map((exam) => (
              <div
                key={exam.id}
                className="p-4 bg-blue-50 rounded-lg border border-blue-100"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-blue-900">{exam.name}</h4>
                  <Badge
                    variant={
                      exam.status === "scheduled" ? "success" : "warning"
                    }
                  >
                    {exam.status}
                  </Badge>
                </div>
                <p className="text-sm text-blue-600 mb-2">
                  {exam.startDate} to {exam.endDate}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exam.classes.map((cls, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Curriculum Progress */}
      <Card title="Curriculum Coverage Progress">
        <Table
          columns={[
            {
              header: "Subject",
              accessor: "subject",
            },
            {
              header: "Lessons Planned",
              accessor: "planned",
            },
            {
              header: "Completed",
              accessor: "completed",
            },
            {
              header: "Progress",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="w-full max-w-[150px] bg-blue-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        row.percentage >= 85
                          ? "bg-green-500"
                          : row.percentage >= 70
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${row.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-blue-900 min-w-[45px]">
                    {row.percentage}%
                  </span>
                </div>
              ),
            },
            {
              header: "Status",
              accessor: (row) => (
                <Badge variant={row.onTrack ? "success" : "danger"}>
                  {row.onTrack ? "On Track" : "Behind"}
                </Badge>
              ),
            },
          ]}
          data={curriculumProgress}
        />
      </Card>

      {/* Teacher Performance */}
      <Card title="Teacher Performance Overview">
        <Table
          columns={[
            {
              header: "Teacher",
              accessor: "name",
            },
            {
              header: "Subject",
              accessor: "subject",
            },
            {
              header: "Classes",
              accessor: "classes",
            },
            {
              header: "Lesson Completion",
              accessor: (row) => `${row.lessonCompletion}%`,
            },
            {
              header: "Student Avg",
              accessor: (row) => `${row.studentAvg}%`,
            },
            {
              header: "Status",
              accessor: (row) => (
                <Badge
                  variant={
                    row.status === "excellent"
                      ? "success"
                      : row.status === "good"
                      ? "info"
                      : "warning"
                  }
                >
                  {row.status}
                </Badge>
              ),
            },
          ]}
          data={teacherPerformance}
        />
      </Card>

      {/* Quick Actions */}
      <Card title="Academic Management Actions">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="mt-2 text-sm">Create Timetable</span>
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <span className="mt-2 text-sm">Schedule Exam</span>
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="mt-2 text-sm">Monitor Teachers</span>
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="mt-2 text-sm">Generate Report</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
