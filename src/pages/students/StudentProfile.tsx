import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import StatsCard from "../../components/shared/StatsCard";
import { students } from "../../data/dummyData";

export default function StudentProfile() {
  const { id } = useParams();
  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Student not found</p>
        <Link
          to="/students"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Students
        </Link>
      </div>
    );
  }

  // Mock data for student's academic records
  const studentAssignments = [
    {
      id: "A001",
      title: "Math Assignment 1",
      subject: "Mathematics",
      dueDate: "2024-03-15",
      status: "submitted",
      grade: "85/100",
    },
    {
      id: "A002",
      title: "Science Project",
      subject: "Physics",
      dueDate: "2024-03-20",
      status: "graded",
      grade: "92/100",
    },
    {
      id: "A003",
      title: "English Essay",
      subject: "English",
      dueDate: "2024-03-25",
      status: "pending",
      grade: "-",
    },
  ];

  const studentExams = [
    {
      id: "E001",
      name: "Mid-Term Mathematics",
      subject: "Mathematics",
      date: "2024-02-15",
      marks: "85/100",
      grade: "A",
    },
    {
      id: "E002",
      name: "Physics Quiz",
      subject: "Physics",
      date: "2024-02-20",
      marks: "78/100",
      grade: "B+",
    },
    {
      id: "E003",
      name: "English Literature",
      subject: "English",
      date: "2024-02-25",
      marks: "90/100",
      grade: "A",
    },
  ];

  const attendanceHistory = [
    { date: "2024-03-01", status: "Present", subject: "Mathematics" },
    { date: "2024-03-01", status: "Present", subject: "Physics" },
    { date: "2024-03-02", status: "Late", subject: "English" },
    { date: "2024-03-03", status: "Present", subject: "Mathematics" },
    { date: "2024-03-04", status: "Absent", subject: "Chemistry" },
  ];

  const feePayments = [
    {
      id: "P001",
      term: "Term 1",
      amount: 500000,
      paid: 500000,
      balance: 0,
      date: "2024-01-15",
      status: "Paid",
    },
    {
      id: "P002",
      term: "Term 2",
      amount: 500000,
      paid: 300000,
      balance: 200000,
      date: "2024-04-10",
      status: "Partial",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/students"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Students
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">{student.name}</h1>
          <p className="text-blue-600 mt-1">
            {student.class} • {student.id}
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
          title="Overall Grade"
          value={student.grade || "A"}
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          }
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Attendance"
          value={`${student.attendance || 95}%`}
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
        <StatsCard
          title="Assignments"
          value="12/15"
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
        <StatsCard
          title="Fee Balance"
          value={`UGX ${(student.feeBalance || 0).toLocaleString()}`}
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
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
          trend={
            student.feeBalance > 0
              ? { value: 10, isPositive: false }
              : undefined
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Personal Information">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Email</p>
              <p className="font-semibold text-blue-900">{student.email}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Class</p>
              <p className="font-semibold text-blue-900">{student.class}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Parent/Guardian</p>
              <p className="font-semibold text-blue-900">
                {student.parentName || "John Doe"}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Parent Contact</p>
              <p className="font-semibold text-blue-900">
                {student.parentPhone || "+256 700 000 000"}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Status</p>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
        </Card>

        <Card title="Academic Performance">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Overall Grade</p>
              <p className="font-semibold text-blue-900 text-2xl">
                {student.grade || "A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Attendance Rate</p>
              <p className="font-semibold text-blue-900">
                {student.attendance || 95}%
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Class Rank</p>
              <p className="font-semibold text-blue-900">5/42</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Performance Trend</p>
              <Badge variant="success">Improving</Badge>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              View Timetable
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Download Report Card
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Contact Parent
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Record Payment
            </Button>
          </div>
        </Card>
      </div>

      {/* Assignments */}
      <Card title="Recent Assignments">
        <Table
          columns={[
            { header: "ID", accessor: "id" },
            { header: "Title", accessor: "title" },
            { header: "Subject", accessor: "subject" },
            { header: "Due Date", accessor: "dueDate" },
            {
              header: "Status",
              accessor: (row) => (
                <Badge
                  variant={
                    row.status === "graded"
                      ? "success"
                      : row.status === "submitted"
                      ? "info"
                      : "warning"
                  }
                >
                  {row.status}
                </Badge>
              ),
            },
            { header: "Grade", accessor: "grade" },
          ]}
          data={studentAssignments}
        />
      </Card>

      {/* Exam Results */}
      <Card title="Exam Results">
        <Table
          columns={[
            { header: "Exam", accessor: "name" },
            { header: "Subject", accessor: "subject" },
            { header: "Date", accessor: "date" },
            { header: "Marks", accessor: "marks" },
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
          data={studentExams}
        />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attendance History */}
        <Card title="Recent Attendance">
          <Table
            columns={[
              { header: "Date", accessor: "date" },
              { header: "Subject", accessor: "subject" },
              {
                header: "Status",
                accessor: (row) => (
                  <Badge
                    variant={
                      row.status === "Present"
                        ? "success"
                        : row.status === "Late"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {row.status}
                  </Badge>
                ),
              },
            ]}
            data={attendanceHistory}
          />
        </Card>

        {/* Fee Payments */}
        <Card title="Fee Payment History">
          <Table
            columns={[
              { header: "Term", accessor: "term" },
              {
                header: "Amount",
                accessor: (row) => `UGX ${row.amount.toLocaleString()}`,
              },
              {
                header: "Paid",
                accessor: (row) => `UGX ${row.paid.toLocaleString()}`,
              },
              {
                header: "Balance",
                accessor: (row) => `UGX ${row.balance.toLocaleString()}`,
              },
              {
                header: "Status",
                accessor: (row) => (
                  <Badge
                    variant={
                      row.status === "Paid"
                        ? "success"
                        : row.status === "Partial"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {row.status}
                  </Badge>
                ),
              },
            ]}
            data={feePayments}
          />
        </Card>
      </div>
    </div>
  );
}
