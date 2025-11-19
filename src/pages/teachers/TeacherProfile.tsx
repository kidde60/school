import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import StatsCard from "../../components/shared/StatsCard";
import { teachers } from "../../data/dummyData";

export default function TeacherProfile() {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Teacher not found</p>
        <Link
          to="/teachers"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Teachers
        </Link>
      </div>
    );
  }

  // Mock data for teacher's classes and schedule
  const assignedClasses = [
    {
      id: "C001",
      name: "Form 1A",
      subject: teacher.subject,
      students: 35,
      schedule: "Mon, Wed, Fri - 9:00 AM",
    },
    {
      id: "C002",
      name: "Form 2B",
      subject: teacher.subject,
      students: 32,
      schedule: "Tue, Thu - 10:00 AM",
    },
    {
      id: "C003",
      name: "Form 3A",
      subject: teacher.subject,
      students: 28,
      schedule: "Mon, Wed - 2:00 PM",
    },
  ];

  const weeklySchedule = [
    {
      day: "Monday",
      time: "9:00 - 10:00",
      class: "Form 1A",
      subject: teacher.subject,
      room: "Room 101",
    },
    {
      day: "Monday",
      time: "2:00 - 3:00",
      class: "Form 3A",
      subject: teacher.subject,
      room: "Room 103",
    },
    {
      day: "Tuesday",
      time: "10:00 - 11:00",
      class: "Form 2B",
      subject: teacher.subject,
      room: "Room 102",
    },
    {
      day: "Wednesday",
      time: "9:00 - 10:00",
      class: "Form 1A",
      subject: teacher.subject,
      room: "Room 101",
    },
    {
      day: "Wednesday",
      time: "2:00 - 3:00",
      class: "Form 3A",
      subject: teacher.subject,
      room: "Room 103",
    },
    {
      day: "Thursday",
      time: "10:00 - 11:00",
      class: "Form 2B",
      subject: teacher.subject,
      room: "Room 102",
    },
    {
      day: "Friday",
      time: "9:00 - 10:00",
      class: "Form 1A",
      subject: teacher.subject,
      room: "Room 101",
    },
  ];

  const recentAssignments = [
    {
      id: "A001",
      title: "Chapter 5 Exercise",
      class: "Form 1A",
      dueDate: "2024-03-15",
      submitted: "30/35",
    },
    {
      id: "A002",
      title: "Lab Report",
      class: "Form 2B",
      dueDate: "2024-03-20",
      submitted: "28/32",
    },
    {
      id: "A003",
      title: "Project Work",
      class: "Form 3A",
      dueDate: "2024-03-25",
      submitted: "15/28",
    },
  ];

  const upcomingExams = [
    {
      id: "E001",
      name: "Mid-Term Exam",
      class: "Form 1A",
      date: "2024-04-10",
      time: "9:00 AM",
      duration: "2 hours",
    },
    {
      id: "E002",
      name: "Quiz 3",
      class: "Form 2B",
      date: "2024-04-12",
      time: "10:00 AM",
      duration: "1 hour",
    },
  ];

  const totalStudents = assignedClasses.reduce(
    (sum, cls) => sum + cls.students,
    0
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/teachers"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Teachers
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">{teacher.name}</h1>
          <p className="text-blue-600 mt-1">
            {teacher.subject} • {teacher.id}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Edit Profile</Button>
          <Button>Send Message</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Assigned Classes"
          value={assignedClasses.length.toString()}
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
        />
        <StatsCard
          title="Total Students"
          value={totalStudents.toString()}
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
          title="Weekly Periods"
          value={weeklySchedule.length.toString()}
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
        />
        <StatsCard
          title="Pending Assignments"
          value={recentAssignments.length.toString()}
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Personal Information">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Email</p>
              <p className="font-semibold text-blue-900">{teacher.email}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Phone</p>
              <p className="font-semibold text-blue-900">
                {teacher.phone || "+256 700 000 000"}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Subject Specialization</p>
              <p className="font-semibold text-blue-900">{teacher.subject}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Employee ID</p>
              <p className="font-semibold text-blue-900">{teacher.id}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Status</p>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
        </Card>

        <Card title="Teaching Performance">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Average Class Performance</p>
              <p className="font-semibold text-blue-900 text-2xl">85%</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Student Satisfaction</p>
              <p className="font-semibold text-blue-900">4.5/5.0</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Attendance Record</p>
              <Badge variant="success">Excellent</Badge>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              Create Assignment
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Schedule Exam
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Mark Attendance
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              View Performance Report
            </Button>
          </div>
        </Card>
      </div>

      {/* Assigned Classes */}
      <Card title="Assigned Classes">
        <Table
          columns={[
            {
              header: "Class",
              accessor: (row) => (
                <Link
                  to={`/classes/${row.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {row.name}
                </Link>
              ),
            },
            { header: "Subject", accessor: "subject" },
            { header: "Students", accessor: "students" },
            { header: "Schedule", accessor: "schedule" },
            {
              header: "Actions",
              accessor: () => (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Attendance
                  </Button>
                </div>
              ),
            },
          ]}
          data={assignedClasses}
        />
      </Card>

      {/* Weekly Schedule */}
      <Card title="Weekly Schedule">
        <Table
          columns={[
            { header: "Day", accessor: "day" },
            { header: "Time", accessor: "time" },
            { header: "Class", accessor: "class" },
            { header: "Subject", accessor: "subject" },
            { header: "Room", accessor: "room" },
          ]}
          data={weeklySchedule}
        />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Assignments */}
        <Card title="Recent Assignments">
          <Table
            columns={[
              { header: "Title", accessor: "title" },
              { header: "Class", accessor: "class" },
              { header: "Due Date", accessor: "dueDate" },
              {
                header: "Submissions",
                accessor: (row) => (
                  <Badge
                    variant={
                      row.submitted.split("/")[0] ===
                      row.submitted.split("/")[1]
                        ? "success"
                        : "warning"
                    }
                  >
                    {row.submitted}
                  </Badge>
                ),
              },
            ]}
            data={recentAssignments}
          />
        </Card>

        {/* Upcoming Exams */}
        <Card title="Upcoming Exams">
          <Table
            columns={[
              { header: "Exam", accessor: "name" },
              { header: "Class", accessor: "class" },
              { header: "Date", accessor: "date" },
              { header: "Time", accessor: "time" },
              { header: "Duration", accessor: "duration" },
            ]}
            data={upcomingExams}
          />
        </Card>
      </div>
    </div>
  );
}
