import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import StatsCard from "../../components/shared/StatsCard";
import { assignments } from "../../data/dummyData";

export default function AssignmentDetails() {
  const { id } = useParams();
  const assignment = assignments.find((a) => a.id === id);
  const authData = JSON.parse(localStorage.getItem("dangotech_auth") || "{}");
  const userRole = authData.role || "student";

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if (!assignment) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Assignment not found</p>
        <Link
          to="/assignments"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Assignments
        </Link>
      </div>
    );
  }

  // Mock submission data
  const submissions = [
    {
      id: "S001",
      studentName: "Alice Johnson",
      studentId: "S001",
      submittedDate: "2024-03-10 10:30 AM",
      status: "graded",
      grade: "85/100",
      feedback: "Good work!",
    },
    {
      id: "S002",
      studentName: "Bob Smith",
      studentId: "S002",
      submittedDate: "2024-03-12 2:15 PM",
      status: "graded",
      grade: "92/100",
      feedback: "Excellent!",
    },
    {
      id: "S003",
      studentName: "Carol White",
      studentId: "S003",
      submittedDate: "2024-03-14 9:00 AM",
      status: "submitted",
      grade: "-",
      feedback: "-",
    },
    {
      id: "S004",
      studentName: "David Brown",
      studentId: "S004",
      submittedDate: "-",
      status: "pending",
      grade: "-",
      feedback: "-",
    },
    {
      id: "S005",
      studentName: "Eve Davis",
      studentId: "S005",
      submittedDate: "2024-03-13 4:45 PM",
      status: "submitted",
      grade: "-",
      feedback: "-",
    },
  ];

  const totalStudents = 30;
  const submitted = submissions.filter((s) => s.status !== "pending").length;
  const graded = submissions.filter((s) => s.status === "graded").length;
  const pending = totalStudents - submitted;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmitAssignment = () => {
    if (selectedFile) {
      alert(`Assignment submitted: ${selectedFile.name}`);
      setSelectedFile(null);
    } else {
      alert("Please select a file to submit");
    }
  };

  const handleGradeSubmission = (studentName: string) => {
    const grade = prompt(`Enter grade for ${studentName} (0-100):`);
    if (grade) {
      alert(`Grade ${grade} recorded for ${studentName}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/assignments"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Assignments
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">
            {assignment.title}
          </h1>
          <p className="text-blue-600 mt-1">
            {assignment.subject} • {assignment.class}
          </p>
        </div>
        {userRole === "teacher" && (
          <div className="flex gap-3">
            <Button variant="outline">Edit Assignment</Button>
            <Button>Download All Submissions</Button>
          </div>
        )}
      </div>

      {/* Stats Overview */}
      {userRole === "teacher" && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            title="Submitted"
            value={submitted.toString()}
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
            trend={{ value: 5, isPositive: true }}
          />
          <StatsCard
            title="Graded"
            value={graded.toString()}
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            }
          />
          <StatsCard
            title="Pending"
            value={pending.toString()}
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
            trend={{ value: 3, isPositive: false }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Assignment Details">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Due Date</p>
              <p className="font-semibold text-blue-900">
                {assignment.dueDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Subject</p>
              <p className="font-semibold text-blue-900">
                {assignment.subject}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Class</p>
              <p className="font-semibold text-blue-900">{assignment.class}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Total Marks</p>
              <p className="font-semibold text-blue-900">100</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Status</p>
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
          </div>
        </Card>

        <Card title="Instructions">
          <div className="space-y-3">
            <p className="text-sm text-blue-900">
              Complete all exercises from Chapter 5. Show all working and
              provide detailed explanations for each solution. Submit your work
              in PDF format.
            </p>
            <div className="mt-4">
              <p className="text-sm text-blue-600 mb-2">Attachments:</p>
              <Button variant="outline" size="sm" className="w-full">
                📄 Assignment_Instructions.pdf
              </Button>
            </div>
          </div>
        </Card>

        {userRole === "student" ? (
          <Card title="Submit Assignment">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-blue-600 mb-2">Upload Your Work</p>
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="w-full text-sm text-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  accept=".pdf,.doc,.docx"
                />
                {selectedFile && (
                  <p className="text-sm text-blue-600 mt-2">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>
              <Button
                className="w-full mt-4"
                onClick={handleSubmitAssignment}
                disabled={!selectedFile}
              >
                Submit Assignment
              </Button>
              <p className="text-xs text-blue-600 text-center">
                Accepted formats: PDF, DOC, DOCX
              </p>
            </div>
          </Card>
        ) : (
          <Card title="Quick Actions">
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Edit Assignment
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Send Reminder to Students
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Export Grades
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Delete Assignment
              </Button>
            </div>
          </Card>
        )}
      </div>

      {/* Submissions Table (Teacher View) */}
      {userRole === "teacher" && (
        <Card title="Student Submissions">
          <Table
            columns={[
              { header: "Student ID", accessor: "studentId" },
              {
                header: "Student Name",
                accessor: (row) => (
                  <Link
                    to={`/students/${row.studentId}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    {row.studentName}
                  </Link>
                ),
              },
              { header: "Submitted Date", accessor: "submittedDate" },
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
              {
                header: "Actions",
                accessor: (row) => (
                  <div className="flex gap-2">
                    {row.status !== "pending" && (
                      <>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleGradeSubmission(row.studentName)}
                        >
                          {row.status === "graded" ? "Re-grade" : "Grade"}
                        </Button>
                      </>
                    )}
                    {row.status === "pending" && (
                      <Badge variant="warning">Not Submitted</Badge>
                    )}
                  </div>
                ),
              },
            ]}
            data={submissions}
          />
        </Card>
      )}

      {/* Student's Own Submission View */}
      {userRole === "student" && (
        <Card title="Your Submission">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-600">Submission Status</p>
                <Badge variant="success">Submitted</Badge>
              </div>
              <div>
                <p className="text-sm text-blue-600">Submitted On</p>
                <p className="font-semibold text-blue-900">
                  2024-03-10 10:30 AM
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-600">Grade</p>
                <p className="font-semibold text-blue-900 text-xl">85/100</p>
              </div>
              <div>
                <p className="text-sm text-blue-600">Feedback</p>
                <p className="font-semibold text-blue-900">
                  Good work! Keep it up.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="outline">View Submission</Button>
              <Button variant="outline">Resubmit</Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
