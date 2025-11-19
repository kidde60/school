import Card from "../../components/shared/Card";

export default function PaymentHistory() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Payment History</h1>
      <p className="text-blue-600">View all payment transactions</p>

      <Card title="Recent Payments">
        <div className="text-center py-12">
          <p className="text-blue-600">
            Payment history will be displayed here
          </p>
        </div>
      </Card>
    </div>
  );
}
