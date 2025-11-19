import { useState } from "react";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";

interface AddAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (assignment: AssignmentFormData) => void;
}

export interface AssignmentFormData {
  title: string;
  subject: string;
  class: string;
  description: string;
  dueDate: string;
  totalMarks: number;
}

export default function AddAssignmentModal({
  isOpen,
  onClose,
  onSubmit,
}: AddAssignmentModalProps) {
  const [formData, setFormData] = useState<AssignmentFormData>({
    title: "",
    subject: "",
    class: "",
    description: "",
    dueDate: "",
    totalMarks: 100,
  });

  const [errors, setErrors] = useState<Partial<AssignmentFormData>>({});

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
    if (errors[name as keyof AssignmentFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.dueDate) newErrors.dueDate = "Due date is required";
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
        title: "",
        subject: "",
        class: "",
        description: "",
        dueDate: "",
        totalMarks: 100,
      });
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      subject: "",
      class: "",
      description: "",
      dueDate: "",
      totalMarks: 100,
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="Create Assignment"
      size="lg"
      footer={
        <>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create Assignment</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Assignment Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.title ? "border-red-500" : "border-blue-200"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="Enter assignment title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Due Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.dueDate ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.dueDate && (
              <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
            )}
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
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Description/Instructions
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter assignment description or instructions"
          />
        </div>
      </form>
    </Modal>
  );
}
