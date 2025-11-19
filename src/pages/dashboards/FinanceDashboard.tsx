import StatsCard from "../../components/shared/StatsCard";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { students } from "../../data/dummyData";

export default function FinanceDashboard() {
  // Mock financial data
  const financialSummary = {
    totalRevenue: 15750000,
    totalCollected: 12500000,
    totalOutstanding: 3250000,
    monthlyTarget: 5000000,
    monthlyCollected: 4200000,
  };

  // Recent transactions
  const recentTransactions = [
    {
      id: "TXN001",
      student: "Alice Johnson",
      amount: 500000,
      method: "Bank Transfer",
      date: "2025-11-19",
      status: "completed" as const,
      reference: "BT20251119001",
    },
    {
      id: "TXN002",
      student: "Emma Davis",
      amount: 250000,
      method: "Mobile Money",
      date: "2025-11-19",
      status: "completed" as const,
      reference: "MM20251119002",
    },
    {
      id: "TXN003",
      student: "Carol White",
      amount: 500000,
      method: "Cash",
      date: "2025-11-18",
      status: "completed" as const,
      reference: "CSH20251118003",
    },
    {
      id: "TXN004",
      student: "Bob Smith",
      amount: 150000,
      method: "Bank Transfer",
      date: "2025-11-18",
      status: "pending" as const,
      reference: "BT20251118004",
    },
  ];

  // Outstanding fees by class
  const outstandingByClass = [
    { class: "Grade 10A", students: 5, totalDue: 750000, percentage: 23 },
    { class: "Grade 10B", students: 3, totalDue: 450000, percentage: 14 },
    { class: "Grade 9A", students: 8, totalDue: 1200000, percentage: 37 },
    { class: "Grade 9B", students: 4, totalDue: 850000, percentage: 26 },
  ];

  // Expenditure breakdown
  const expenditures = [
    {
      category: "Salaries",
      budgeted: 8000000,
      spent: 7500000,
      remaining: 500000,
    },
    {
      category: "Utilities",
      budgeted: 1500000,
      spent: 1200000,
      remaining: 300000,
    },
    {
      category: "Supplies",
      budgeted: 2000000,
      spent: 1800000,
      remaining: 200000,
    },
    {
      category: "Maintenance",
      budgeted: 1000000,
      spent: 750000,
      remaining: 250000,
    },
  ];

  // Students with outstanding fees
  const studentsWithDues = students.filter((s) => s.feeBalance > 0);

  const collectionRate =
    (financialSummary.totalCollected / financialSummary.totalRevenue) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Finance Dashboard
          </h1>
          <p className="text-blue-600 mt-1">
            Financial overview and fee management
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          >
            Export Report
          </Button>
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            }
          >
            Record Payment
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value={`UGX ${(financialSummary.totalRevenue / 1000000).toFixed(1)}M`}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          color="blue"
        />
        <StatsCard
          title="Collected"
          value={`UGX ${(financialSummary.totalCollected / 1000000).toFixed(
            1
          )}M`}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          trend={{ value: 8, isPositive: true }}
          color="green"
        />
        <StatsCard
          title="Outstanding"
          value={`UGX ${(financialSummary.totalOutstanding / 1000000).toFixed(
            1
          )}M`}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          color="red"
        />
        <StatsCard
          title="Collection Rate"
          value={`${collectionRate.toFixed(1)}%`}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          }
          trend={{ value: 5, isPositive: true }}
          color="green"
        />
      </div>

      {/* Monthly Progress */}
      <Card title="Monthly Collection Progress">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-blue-900 font-semibold">
              Target: UGX{" "}
              {(financialSummary.monthlyTarget / 1000000).toFixed(1)}M
            </span>
            <span className="text-blue-900 font-semibold">
              Collected: UGX{" "}
              {(financialSummary.monthlyCollected / 1000000).toFixed(1)}M (
              {(
                (financialSummary.monthlyCollected /
                  financialSummary.monthlyTarget) *
                100
              ).toFixed(0)}
              %)
            </span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-6">
            <div
              className="bg-blue-600 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
              style={{
                width: `${
                  (financialSummary.monthlyCollected /
                    financialSummary.monthlyTarget) *
                  100
                }%`,
              }}
            >
              <span className="text-white text-xs font-semibold">
                {(
                  (financialSummary.monthlyCollected /
                    financialSummary.monthlyTarget) *
                  100
                ).toFixed(0)}
                %
              </span>
            </div>
          </div>
          <div className="text-sm text-blue-600">
            Remaining: UGX{" "}
            {(
              (financialSummary.monthlyTarget -
                financialSummary.monthlyCollected) /
              1000000
            ).toFixed(1)}
            M
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card
          title="Recent Transactions"
          actions={
            <Button variant="outline" size="sm">
              View All
            </Button>
          }
        >
          <div className="space-y-3">
            {recentTransactions.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between p-4 border border-blue-100 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900">{txn.student}</h4>
                  <p className="text-sm text-blue-600">{txn.method}</p>
                  <p className="text-xs text-blue-500 mt-1">
                    {txn.date} • {txn.reference}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-900">
                    {(txn.amount / 1000).toFixed(0)}K
                  </div>
                  <Badge
                    variant={txn.status === "completed" ? "success" : "warning"}
                  >
                    {txn.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Outstanding by Class */}
        <Card
          title="Outstanding Fees by Class"
          actions={
            <Button variant="outline" size="sm">
              Send Reminders
            </Button>
          }
        >
          <div className="space-y-4">
            {outstandingByClass.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      {item.class}
                    </h4>
                    <p className="text-sm text-blue-600">
                      {item.students} students
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">
                      {(item.totalDue / 1000).toFixed(0)}K
                    </div>
                  </div>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Students with Outstanding Fees */}
      <Card title="Students with Outstanding Fees">
        <Table
          columns={[
            {
              header: "Student ID",
              accessor: "id",
            },
            {
              header: "Name",
              accessor: "name",
            },
            {
              header: "Class",
              accessor: "class",
            },
            {
              header: "Parent Contact",
              accessor: "parentPhone",
            },
            {
              header: "Fee Balance",
              accessor: (row) => (
                <span className="font-semibold text-red-600">
                  UGX {(row.feeBalance / 1000).toFixed(0)}K
                </span>
              ),
            },
            {
              header: "Action",
              accessor: () => (
                <Button size="sm" variant="outline">
                  Send Reminder
                </Button>
              ),
            },
          ]}
          data={studentsWithDues}
        />
      </Card>

      {/* Budget vs Expenditure */}
      <Card title="Budget vs Expenditure">
        <Table
          columns={[
            {
              header: "Category",
              accessor: "category",
            },
            {
              header: "Budgeted",
              accessor: (row) => `UGX ${(row.budgeted / 1000).toFixed(0)}K`,
            },
            {
              header: "Spent",
              accessor: (row) => `UGX ${(row.spent / 1000).toFixed(0)}K`,
            },
            {
              header: "Remaining",
              accessor: (row) => (
                <span
                  className={`font-semibold ${
                    row.remaining > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  UGX {(row.remaining / 1000).toFixed(0)}K
                </span>
              ),
            },
            {
              header: "Utilization",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="w-full max-w-[100px] bg-blue-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        (row.spent / row.budgeted) * 100 > 90
                          ? "bg-red-500"
                          : (row.spent / row.budgeted) * 100 > 75
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{
                        width: `${(row.spent / row.budgeted) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-blue-900">
                    {((row.spent / row.budgeted) * 100).toFixed(0)}%
                  </span>
                </div>
              ),
            },
          ]}
          data={expenditures}
        />
      </Card>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="mt-2 text-sm">Record Payment</span>
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="mt-2 text-sm">Send Reminders</span>
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="mt-2 text-sm">Generate Receipt</span>
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="mt-2 text-sm">Financial Report</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
