import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import ScheduleExamModal, {
  type ExamFormData,
} from "../../components/modals/ScheduleExamModal";
import AddMarksModal, {
  type MarksFormData,
} from "../../components/modals/AddMarksModal";
import { exams as initialExams } from "../../data/dummyData";

export default function ExamsList() {
  const authData = JSON.parse(localStorage.getItem("dangotech_auth") || "{}");
  const userRole = authData.role || "student";
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isMarksModalOpen, setIsMarksModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<{
    id: string;
    name: string;
    totalMarks: number;
  } | null>(null);
  const [exams, setExams] = useState(initialExams);

  const handleScheduleExam = (examData: ExamFormData) => {
    const newExam = {
      id: `E${String(exams.length + 1).padStart(3, "0")}`,
      name: examData.name,
      subject: examData.subject,
      class: examData.class,
      date: examData.date,
      startTime: examData.startTime,
      duration: examData.duration,
      totalMarks: examData.totalMarks,
      status: "upcoming" as const,
    };
    setExams([...exams, newExam]);
    alert("Exam scheduled successfully!");
  };

  const handleAddMarks = (marksData: MarksFormData) => {
    console.log("Marks added:", marksData);
    alert(
      `Marks recorded for ${marksData.studentMarks.length} students in ${marksData.examName}`
    );
    setSelectedExam(null);
  };

  const openMarksModal = (exam: any) => {
    setSelectedExam({
      id: exam.id,
      name: exam.name,
      totalMarks: exam.totalMarks || 100,
    });
    setIsMarksModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Examinations</h1>
          <p className="text-blue-600 mt-1">Manage all exams and tests</p>
        </div>
        {userRole !== "student" && userRole !== "parent" && (
          <Button
            onClick={() => setIsScheduleModalOpen(true)}
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
          >
            Schedule Exam
          </Button>
        )}
      </div>

      <ScheduleExamModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onSubmit={handleScheduleExam}
      />

      <AddMarksModal
        isOpen={isMarksModalOpen}
        onClose={() => {
          setIsMarksModalOpen(false);
          setSelectedExam(null);
        }}
        onSubmit={handleAddMarks}
        examInfo={selectedExam || undefined}
      />

      <Card>
        <Table
          columns={[
            {
              header: "Exam",
              accessor: (row) => (
                <Link
                  to={`/exams/${row.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {row.name}
                </Link>
              ),
            },
            {
              header: "Subject",
              accessor: "subject",
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
              header: "Start Time",
              accessor: (row) => row.startTime || "N/A",
            },
            {
              header: "Status",
              accessor: (row) => {
                const status = row.status;
                return (
                  <Badge
                    variant={
                      status === "completed"
                        ? "success"
                        : status === "upcoming"
                        ? "warning"
                        : "info"
                    }
                  >
                    {status}
                  </Badge>
                );
              },
            },
            ...(userRole === "teacher"
              ? [
                  {
                    header: "Actions",
                    accessor: (row: any) => (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openMarksModal(row)}
                      >
                        Add Marks
                      </Button>
                    ),
                  },
                ]
              : []),
          ]}
          data={exams}
        />
      </Card>
    </div>
  );
}
