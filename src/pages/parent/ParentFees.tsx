import Card from "../../components/shared/Card";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";

export default function ParentFees() {
  // Mock fee data for all children
  const childrenFees = [
    {
      childId: "S002",
      childName: "Bob Smith",
      class: "Grade 10A",
      fees: [
        {
          id: "F001",
          term: "Term 1 - 2025",
          totalAmount: 500000,
          paidAmount: 350000,
          balance: 150000,
          dueDate: "2025-12-01",
          status: "partial" as const,
        },
        {
          id: "F002",
          term: "Term 2 - 2025",
          totalAmount: 500000,
          paidAmount: 500000,
          balance: 0,
          dueDate: "2025-08-01",
          status: "paid" as const,
        },
      ],
    },
    {
      childId: "S006",
      childName: "Jane Smith",
      class: "Grade 8B",
      fees: [
        {
          id: "F003",
          term: "Term 1 - 2025",
          totalAmount: 450000,
          paidAmount: 450000,
          balance: 0,
          dueDate: "2025-12-01",
          status: "paid" as const,
        },
        {
          id: "F004",
          term: "Term 2 - 2025",
          totalAmount: 450000,
          paidAmount: 450000,
          balance: 0,
          dueDate: "2025-08-01",
          status: "paid" as const,
        },
      ],
    },
  ];

  // Payment history
  const paymentHistory = [
    {
      id: "P001",
      date: "2025-11-15",
      childName: "Bob Smith",
      amount: 200000,
      method: "Bank Transfer",
      reference: "TRX123456",
    },
    {
      id: "P002",
      date: "2025-11-01",
      childName: "Bob Smith",
      amount: 150000,
      method: "Mobile Money",
      reference: "MTN789012",
    },
    {
      id: "P003",
      date: "2025-09-15",
      childName: "Jane Smith",
      amount: 450000,
      method: "Bank Transfer",
      reference: "TRX234567",
    },
    {
      id: "P004",
      date: "2025-05-20",
      childName: "Bob Smith",
      amount: 500000,
      method: "Cash",
      reference: "CASH001",
    },
  ];

  const totalOutstanding = childrenFees.reduce(
    (sum, child) =>
      sum + child.fees.reduce((feeSum, fee) => feeSum + fee.balance, 0),
    0
  );

  const totalPaid = childrenFees.reduce(
    (sum, child) =>
      sum + child.fees.reduce((feeSum, fee) => feeSum + fee.paidAmount, 0),
    0
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Fee Management</h1>
          <p className="text-blue-600 mt-1">
            View and manage your children's school fees
          </p>
        </div>
        <Button
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
          Make Payment
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-2">Total Outstanding</p>
            <p className="text-3xl font-bold text-red-600">
              UGX {totalOutstanding.toLocaleString()}
            </p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-2">Total Paid This Year</p>
            <p className="text-3xl font-bold text-green-600">
              UGX {totalPaid.toLocaleString()}
            </p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-2">Children</p>
            <p className="text-3xl font-bold text-blue-900">
              {childrenFees.length}
            </p>
          </div>
        </Card>
      </div>

      {/* Fee Details by Child */}
      <div className="space-y-6">
        {childrenFees.map((child) => (
          <Card
            key={child.childId}
            title={`${child.childName} - ${child.class}`}
          >
            <div className="space-y-4">
              {child.fees.map((fee) => (
                <div
                  key={fee.id}
                  className="p-4 border border-blue-100 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        {fee.term}
                      </h4>
                      <p className="text-sm text-blue-600">
                        Due: {fee.dueDate}
                      </p>
                    </div>
                    <Badge
                      variant={
                        fee.status === "paid"
                          ? "success"
                          : fee.status === "partial"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {fee.status === "paid"
                        ? "Paid"
                        : fee.status === "partial"
                        ? "Partial Payment"
                        : "Pending"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-blue-600">Total Amount</p>
                      <p className="font-semibold text-blue-900">
                        UGX {fee.totalAmount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-600">Paid</p>
                      <p className="font-semibold text-green-600">
                        UGX {fee.paidAmount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-600">Balance</p>
                      <p
                        className={`font-semibold ${
                          fee.balance > 0 ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        UGX {fee.balance.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {fee.balance > 0 && (
                    <div className="mt-3 flex gap-2">
                      <Button size="sm">Pay Now</Button>
                      <Button size="sm" variant="outline">
                        View Invoice
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Payment History */}
      <Card title="Recent Payment History">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-100">
                <th className="text-left py-3 px-4 text-sm font-semibold text-blue-900">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-blue-900">
                  Child
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-blue-900">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-blue-900">
                  Method
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-blue-900">
                  Reference
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-blue-50 hover:bg-blue-50"
                >
                  <td className="py-3 px-4 text-sm text-blue-900">
                    {payment.date}
                  </td>
                  <td className="py-3 px-4 text-sm text-blue-900">
                    {payment.childName}
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-green-600">
                    UGX {payment.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-sm text-blue-600">
                    {payment.method}
                  </td>
                  <td className="py-3 px-4 text-sm text-blue-500 font-mono">
                    {payment.reference}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
