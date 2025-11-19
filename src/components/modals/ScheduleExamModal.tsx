import { useState } from "react";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";

interface ScheduleExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (exam: ExamFormData) => void;
  initialData?: ExamFormData;
  isEditMode?: boolean;
}

export interface ExamFormData {
  name: string;
  subject: string;
  class: string;
  date: string;
  startTime: string;
  duration: string;
  totalMarks: number;
  instructions: string;
}

export default function ScheduleExamModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditMode = false,
}: ScheduleExamModalProps) {
  const [formData, setFormData] = useState<ExamFormData>({
    name: "",
    subject: "",
    class: "",
    date: "",
    startTime: "",
    duration: "",
    totalMarks: 100,
    instructions: "",
    ...initialData,
  });

  const [errors, setErrors] = useState<Partial<ExamFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "totalMarks" ? Number(value) : value,
    }));
    if (errors[name as keyof ExamFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Exam name is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.startTime) newErrors.startTime = "Start time is required";
    if (!formData.duration.trim()) newErrors.duration = "Duration is required";
    if (formData.totalMarks <= 0)
      newErrors.totalMarks = "Total marks must be greater than 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({
        name: "",
        subject: "",
        class: "",
        date: "",
        startTime: "",
        duration: "",
        totalMarks: 100,
        instructions: "",
      });
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      subject: "",
      class: "",
      date: "",
      startTime: "",
      duration: "",
      totalMarks: 100,
      instructions: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title={isEditMode ? "Edit Examination" : "Schedule Examination"}
      size="xl"
      footer={
        <>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {isEditMode ? "Update Exam" : "Schedule Exam"}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Exam Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-blue-200"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="e.g., Mid-Term Mathematics Exam"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
            )}
          </div>

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
              <option value="Grade 11A">Grade 11A</option>
              <option value="Grade 11B">Grade 11B</option>
            </select>
            {errors.class && (
              <p className="text-red-500 text-xs mt-1">{errors.class}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              Start Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.startTime ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.startTime && (
              <p className="text-red-500 text-xs mt-1">{errors.startTime}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Duration <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.duration ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="e.g., 2 hours"
            />
            {errors.duration && (
              <p className="text-red-500 text-xs mt-1">{errors.duration}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Total Marks <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="totalMarks"
            value={formData.totalMarks}
            onChange={handleChange}
            min="1"
            className={`w-full px-4 py-2 border ${
              errors.totalMarks ? "border-red-500" : "border-blue-200"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          {errors.totalMarks && (
            <p className="text-red-500 text-xs mt-1">
              {String(errors.totalMarks)}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Instructions
          </label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter exam instructions or special notes"
          />
        </div>
      </form>
    </Modal>
  );
}
