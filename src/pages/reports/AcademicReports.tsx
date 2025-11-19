import { useState } from "react";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import StatsCard from "../../components/shared/StatsCard";

export default function AcademicReports() {
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedTerm, setSelectedTerm] = useState("term2");

  // Mock analytics data
  const overallStats = {
    totalStudents: 543,
    averageGrade: "B+",
    passRate: 92,
    attendanceRate: 94,
  };

  const classPerformance = [
    {
      class: "Form 1A",
      students: 35,
      average: 85,
      passRate: 94,
      topStudent: "Alice Johnson",
    },
    {
      class: "Form 1B",
      students: 33,
      average: 78,
      passRate: 88,
      topStudent: "Bob Smith",
    },
    {
      class: "Form 2A",
      students: 32,
      average: 82,
      passRate: 91,
      topStudent: "Carol White",
    },
    {
      class: "Form 2B",
      students: 30,
      average: 80,
      passRate: 90,
      topStudent: "David Brown",
    },
    {
      class: "Form 3A",
      students: 28,
      average: 88,
      passRate: 96,
      topStudent: "Eve Davis",
    },
  ];

  const subjectPerformance = [
    {
      subject: "Mathematics",
      average: 82,
      passRate: 89,
      failed: 12,
      topScore: 98,
    },
    { subject: "English", average: 85, passRate: 92, failed: 8, topScore: 96 },
    { subject: "Physics", average: 78, passRate: 85, failed: 15, topScore: 95 },
    {
      subject: "Chemistry",
      average: 80,
      passRate: 87,
      failed: 13,
      topScore: 97,
    },
    { subject: "Biology", average: 83, passRate: 90, failed: 10, topScore: 99 },
  ];

  const gradeDistribution = [
    { grade: "A (90-100)", count: 85, percentage: 15.6 },
    { grade: "B (80-89)", count: 150, percentage: 27.6 },
    { grade: "C (70-79)", count: 180, percentage: 33.1 },
    { grade: "D (60-69)", count: 90, percentage: 16.6 },
    { grade: "F (<60)", count: 38, percentage: 7.0 },
  ];

  const topPerformers = [
    {
      id: "S001",
      name: "Alice Johnson",
      class: "Form 3A",
      average: 98,
      grade: "A",
      subjects: 8,
    },
    {
      id: "S002",
      name: "Bob Smith",
      class: "Form 3A",
      average: 96,
      grade: "A",
      subjects: 8,
    },
    {
      id: "S003",
      name: "Carol White",
      class: "Form 2A",
      average: 95,
      grade: "A",
      subjects: 8,
    },
    {
      id: "S004",
      name: "David Brown",
      class: "Form 3B",
      average: 94,
      grade: "A",
      subjects: 8,
    },
    {
      id: "S005",
      name: "Eve Davis",
      class: "Form 2B",
      average: 93,
      grade: "A",
      subjects: 8,
    },
  ];

  const strugglingStudents = [
    {
      id: "S101",
      name: "Student A",
      class: "Form 1A",
      average: 45,
      subjects: 3,
      status: "At Risk",
    },
    {
      id: "S102",
      name: "Student B",
      class: "Form 2B",
      average: 52,
      subjects: 2,
      status: "At Risk",
    },
    {
      id: "S103",
      name: "Student C",
      class: "Form 1B",
      average: 48,
      subjects: 4,
      status: "Critical",
    },
  ];

  const handleExportReport = () => {
    alert("Exporting report as PDF...");
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Academic Reports</h1>
          <p className="text-blue-600 mt-1">
            Comprehensive academic performance analytics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handlePrintReport}>
            Print Report
          </Button>
          <Button onClick={handleExportReport}>Export PDF</Button>
        </div>
      </div>

      {/* Filters */}
      <Card title="Report Filters">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Academic Term
            </label>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="term1">Term 1 - 2024</option>
              <option value="term2">Term 2 - 2024</option>
              <option value="term3">Term 3 - 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Classes</option>
              <option value="form1">Form 1</option>
              <option value="form2">Form 2</option>
              <option value="form3">Form 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Report Type
            </label>
            <select className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="overview">Performance Overview</option>
              <option value="detailed">Detailed Analysis</option>
              <option value="comparison">Term Comparison</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value={overallStats.totalStudents.toString()}
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
        />
        <StatsCard
          title="Average Grade"
          value={overallStats.averageGrade}
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
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Pass Rate"
          value={`${overallStats.passRate}%`}
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
        />
        <StatsCard
          title="Attendance Rate"
          value={`${overallStats.attendanceRate}%`}
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
        />
      </div>

      {/* Class Performance */}
      <Card title="Class Performance Analysis">
        <Table
          columns={[
            { header: "Class", accessor: "class" },
            { header: "Students", accessor: "students" },
            {
              header: "Average Score",
              accessor: (row) => (
                <span className="font-semibold text-blue-900">
                  {row.average}%
                </span>
              ),
            },
            {
              header: "Pass Rate",
              accessor: (row) => (
                <Badge
                  variant={
                    row.passRate >= 90
                      ? "success"
                      : row.passRate >= 80
                      ? "info"
                      : "warning"
                  }
                >
                  {row.passRate}%
                </Badge>
              ),
            },
            { header: "Top Student", accessor: "topStudent" },
          ]}
          data={classPerformance}
        />
      </Card>

      {/* Subject Performance */}
      <Card title="Subject Performance Analysis">
        <Table
          columns={[
            { header: "Subject", accessor: "subject" },
            {
              header: "Average Score",
              accessor: (row) => `${row.average}%`,
            },
            {
              header: "Pass Rate",
              accessor: (row) => (
                <Badge
                  variant={
                    row.passRate >= 90
                      ? "success"
                      : row.passRate >= 80
                      ? "info"
                      : "warning"
                  }
                >
                  {row.passRate}%
                </Badge>
              ),
            },
            {
              header: "Students Failed",
              accessor: (row) => (
                <span
                  className={
                    row.failed > 15 ? "text-red-600 font-semibold" : ""
                  }
                >
                  {row.failed}
                </span>
              ),
            },
            { header: "Top Score", accessor: "topScore" },
          ]}
          data={subjectPerformance}
        />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <Card title="Grade Distribution">
          <div className="space-y-3">
            {gradeDistribution.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-blue-900">
                    {item.grade}
                  </span>
                  <span className="text-sm text-blue-600">
                    {item.count} students ({item.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance Summary */}
        <Card title="Performance Summary">
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 font-medium">
                Excellent Performance
              </p>
              <p className="text-2xl font-bold text-green-900 mt-1">
                {gradeDistribution
                  .slice(0, 2)
                  .reduce((sum, g) => sum + g.count, 0)}{" "}
                students
              </p>
              <p className="text-xs text-green-600 mt-1">Grades A & B</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-600 font-medium">
                Need Improvement
              </p>
              <p className="text-2xl font-bold text-yellow-900 mt-1">
                {gradeDistribution
                  .slice(3)
                  .reduce((sum, g) => sum + g.count, 0)}{" "}
                students
              </p>
              <p className="text-xs text-yellow-600 mt-1">Grades D & F</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">
                Average Performance
              </p>
              <p className="text-2xl font-bold text-blue-900 mt-1">
                {gradeDistribution[2].count} students
              </p>
              <p className="text-xs text-blue-600 mt-1">Grade C</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Top Performers */}
      <Card title="Top Performing Students">
        <Table
          columns={[
            { header: "Student ID", accessor: "id" },
            { header: "Name", accessor: "name" },
            { header: "Class", accessor: "class" },
            {
              header: "Average Score",
              accessor: (row) => `${row.average}%`,
            },
            {
              header: "Grade",
              accessor: (row) => <Badge variant="success">{row.grade}</Badge>,
            },
            { header: "Subjects", accessor: "subjects" },
          ]}
          data={topPerformers}
        />
      </Card>

      {/* Struggling Students */}
      <Card title="Students Requiring Attention">
        <Table
          columns={[
            { header: "Student ID", accessor: "id" },
            { header: "Name", accessor: "name" },
            { header: "Class", accessor: "class" },
            {
              header: "Average Score",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">
                  {row.average}%
                </span>
              ),
            },
            {
              header: "Failing Subjects",
              accessor: (row) => (
                <span className="text-red-600">{row.subjects}</span>
              ),
            },
            {
              header: "Status",
              accessor: (row) => (
                <Badge
                  variant={row.status === "Critical" ? "danger" : "warning"}
                >
                  {row.status}
                </Badge>
              ),
            },
            {
              header: "Actions",
              accessor: () => (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Contact Parent
                  </Button>
                </div>
              ),
            },
          ]}
          data={strugglingStudents}
        />
      </Card>
    </div>
  );
}
