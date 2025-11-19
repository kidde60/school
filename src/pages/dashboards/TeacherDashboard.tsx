import StatsCard from "../../components/shared/StatsCard";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { assignments, classes, attendance } from "../../data/dummyData";

export default function TeacherDashboard() {
  // Filter data for current teacher
  const myClasses = classes.slice(0, 3);
  const recentAssignments = assignments.slice(0, 3);
  const todayAttendance = attendance.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Teacher Dashboard
          </h1>
          <p className="text-blue-600 mt-1">
            Welcome back! Here's your overview
          </p>
        </div>
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          }
        >
          Create Assignment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="My Classes"
          value={myClasses.length}
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
          color="blue"
        />
        <StatsCard
          title="Total Students"
          value={myClasses.reduce((sum, c) => sum + c.students, 0)}
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
          trend={{ value: 5, isPositive: true }}
          color="green"
        />
        <StatsCard
          title="Pending Assignments"
          value={assignments.filter((a) => a.status === "pending").length}
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          }
          color="yellow"
        />
        <StatsCard
          title="Attendance Today"
          value="92%"
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
          trend={{ value: 3, isPositive: true }}
          color="green"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Classes */}
        <Card
          title="My Classes"
          actions={
            <Button variant="outline" size="sm">
              View All
            </Button>
          }
        >
          <div className="space-y-4">
            {myClasses.map((cls) => (
              <div
                key={cls.id}
                className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              >
                <div>
                  <h4 className="font-semibold text-blue-900">{cls.name}</h4>
                  <p className="text-sm text-blue-600">{cls.subject}</p>
                  <p className="text-xs text-blue-500 mt-1">{cls.schedule}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-900">
                    {cls.students}
                  </p>
                  <p className="text-xs text-blue-600">Students</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Assignments */}
        <Card
          title="Recent Assignments"
          actions={
            <Button variant="outline" size="sm">
              View All
            </Button>
          }
        >
          <div className="space-y-3">
            {recentAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between p-4 border border-blue-100 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900">
                    {assignment.title}
                  </h4>
                  <p className="text-sm text-blue-600">{assignment.class}</p>
                  <p className="text-xs text-blue-500 mt-1">
                    Due: {assignment.dueDate}
                  </p>
                </div>
                <Badge
                  variant={
                    assignment.status === "graded"
                      ? "success"
                      : assignment.status === "submitted"
                      ? "info"
                      : "warning"
                  }
                >
                  {assignment.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Today's Attendance */}
      <Card title="Today's Attendance">
        <Table
          columns={[
            {
              header: "Student Name",
              accessor: "studentName",
            },
            {
              header: "Class",
              accessor: "class",
            },
            {
              header: "Date",
              accessor: "date",
            },
            {
              header: "Status",
              accessor: (row) => (
                <Badge
                  variant={
                    row.status === "present"
                      ? "success"
                      : row.status === "late"
                      ? "warning"
                      : "danger"
                  }
                >
                  {String(row.status)}
                </Badge>
              ),
            },
          ]}
          data={todayAttendance}
        />
      </Card>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            className="flex-col h-24"
            leftIcon={
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
            }
          >
            <span className="mt-2">Mark Attendance</span>
          </Button>
          <Button
            variant="outline"
            className="flex-col h-24"
            leftIcon={
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            }
          >
            <span className="mt-2">Add Assignment</span>
          </Button>
          <Button
            variant="outline"
            className="flex-col h-24"
            leftIcon={
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            }
          >
            <span className="mt-2">Grade Papers</span>
          </Button>
          <Button
            variant="outline"
            className="flex-col h-24"
            leftIcon={
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            }
          >
            <span className="mt-2">Message Parents</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
