import StatsCard from "../../components/shared/StatsCard";
import Card from "../../components/shared/Card";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";

export default function ParentPortal() {
  // Mock parent and child data
  const parentInfo = {
    name: "Robert Taylor",
    email: "parent@school.com",
    phone: "+256700123456",
  };

  // Mock children data
  const children = [
    {
      id: "S002",
      name: "Bob Smith",
      class: "Grade 10A",
      grade: "B",
      attendance: 92,
      feeBalance: 150000,
      image: "",
    },
    {
      id: "S006",
      name: "Jane Smith",
      class: "Grade 8B",
      grade: "A",
      attendance: 96,
      feeBalance: 0,
      image: "",
    },
  ];

  const selectedChild = children[0];

  // Fee payment history
  const feeHistory = [
    {
      id: "F001",
      term: "Term 1",
      amount: 500000,
      paid: 350000,
      balance: 150000,
      dueDate: "2025-12-01",
      status: "partial" as const,
    },
    {
      id: "F002",
      term: "Term 2",
      amount: 500000,
      paid: 500000,
      balance: 0,
      dueDate: "2025-08-01",
      status: "paid" as const,
    },
    {
      id: "F003",
      term: "Term 3",
      amount: 500000,
      paid: 500000,
      balance: 0,
      dueDate: "2025-04-01",
      status: "paid" as const,
    },
  ];

  // Recent academic performance
  const recentPerformance = [
    {
      subject: "Mathematics",
      currentGrade: "B+",
      average: 85,
      trend: "up" as const,
    },
    {
      subject: "English",
      currentGrade: "A-",
      average: 88,
      trend: "stable" as const,
    },
    {
      subject: "Science",
      currentGrade: "B",
      average: 82,
      trend: "up" as const,
    },
    {
      subject: "History",
      currentGrade: "A",
      average: 90,
      trend: "stable" as const,
    },
  ];

  // Recent attendance records
  const attendanceRecords = [
    { date: "2025-11-19", status: "present" as const },
    { date: "2025-11-18", status: "present" as const },
    { date: "2025-11-17", status: "late" as const },
    { date: "2025-11-16", status: "present" as const },
    { date: "2025-11-15", status: "present" as const },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: "E001",
      title: "Parent-Teacher Conference",
      date: "2025-11-25",
      time: "2:00 PM",
      type: "meeting" as const,
    },
    {
      id: "E002",
      title: "Mid-Term Exams",
      date: "2025-11-30",
      time: "8:00 AM",
      type: "exam" as const,
    },
    {
      id: "E003",
      title: "Sports Day",
      date: "2025-12-05",
      time: "9:00 AM",
      type: "event" as const,
    },
  ];

  const totalFeeBalance = children.reduce(
    (sum, child) => sum + child.feeBalance,
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Parent Portal</h1>
          <p className="text-blue-600 mt-1">
            Welcome, {parentInfo.name} • {parentInfo.phone}
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
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          }
        >
          Message Teacher
        </Button>
      </div>

      {/* Children Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children.map((child) => (
          <div
            key={child.id}
            className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
              selectedChild.id === child.id
                ? "border-blue-600 bg-blue-50 shadow-lg"
                : "border-blue-200 bg-white hover:border-blue-400 hover:shadow-md"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {child.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900">
                  {child.name}
                </h3>
                <p className="text-blue-600">
                  {child.class} • Roll No: {child.id}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm">
                    Grade:{" "}
                    <span className="font-semibold text-blue-900">
                      {child.grade}
                    </span>
                  </span>
                  <span className="text-sm">
                    Attendance:{" "}
                    <span className="font-semibold text-blue-900">
                      {child.attendance}%
                    </span>
                  </span>
                </div>
              </div>
              {child.feeBalance > 0 && (
                <Badge variant="warning" size="sm">
                  Fee Due
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Fee Balance"
          value={`UGX ${(totalFeeBalance / 1000).toFixed(0)}K`}
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          color={totalFeeBalance > 0 ? "red" : "green"}
        />
        <StatsCard
          title="Children"
          value={children.length}
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
          color="blue"
        />
        <StatsCard
          title="Avg Attendance"
          value={`${Math.round(
            children.reduce((sum, c) => sum + c.attendance, 0) / children.length
          )}%`}
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
          title="Upcoming Events"
          value={upcomingEvents.length}
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fee Payment Status */}
        <Card
          title={`Fee Status - ${selectedChild.name}`}
          actions={
            selectedChild.feeBalance > 0 ? (
              <Button size="sm">Pay Now</Button>
            ) : (
              <Badge variant="success">Fully Paid</Badge>
            )
          }
        >
          <div className="space-y-4">
            {feeHistory.map((fee) => (
              <div
                key={fee.id}
                className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900">{fee.term}</h4>
                  <p className="text-sm text-blue-600">
                    Paid: UGX {(fee.paid / 1000).toFixed(0)}K / UGX{" "}
                    {(fee.amount / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-blue-500 mt-1">
                    Due: {fee.dueDate}
                  </p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      fee.status === "paid"
                        ? "success"
                        : fee.status === "partial"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {fee.status === "paid"
                      ? "Paid"
                      : `Balance: ${(fee.balance / 1000).toFixed(0)}K`}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Academic Performance */}
        <Card
          title={`Academic Performance - ${selectedChild.name}`}
          actions={
            <Button variant="outline" size="sm">
              View Full Report
            </Button>
          }
        >
          <div className="space-y-3">
            {recentPerformance.map((perf, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-blue-100 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900">{perf.subject}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-blue-600">
                      Average: {perf.average}%
                    </span>
                    {perf.trend === "up" ? (
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  {perf.currentGrade}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Attendance Overview */}
      <Card title={`Attendance Record - ${selectedChild.name}`}>
        <div className="flex items-center gap-2 flex-wrap">
          {attendanceRecords.map((record, index) => (
            <div
              key={index}
              className={`px-4 py-3 rounded-lg border-2 ${
                record.status === "present"
                  ? "bg-green-50 border-green-200"
                  : record.status === "late"
                  ? "bg-yellow-50 border-yellow-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <div className="text-xs text-blue-600 mb-1">{record.date}</div>
              <div
                className={`text-sm font-semibold ${
                  record.status === "present"
                    ? "text-green-700"
                    : record.status === "late"
                    ? "text-yellow-700"
                    : "text-red-700"
                }`}
              >
                {record.status === "present"
                  ? "✓"
                  : record.status === "late"
                  ? "⏰"
                  : "✗"}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Events */}
      <Card title="Upcoming School Events">
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  event.type === "exam"
                    ? "bg-red-100 text-red-600"
                    : event.type === "meeting"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {event.type === "exam" ? (
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ) : event.type === "meeting" ? (
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
                ) : (
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-blue-900">{event.title}</h4>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-blue-600">{event.date}</span>
                  <span className="text-sm text-blue-500">{event.time}</span>
                </div>
              </div>
              <Badge
                variant={
                  event.type === "exam"
                    ? "danger"
                    : event.type === "meeting"
                    ? "info"
                    : "success"
                }
              >
                {event.type}
              </Badge>
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
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="mt-2 text-sm">Pay Fees</span>
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
            <span className="mt-2 text-sm">Download Report</span>
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="mt-2 text-sm">Book Meeting</span>
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
            <span className="mt-2 text-sm">Contact School</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
