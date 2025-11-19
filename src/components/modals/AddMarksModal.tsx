import { useState } from "react";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";

interface AddMarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (marks: MarksFormData) => void;
  examInfo?: {
    id: string;
    name: string;
    totalMarks: number;
  };
}

export interface MarksFormData {
  examId: string;
  examName: string;
  studentMarks: StudentMark[];
}

export interface StudentMark {
  studentId: string;
  studentName: string;
  marksObtained: number;
  remarks: string;
}

export default function AddMarksModal({
  isOpen,
  onClose,
  onSubmit,
  examInfo,
}: AddMarksModalProps) {
  // Mock student data - in real app, this would be fetched based on exam's class
  const mockStudents = [
    { id: "S001", name: "John Doe" },
    { id: "S002", name: "Jane Smith" },
    { id: "S003", name: "Michael Johnson" },
    { id: "S004", name: "Emily Davis" },
    { id: "S005", name: "David Wilson" },
  ];

  const [studentMarks, setStudentMarks] = useState<StudentMark[]>(
    mockStudents.map((student) => ({
      studentId: student.id,
      studentName: student.name,
      marksObtained: 0,
      remarks: "",
    }))
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleMarkChange = (studentId: string, value: string) => {
    const marks = parseFloat(value) || 0;
    setStudentMarks((prev) =>
      prev.map((sm) =>
        sm.studentId === studentId
          ? {
              ...sm,
              marksObtained: marks,
              remarks: getRemarkByMarks(marks, examInfo?.totalMarks || 100),
            }
          : sm
      )
    );
    if (errors[studentId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[studentId];
        return newErrors;
      });
    }
  };

  const getRemarkByMarks = (marks: number, totalMarks: number): string => {
    const percentage = (marks / totalMarks) * 100;
    if (percentage >= 90) return "Excellent";
    if (percentage >= 80) return "Very Good";
    if (percentage >= 70) return "Good";
    if (percentage >= 60) return "Satisfactory";
    if (percentage >= 50) return "Pass";
    return "Needs Improvement";
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    studentMarks.forEach((sm) => {
      if (sm.marksObtained < 0) {
        newErrors[sm.studentId] = "Marks cannot be negative";
      }
      if (sm.marksObtained > (examInfo?.totalMarks || 100)) {
        newErrors[sm.studentId] = `Marks cannot exceed ${
          examInfo?.totalMarks || 100
        }`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        examId: examInfo?.id || "",
        examName: examInfo?.name || "",
        studentMarks,
      });
      handleCancel();
    }
  };

  const handleCancel = () => {
    setStudentMarks(
      mockStudents.map((student) => ({
        studentId: student.id,
        studentName: student.name,
        marksObtained: 0,
        remarks: "",
      }))
    );
    setErrors({});
    onClose();
  };

  const calculateStatistics = () => {
    const marks = studentMarks.map((sm) => sm.marksObtained);
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = marks.length > 0 ? total / marks.length : 0;
    const highest = Math.max(...marks);
    const lowest = Math.min(...marks);
    const passed = marks.filter(
      (mark) => (mark / (examInfo?.totalMarks || 100)) * 100 >= 50
    ).length;

    return { average, highest, lowest, passed, total: marks.length };
  };

  const stats = calculateStatistics();

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title={`Add Marks - ${examInfo?.name || "Exam"}`}
      size="xl"
      footer={
        <>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Marks</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Exam Info */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-blue-600">Total Marks:</span>{" "}
              <span className="font-semibold text-blue-900">
                {examInfo?.totalMarks || 100}
              </span>
            </div>
            <div>
              <span className="text-blue-600">Students:</span>{" "}
              <span className="font-semibold text-blue-900">
                {studentMarks.length}
              </span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-green-50 p-3 rounded text-center">
            <div className="text-lg font-bold text-green-700">
              {stats.average.toFixed(1)}
            </div>
            <div className="text-xs text-green-600">Average</div>
          </div>
          <div className="bg-blue-50 p-3 rounded text-center">
            <div className="text-lg font-bold text-blue-700">
              {stats.highest}
            </div>
            <div className="text-xs text-blue-600">Highest</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded text-center">
            <div className="text-lg font-bold text-yellow-700">
              {stats.lowest}
            </div>
            <div className="text-xs text-yellow-600">Lowest</div>
          </div>
          <div className="bg-purple-50 p-3 rounded text-center">
            <div className="text-lg font-bold text-purple-700">
              {stats.passed}
            </div>
            <div className="text-xs text-purple-600">Passed</div>
          </div>
          <div className="bg-red-50 p-3 rounded text-center">
            <div className="text-lg font-bold text-red-700">
              {stats.total - stats.passed}
            </div>
            <div className="text-xs text-red-600">Failed</div>
          </div>
        </div>

        {/* Student Marks Table */}
        <div className="border border-blue-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto max-h-96">
            <table className="w-full">
              <thead className="bg-blue-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase">
                    Student ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase">
                    Marks Obtained
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase">
                    Percentage
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                {studentMarks.map((student) => {
                  const percentage =
                    (student.marksObtained / (examInfo?.totalMarks || 100)) *
                    100;
                  return (
                    <tr
                      key={student.studentId}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-blue-600">
                        {student.studentId}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">
                        {student.studentName}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min="0"
                            max={examInfo?.totalMarks || 100}
                            step="0.5"
                            value={student.marksObtained}
                            onChange={(e) =>
                              handleMarkChange(
                                student.studentId,
                                e.target.value
                              )
                            }
                            className={`w-24 px-3 py-1.5 border ${
                              errors[student.studentId]
                                ? "border-red-500"
                                : "border-blue-200"
                            } rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                            placeholder="0"
                          />
                          <span className="text-sm text-blue-600">
                            / {examInfo?.totalMarks || 100}
                          </span>
                        </div>
                        {errors[student.studentId] && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors[student.studentId]}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            percentage >= 50
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {percentage.toFixed(1)}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-blue-700">
                        {student.remarks || "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              setStudentMarks((prev) =>
                prev.map((sm) => ({
                  ...sm,
                  marksObtained: examInfo?.totalMarks || 100,
                  remarks: "Excellent",
                }))
              )
            }
            type="button"
          >
            Mark All Full
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              setStudentMarks((prev) =>
                prev.map((sm) => ({
                  ...sm,
                  marksObtained: 0,
                  remarks: "",
                }))
              )
            }
            type="button"
          >
            Clear All
          </Button>
        </div>
      </form>
    </Modal>
  );
}
