import { useState } from "react";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";

interface RecordPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payment: PaymentFormData) => void;
  studentName?: string;
}

export interface PaymentFormData {
  studentId: string;
  studentName: string;
  amount: number;
  paymentMethod: string;
  referenceNumber: string;
  term: string;
  notes: string;
}

export default function RecordPaymentModal({
  isOpen,
  onClose,
  onSubmit,
  studentName,
}: RecordPaymentModalProps) {
  const [formData, setFormData] = useState<PaymentFormData>({
    studentId: "",
    studentName: studentName || "",
    amount: 0,
    paymentMethod: "",
    referenceNumber: "",
    term: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<PaymentFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
    if (errors[name as keyof PaymentFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentId.trim())
      newErrors.studentId = "Student ID is required";
    if (!formData.studentName.trim())
      newErrors.studentName = "Student name is required";
    if (formData.amount <= 0)
      newErrors.amount = "Amount must be greater than 0";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Payment method is required";
    if (!formData.term) newErrors.term = "Term is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({
        studentId: "",
        studentName: "",
        amount: 0,
        paymentMethod: "",
        referenceNumber: "",
        term: "",
        notes: "",
      });
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      studentId: "",
      studentName: studentName || "",
      amount: 0,
      paymentMethod: "",
      referenceNumber: "",
      term: "",
      notes: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="Record Payment"
      size="lg"
      footer={
        <>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Record Payment</Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Student ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.studentId ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="S001"
            />
            {errors.studentId && (
              <p className="text-red-500 text-xs mt-1">{errors.studentId}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.studentName ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Enter student name"
            />
            {errors.studentName && (
              <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Amount (UGX) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="1"
              className={`w-full px-4 py-2 border ${
                errors.amount ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="0"
            />
            {errors.amount && (
              <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Term <span className="text-red-500">*</span>
            </label>
            <select
              name="term"
              value={formData.term}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.term ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select term</option>
              <option value="Term 1 - 2025">Term 1 - 2025</option>
              <option value="Term 2 - 2025">Term 2 - 2025</option>
              <option value="Term 3 - 2025">Term 3 - 2025</option>
            </select>
            {errors.term && (
              <p className="text-red-500 text-xs mt-1">{errors.term}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.paymentMethod ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            >
              <option value="">Select method</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Mobile Money">Mobile Money</option>
              <option value="Cheque">Cheque</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-xs mt-1">
                {errors.paymentMethod}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Reference Number
            </label>
            <input
              type="text"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="TRX123456"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Additional notes or remarks"
          />
        </div>
      </form>
    </Modal>
  );
}
