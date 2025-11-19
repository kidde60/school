import { useState } from "react";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import StatsCard from "../../components/shared/StatsCard";
import { classes } from "../../data/dummyData";

export default function AttendanceReports() {
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [selectedMonth, setSelectedMonth] = useState("2024-05");

  // Mock attendance data
  const attendanceOverview = {
    totalStudents: 543,
    presentToday: 512,
    absentToday: 23,
    lateToday: 8,
    overallRate: 94.3,
  };

  const classAttendance = [
    {
      classId: "C001",
      className: "Form 1A",
      totalStudents: 45,
      present: 43,
      absent: 2,
      late: 0,
      rate: 95.6,
    },
    {
      classId: "C002",
      className: "Form 1B",
      totalStudents: 43,
      present: 41,
      absent: 1,
      late: 1,
      rate: 97.7,
    },
    {
      classId: "C003",
      className: "Form 2A",
      totalStudents: 48,
      present: 45,
      absent: 2,
      late: 1,
      rate: 93.8,
    },
    {
      classId: "C004",
      className: "Form 2B",
      totalStudents: 42,
      present: 40,
      absent: 2,
      late: 0,
      rate: 95.2,
    },
    {
      classId: "C005",
      className: "Form 3A",
      totalStudents: 50,
      present: 46,
      absent: 3,
      late: 1,
      rate: 92.0,
    },
  ];

  const dailyAttendance = [
    { date: "2024-05-20", present: 520, absent: 18, late: 5, rate: 95.8 },
    { date: "2024-05-21", present: 515, absent: 22, late: 6, rate: 94.9 },
    { date: "2024-05-22", present: 512, absent: 23, late: 8, rate: 94.3 },
    { date: "2024-05-23", present: 518, absent: 19, late: 6, rate: 95.4 },
    { date: "2024-05-24", present: 525, absent: 15, late: 3, rate: 96.7 },
  ];

  const studentAttendanceTrends = [
    {
      id: "S001",
      name: "John Doe",
      class: "Form 2A",
      daysPresent: 85,
      daysAbsent: 3,
      daysLate: 2,
      rate: 94.4,
      status: "Good",
    },
    {
      id: "S002",
      name: "Jane Smith",
      class: "Form 1A",
      daysPresent: 88,
      daysAbsent: 2,
      daysLate: 0,
      rate: 97.8,
      status: "Excellent",
    },
    {
      id: "S015",
      name: "Michael Brown",
      class: "Form 3B",
      daysPresent: 70,
      daysAbsent: 18,
      daysLate: 2,
      rate: 77.8,
      status: "At Risk",
    },
    {
      id: "S023",
      name: "Sarah Wilson",
      class: "Form 2B",
      daysPresent: 82,
      daysAbsent: 6,
      daysLate: 2,
      rate: 91.1,
      status: "Good",
    },
    {
      id: "S034",
      name: "David Martinez",
      class: "Form 1B",
      daysPresent: 65,
      daysAbsent: 22,
      daysLate: 3,
      rate: 72.2,
      status: "Critical",
    },
  ];

  const absenteesList = [
    {
      id: "S015",
      name: "Michael Brown",
      class: "Form 3B",
      date: "2024-05-22",
      reason: "Illness",
      consecutive: 3,
      contactStatus: "Parent Contacted",
    },
    {
      id: "S034",
      name: "David Martinez",
      class: "Form 1B",
      date: "2024-05-22",
      reason: "Not Specified",
      consecutive: 1,
      contactStatus: "Pending",
    },
    {
      id: "S087",
      name: "Lisa Anderson",
      class: "Form 2A",
      date: "2024-05-22",
      reason: "Family Emergency",
      consecutive: 2,
      contactStatus: "Parent Contacted",
    },
  ];

  const lateArrivals = [
    {
      id: "S012",
      name: "James Taylor",
      class: "Form 1A",
      time: "08:15 AM",
      minutesLate: 15,
    },
    {
      id: "S045",
      name: "Emily Davis",
      class: "Form 2B",
      time: "08:20 AM",
      minutesLate: 20,
    },
    {
      id: "S067",
      name: "Robert Johnson",
      class: "Form 3A",
      time: "08:10 AM",
      minutesLate: 10,
    },
  ];

  const monthlyTrends = [
    { month: "January", rate: 95.2, present: 15430, absent: 780 },
    { month: "February", rate: 94.8, present: 14280, absent: 780 },
    { month: "March", rate: 96.1, present: 15635, absent: 635 },
    { month: "April", rate: 93.7, present: 15010, absent: 1010 },
    { month: "May", rate: 94.3, present: 12540, absent: 760 },
  ];

  const handleExportReport = () => {
    alert("Exporting attendance report as PDF...");
  };

  const handlePrintReport = () => {
    alert("Printing attendance report...");
  };

  const handleContactParent = (studentId: string) => {
    alert(`Initiating contact with parent of student ${studentId}...`);
  };

  const handleMarkExcused = (studentId: string) => {
    alert(`Marking absence as excused for student ${studentId}...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Attendance Reports
          </h1>
          <p className="text-blue-600 mt-1">
            Track and analyze student attendance patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handlePrintReport}>
            Print Report
          </Button>
          <Button onClick={handleExportReport}>Export PDF</Button>
        </div>
      </div>

      {/* Filter Controls */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Period
            </label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="term">This Term</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Classes</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Month
            </label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="2024-05">May 2024</option>
              <option value="2024-04">April 2024</option>
              <option value="2024-03">March 2024</option>
              <option value="2024-02">February 2024</option>
              <option value="2024-01">January 2024</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <StatsCard
          title="Total Students"
          value={attendanceOverview.totalStudents.toString()}
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
        />
        <StatsCard
          title="Present Today"
          value={attendanceOverview.presentToday.toString()}
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
        />
        <StatsCard
          title="Absent Today"
          value={attendanceOverview.absentToday.toString()}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          }
        />
        <StatsCard
          title="Late Today"
          value={attendanceOverview.lateToday.toString()}
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <StatsCard
          title="Overall Rate"
          value={`${attendanceOverview.overallRate}%`}
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
        />
      </div>

      {/* Class-wise Attendance */}
      <Card title="Class-wise Attendance">
        <Table
          columns={[
            { header: "Class", accessor: "className" },
            { header: "Total Students", accessor: "totalStudents" },
            {
              header: "Present",
              accessor: (row) => (
                <span className="text-green-600 font-semibold">
                  {row.present}
                </span>
              ),
            },
            {
              header: "Absent",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">{row.absent}</span>
              ),
            },
            {
              header: "Late",
              accessor: (row) => (
                <span className="text-yellow-600 font-semibold">
                  {row.late}
                </span>
              ),
            },
            {
              header: "Attendance Rate",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${row.rate}%` }}
                    />
                  </div>
                  <span className="font-semibold text-blue-900">
                    {row.rate}%
                  </span>
                </div>
              ),
            },
          ]}
          data={classAttendance}
        />
      </Card>

      {/* Daily Attendance Trends */}
      <Card title="Daily Attendance Trends">
        <Table
          columns={[
            { header: "Date", accessor: "date" },
            {
              header: "Present",
              accessor: (row) => (
                <span className="text-green-600 font-semibold">
                  {row.present}
                </span>
              ),
            },
            {
              header: "Absent",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">{row.absent}</span>
              ),
            },
            {
              header: "Late",
              accessor: (row) => (
                <span className="text-yellow-600 font-semibold">
                  {row.late}
                </span>
              ),
            },
            {
              header: "Attendance Rate",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${row.rate}%` }}
                    />
                  </div>
                  <span className="font-semibold text-blue-900">
                    {row.rate}%
                  </span>
                </div>
              ),
            },
          ]}
          data={dailyAttendance}
        />
      </Card>

      {/* Critical Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Today's Absentees */}
        <Card title="Today's Absentees">
          <Table
            columns={[
              { header: "Student", accessor: "name" },
              { header: "Class", accessor: "class" },
              { header: "Reason", accessor: "reason" },
              {
                header: "Consecutive Days",
                accessor: (row) => (
                  <Badge variant={row.consecutive >= 3 ? "danger" : "warning"}>
                    {row.consecutive} {row.consecutive === 1 ? "day" : "days"}
                  </Badge>
                ),
              },
              {
                header: "Actions",
                accessor: (row) => (
                  <div className="flex gap-2">
                    {row.contactStatus === "Pending" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleContactParent(row.id)}
                      >
                        Contact Parent
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMarkExcused(row.id)}
                    >
                      Mark Excused
                    </Button>
                  </div>
                ),
              },
            ]}
            data={absenteesList}
          />
        </Card>

        {/* Late Arrivals */}
        <Card title="Late Arrivals Today">
          <Table
            columns={[
              { header: "Student", accessor: "name" },
              { header: "Class", accessor: "class" },
              { header: "Arrival Time", accessor: "time" },
              {
                header: "Minutes Late",
                accessor: (row) => (
                  <Badge variant="warning">{row.minutesLate} mins</Badge>
                ),
              },
            ]}
            data={lateArrivals}
          />
        </Card>
      </div>

      {/* Student Attendance Trends */}
      <Card title="Student Attendance Trends">
        <Table
          columns={[
            { header: "Student ID", accessor: "id" },
            { header: "Name", accessor: "name" },
            { header: "Class", accessor: "class" },
            { header: "Days Present", accessor: "daysPresent" },
            { header: "Days Absent", accessor: "daysAbsent" },
            { header: "Days Late", accessor: "daysLate" },
            {
              header: "Attendance Rate",
              accessor: (row) => `${row.rate}%`,
            },
            {
              header: "Status",
              accessor: (row) => (
                <Badge
                  variant={
                    row.status === "Excellent"
                      ? "success"
                      : row.status === "Good"
                      ? "info"
                      : row.status === "At Risk"
                      ? "warning"
                      : "danger"
                  }
                >
                  {row.status}
                </Badge>
              ),
            },
          ]}
          data={studentAttendanceTrends}
        />
      </Card>

      {/* Monthly Trends */}
      <Card title="Monthly Attendance Trends">
        <Table
          columns={[
            { header: "Month", accessor: "month" },
            {
              header: "Present",
              accessor: (row) => (
                <span className="text-green-600 font-semibold">
                  {row.present.toLocaleString()}
                </span>
              ),
            },
            {
              header: "Absent",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">
                  {row.absent.toLocaleString()}
                </span>
              ),
            },
            {
              header: "Attendance Rate",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${row.rate}%` }}
                    />
                  </div>
                  <span className="font-semibold text-blue-900">
                    {row.rate}%
                  </span>
                </div>
              ),
            },
          ]}
          data={monthlyTrends}
        />
      </Card>
    </div>
  );
}
