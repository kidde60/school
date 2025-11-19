import { useState } from "react";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";

interface AddClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (classData: ClassFormData) => void;
  initialData?: ClassFormData;
  isEditMode?: boolean;
}

export interface ClassFormData {
  name: string;
  subjects: string[];
  teacher: string;
  capacity: number;
  schedule: string;
  room: string;
}

export default function AddClassModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditMode = false,
}: AddClassModalProps) {
  const availableSubjects = [
    "Mathematics",
    "English",
    "Science",
    "History",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
  ];

  const [formData, setFormData] = useState<ClassFormData>(
    initialData || {
      name: "",
      subjects: [],
      teacher: "",
      capacity: 30,
      schedule: "",
      room: "",
    }
  );

  const [errors, setErrors] = useState<Partial<ClassFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "capacity" ? Number(value) : value,
    }));
    if (errors[name as keyof ClassFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
    if (errors.subjects) {
      setErrors((prev) => ({ ...prev, subjects: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Class name is required";
    if (formData.subjects.length === 0)
      newErrors.subjects = "At least one subject is required";
    if (!formData.teacher.trim()) newErrors.teacher = "Teacher is required";
    if (formData.capacity <= 0)
      newErrors.capacity = "Capacity must be greater than 0";
    if (!formData.schedule.trim()) newErrors.schedule = "Schedule is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({
        name: "",
        subjects: [],
        teacher: "",
        capacity: 30,
        schedule: "",
        room: "",
      });
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      subjects: [],
      teacher: "",
      capacity: 30,
      schedule: "",
      room: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      title={isEditMode ? "Edit Class" : "Add New Class"}
      onClose={handleCancel}
      isOpen={isOpen}
      size="lg"
      footer={
        <>
          <Button variant="outline" onClick={handleCancel}>
            <Button onClick={handleSubmit}>
              {isEditMode ? "Update Class" : "Add Class"}
            </Button>
          </Button>
          <Button onClick={handleSubmit}>Add Class</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Class Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="e.g., Grade 10A"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Teacher <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.teacher ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Enter teacher name"
            />
            {errors.teacher && (
              <p className="text-red-500 text-xs mt-1">{errors.teacher}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Subjects <span className="text-red-500">*</span>
          </label>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-2 p-4 border ${
              errors.subjects ? "border-red-500" : "border-blue-200"
            } rounded-lg`}
          >
            {availableSubjects.map((subject) => (
              <label
                key={subject}
                className="flex items-center space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded"
              >
                <input
                  type="checkbox"
                  checked={formData.subjects.includes(subject)}
                  onChange={() => handleSubjectToggle(subject)}
                  className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-blue-900">{subject}</span>
              </label>
            ))}
          </div>
          {errors.subjects && (
            <p className="text-red-500 text-xs mt-1">{errors.subjects}</p>
          )}
          {formData.subjects.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.subjects.map((subject) => (
                <span
                  key={subject}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
                >
                  {subject}
                  <button
                    type="button"
                    onClick={() => handleSubjectToggle(subject)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Capacity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              min="1"
              className={`w-full px-4 py-2 border ${
                errors.capacity ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.capacity && (
              <p className="text-red-500 text-xs mt-1">
                {String(errors.capacity)}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Schedule <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.schedule ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="e.g., Mon, Wed 9-10am"
            />
            {errors.schedule && (
              <p className="text-red-500 text-xs mt-1">{errors.schedule}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Room
            </label>
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Room 101"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
