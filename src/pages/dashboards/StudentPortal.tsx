import StatsCard from "../../components/shared/StatsCard";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { assignments, exams } from "../../data/dummyData";

export default function StudentPortal() {
  // Mock student data
  const studentInfo = {
    name: "David Wilson",
    class: "Grade 10A",
    rollNumber: "S005",
    attendance: 94,
    currentGrade: "B+",
  };

  // Filter data for current student
  const myAssignments = assignments.filter(
    (a) => a.class === studentInfo.class
  );
  const upcomingExams = exams.filter(
    (e) => e.class === studentInfo.class && e.status === "upcoming"
  );

  // Mock timetable data
  const timetable = [
    {
      day: "Monday",
      periods: [
        {
          time: "8:00 - 9:30",
          subject: "Mathematics",
          teacher: "Sarah Johnson",
          room: "Room 101",
        },
        {
          time: "9:45 - 11:15",
          subject: "English",
          teacher: "Michael Brown",
          room: "Room 203",
        },
        {
          time: "11:30 - 1:00",
          subject: "Science",
          teacher: "Emily Wilson",
          room: "Lab 1",
        },
        {
          time: "2:00 - 3:30",
          subject: "History",
          teacher: "James Taylor",
          room: "Room 105",
        },
      ],
    },
    {
      day: "Tuesday",
      periods: [
        {
          time: "8:00 - 9:30",
          subject: "Science",
          teacher: "Emily Wilson",
          room: "Lab 1",
        },
        {
          time: "9:45 - 11:15",
          subject: "Mathematics",
          teacher: "Sarah Johnson",
          room: "Room 101",
        },
        {
          time: "11:30 - 1:00",
          subject: "Physical Education",
          teacher: "John Sports",
          room: "Field",
        },
        {
          time: "2:00 - 3:30",
          subject: "English",
          teacher: "Michael Brown",
          room: "Room 203",
        },
      ],
    },
  ];

  // Mock performance data
  const recentGrades = [
    {
      subject: "Mathematics",
      test: "Mid-term",
      score: 88,
      maxScore: 100,
      grade: "B+",
    },
    { subject: "English", test: "Essay", score: 92, maxScore: 100, grade: "A" },
    {
      subject: "Science",
      test: "Lab Report",
      score: 85,
      maxScore: 100,
      grade: "B",
    },
    { subject: "History", test: "Quiz", score: 90, maxScore: 100, grade: "A-" },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Student Info */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{studentInfo.name}</h1>
            <p className="text-blue-100 mt-1">
              {studentInfo.class} • Roll No: {studentInfo.rollNumber}
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{studentInfo.currentGrade}</div>
            <div className="text-blue-100 text-sm">Current Grade</div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Attendance"
          value={`${studentInfo.attendance}%`}
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
          title="Assignments"
          value={myAssignments.length}
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
          color="blue"
        />
        <StatsCard
          title="Upcoming Exams"
          value={upcomingExams.length}
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
          color="yellow"
        />
        <StatsCard
          title="Average Score"
          value="88.8%"
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
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          }
          trend={{ value: 5, isPositive: true }}
          color="green"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Assignments */}
        <Card
          title="My Assignments"
          actions={
            <Button variant="outline" size="sm">
              View All
            </Button>
          }
        >
          <div className="space-y-3">
            {myAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between p-4 border border-blue-100 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900">
                    {assignment.title}
                  </h4>
                  <p className="text-sm text-blue-600">{assignment.subject}</p>
                  <p className="text-xs text-blue-500 mt-1">
                    Due: {assignment.dueDate}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
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
                  {assignment.grade && (
                    <span className="text-lg font-bold text-blue-900">
                      {assignment.grade}%
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Exams */}
        <Card
          title="Upcoming Exams"
          actions={
            <Button variant="outline" size="sm">
              View All
            </Button>
          }
        >
          <div className="space-y-3">
            {upcomingExams.length > 0 ? (
              upcomingExams.map((exam) => (
                <div
                  key={exam.id}
                  className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        {exam.name}
                      </h4>
                      <p className="text-sm text-blue-600 mt-1">
                        {exam.subject}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <svg
                          className="w-4 h-4 text-blue-500"
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
                        <span className="text-xs text-blue-600">
                          {exam.date}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-900">
                        {exam.totalMarks}
                      </div>
                      <div className="text-xs text-blue-600">marks</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-blue-500">
                No upcoming exams
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Recent Performance */}
      <Card title="Recent Performance">
        <Table
          columns={[
            {
              header: "Subject",
              accessor: "subject",
            },
            {
              header: "Test",
              accessor: "test",
            },
            {
              header: "Score",
              accessor: (row) => `${row.score}/${row.maxScore}`,
            },
            {
              header: "Percentage",
              accessor: (row) => (
                <span className="font-semibold">
                  {((row.score / row.maxScore) * 100).toFixed(1)}%
                </span>
              ),
            },
            {
              header: "Grade",
              accessor: (row) => (
                <Badge
                  variant={
                    row.grade.startsWith("A")
                      ? "success"
                      : row.grade.startsWith("B")
                      ? "info"
                      : "warning"
                  }
                >
                  {row.grade}
                </Badge>
              ),
            },
          ]}
          data={recentGrades}
        />
      </Card>

      {/* Timetable */}
      <Card title="My Timetable">
        <div className="space-y-6">
          {timetable.map((day) => (
            <div key={day.day}>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {day.day}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {day.periods.map((period, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-20">
                      <div className="text-xs font-semibold">
                        {period.time.split(" - ")[0]}
                      </div>
                      <div className="text-xs opacity-90">to</div>
                      <div className="text-xs font-semibold">
                        {period.time.split(" - ")[1]}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900">
                        {period.subject}
                      </h4>
                      <p className="text-sm text-blue-600">{period.teacher}</p>
                      <p className="text-xs text-blue-500">{period.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card title="Quick Actions">
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
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="mt-2 text-sm">Submit Assignment</span>
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="mt-2 text-sm">Study Materials</span>
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
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className="mt-2 text-sm">Ask Teacher</span>
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
            <span className="mt-2 text-sm">View Report Card</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
