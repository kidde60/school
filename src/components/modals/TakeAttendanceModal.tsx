import { useState } from "react";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";

interface TakeAttendanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (attendance: AttendanceFormData) => void;
  initialData?: AttendanceFormData;
  isEditMode?: boolean;
}

export interface AttendanceFormData {
  class: string;
  date: string;
  subject: string;
  period: string;
  students: StudentAttendance[];
}

export interface StudentAttendance {
  id: string;
  name: string;
  status: "Present" | "Absent" | "Late" | "Excused";
}

export default function TakeAttendanceModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditMode = false,
}: TakeAttendanceModalProps) {
  // Mock student data - in real app, this would be fetched based on class selection
  const mockStudents: StudentAttendance[] = [
    { id: "S001", name: "John Doe", status: "Present" },
    { id: "S002", name: "Jane Smith", status: "Present" },
    { id: "S003", name: "Michael Johnson", status: "Present" },
    { id: "S004", name: "Emily Davis", status: "Present" },
    { id: "S005", name: "David Wilson", status: "Present" },
  ];

  const [formData, setFormData] = useState({
    class: initialData?.class || "",
    date: initialData?.date || new Date().toISOString().split("T")[0],
    subject: initialData?.subject || "",
    period: initialData?.period || "",
  });

  const [students, setStudents] = useState<StudentAttendance[]>(
    initialData?.students || mockStudents
  );
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleStatusChange = (
    studentId: string,
    status: "Present" | "Absent" | "Late" | "Excused"
  ) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, status } : student
      )
    );
  };

  const markAll = (status: "Present" | "Absent") => {
    setStudents((prev) => prev.map((student) => ({ ...student, status })));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.period) newErrors.period = "Period is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ ...formData, students });
      handleCancel();
    }
  };

  const handleCancel = () => {
    setFormData({
      class: "",
      date: new Date().toISOString().split("T")[0],
      subject: "",
      period: "",
    });
    setStudents(mockStudents.map((s) => ({ ...s, status: "Present" })));
    setErrors({});
    onClose();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-700";
      case "Absent":
        return "bg-red-100 text-red-700";
      case "Late":
        return "bg-yellow-100 text-yellow-700";
      case "Excused":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const attendanceSummary = {
    present: students.filter((s) => s.status === "Present").length,
    absent: students.filter((s) => s.status === "Absent").length,
    late: students.filter((s) => s.status === "Late").length,
    excused: students.filter((s) => s.status === "Excused").length,
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title={isEditMode ? "Edit Attendance" : "Take Attendance"}
      size="xl"
      footer={
        <>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Attendance</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.class ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select class</option>
              <option value="Grade 8A">Grade 8A</option>
              <option value="Grade 8B">Grade 8B</option>
              <option value="Grade 9A">Grade 9A</option>
              <option value="Grade 9B">Grade 9B</option>
              <option value="Grade 10A">Grade 10A</option>
              <option value="Grade 10B">Grade 10B</option>
            </select>
            {errors.class && (
              <p className="text-red-500 text-xs mt-1">{errors.class}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.date ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.subject ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Geography">Geography</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Period <span className="text-red-500">*</span>
            </label>
            <select
              name="period"
              value={formData.period}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.period ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select period</option>
              <option value="1">Period 1 (8:00 AM - 9:00 AM)</option>
              <option value="2">Period 2 (9:00 AM - 10:00 AM)</option>
              <option value="3">Period 3 (10:00 AM - 11:00 AM)</option>
              <option value="4">Period 4 (11:00 AM - 12:00 PM)</option>
              <option value="5">Period 5 (1:00 PM - 2:00 PM)</option>
              <option value="6">Period 6 (2:00 PM - 3:00 PM)</option>
            </select>
            {errors.period && (
              <p className="text-red-500 text-xs mt-1">{errors.period}</p>
            )}
          </div>
        </div>

        <div className="border-t border-blue-100 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-blue-900">
              Student Attendance
            </h4>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => markAll("Present")}
                type="button"
              >
                Mark All Present
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => markAll("Absent")}
                type="button"
              >
                Mark All Absent
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-green-50 p-2 rounded text-center">
              <div className="text-2xl font-bold text-green-700">
                {attendanceSummary.present}
              </div>
              <div className="text-xs text-green-600">Present</div>
            </div>
            <div className="bg-red-50 p-2 rounded text-center">
              <div className="text-2xl font-bold text-red-700">
                {attendanceSummary.absent}
              </div>
              <div className="text-xs text-red-600">Absent</div>
            </div>
            <div className="bg-yellow-50 p-2 rounded text-center">
              <div className="text-2xl font-bold text-yellow-700">
                {attendanceSummary.late}
              </div>
              <div className="text-xs text-yellow-600">Late</div>
            </div>
            <div className="bg-blue-50 p-2 rounded text-center">
              <div className="text-2xl font-bold text-blue-700">
                {attendanceSummary.excused}
              </div>
              <div className="text-xs text-blue-600">Excused</div>
            </div>
          </div>

          {/* Student List */}
          <div className="max-h-64 overflow-y-auto border border-blue-200 rounded-lg">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-3 border-b border-blue-100 hover:bg-blue-50"
              >
                <div>
                  <div className="font-medium text-blue-900">
                    {student.name}
                  </div>
                  <div className="text-sm text-blue-600">{student.id}</div>
                </div>
                <div className="flex gap-2">
                  {["Present", "Absent", "Late", "Excused"].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() =>
                        handleStatusChange(
                          student.id,
                          status as "Present" | "Absent" | "Late" | "Excused"
                        )
                      }
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        student.status === status
                          ? getStatusColor(status)
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </Modal>
  );
}
