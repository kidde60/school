import { useState } from "react";
import Card from "../../components/shared/Card";
import Button from "../../components/shared/Button";
import RecordPaymentModal from "../../components/modals/RecordPaymentModal";
import type { PaymentFormData } from "../../components/modals/RecordPaymentModal";

export default function FeeManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRecordPayment = (paymentData: PaymentFormData) => {
    console.log("Payment recorded:", paymentData);
    alert(
      `Payment of UGX ${paymentData.amount.toLocaleString()} recorded for ${
        paymentData.studentName
      }`
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Fee Management</h1>
          <p className="text-blue-600 mt-1">Manage student fees and payments</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Record Payment</Button>
      </div>

      <Card title="Fee Overview">
        <div className="text-center py-12">
          <p className="text-blue-600">Fee management interface will be here</p>
        </div>
      </Card>

      <RecordPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRecordPayment}
      />
    </div>
  );
}
