import { useState } from "react";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (student: StudentFormData) => void;
  initialData?: StudentFormData;
  isEditMode?: boolean;
}

export interface StudentFormData {
  name: string;
  email: string;
  class: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  dateOfBirth: string;
  gender: string;
  address: string;
}

export default function AddStudentModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditMode = false,
}: AddStudentModalProps) {
  const [formData, setFormData] = useState<StudentFormData>(
    initialData || {
      name: "",
      email: "",
      class: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      dateOfBirth: "",
      gender: "",
      address: "",
    }
  );

  const [errors, setErrors] = useState<Partial<StudentFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof StudentFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<StudentFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.parentName.trim())
      newErrors.parentName = "Parent name is required";
    if (!formData.parentPhone.trim())
      newErrors.parentPhone = "Parent phone is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        name: "",
        email: "",
        class: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        dateOfBirth: "",
        gender: "",
        address: "",
      });
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      class: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      dateOfBirth: "",
      gender: "",
      address: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title={isEditMode ? "Edit Student" : "Add New Student"}
      size="xl"
      footer={
        <>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {isEditMode ? "Update Student" : "Add Student"}
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Information */}
        <div>
          <h4 className="text-lg font-semibold text-blue-900 mb-4">
            Student Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-blue-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Enter student name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-blue-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="student@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
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

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.dateOfBirth ? "border-red-500" : "border-blue-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.gender ? "border-red-500" : "border-blue-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter address"
              />
            </div>
          </div>
        </div>

        {/* Parent/Guardian Information */}
        <div className="border-t border-blue-100 pt-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-4">
            Parent/Guardian Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Parent Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.parentName ? "border-red-500" : "border-blue-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Enter parent name"
              />
              {errors.parentName && (
                <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Parent Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.parentPhone ? "border-red-500" : "border-blue-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="+256700000000"
              />
              {errors.parentPhone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.parentPhone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Parent Email
              </label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="parent@example.com"
              />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
