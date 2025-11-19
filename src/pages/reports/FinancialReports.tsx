import { useState } from "react";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import StatsCard from "../../components/shared/StatsCard";
import { classes } from "../../data/dummyData";

export default function FinancialReports() {
  const [selectedTerm, setSelectedTerm] = useState("term2");
  const [selectedReportType, setSelectedReportType] = useState("overview");
  const [selectedClass, setSelectedClass] = useState("all");

  // Mock financial data
  const financialOverview = {
    totalRevenue: 215000000,
    totalCollected: 185000000,
    outstanding: 30000000,
    collectionRate: 86.0,
  };

  const termComparison = [
    {
      term: "Term 1 - 2024",
      revenue: 220000000,
      collected: 195000000,
      outstanding: 25000000,
      rate: 88.6,
    },
    {
      term: "Term 2 - 2024",
      revenue: 215000000,
      collected: 185000000,
      outstanding: 30000000,
      rate: 86.0,
    },
    {
      term: "Term 3 - 2023",
      revenue: 210000000,
      collected: 198000000,
      outstanding: 12000000,
      rate: 94.3,
    },
    {
      term: "Term 2 - 2023",
      revenue: 205000000,
      collected: 187000000,
      outstanding: 18000000,
      rate: 91.2,
    },
    {
      term: "Term 1 - 2023",
      revenue: 200000000,
      collected: 180000000,
      outstanding: 20000000,
      rate: 90.0,
    },
  ];

  const feeCollectionByClass = [
    {
      className: "Form 1A",
      students: 45,
      totalFees: 22500000,
      collected: 20000000,
      outstanding: 2500000,
      rate: 88.9,
    },
    {
      className: "Form 1B",
      students: 43,
      totalFees: 21500000,
      collected: 19500000,
      outstanding: 2000000,
      rate: 90.7,
    },
    {
      className: "Form 2A",
      students: 48,
      totalFees: 24000000,
      collected: 21000000,
      outstanding: 3000000,
      rate: 87.5,
    },
    {
      className: "Form 2B",
      students: 42,
      totalFees: 21000000,
      collected: 18500000,
      outstanding: 2500000,
      rate: 88.1,
    },
    {
      className: "Form 3A",
      students: 50,
      totalFees: 25000000,
      collected: 20000000,
      outstanding: 5000000,
      rate: 80.0,
    },
  ];

  const paymentMethods = [
    {
      method: "Bank Transfer",
      transactions: 320,
      amount: 95000000,
      percentage: 51.4,
    },
    {
      method: "Mobile Money",
      transactions: 185,
      amount: 52000000,
      percentage: 28.1,
    },
    { method: "Cash", transactions: 145, amount: 32000000, percentage: 17.3 },
    { method: "Cheque", transactions: 28, amount: 6000000, percentage: 3.2 },
  ];

  const monthlyRevenue = [
    {
      month: "January",
      revenue: 72000000,
      collected: 68000000,
      outstanding: 4000000,
    },
    {
      month: "February",
      revenue: 68000000,
      collected: 62000000,
      outstanding: 6000000,
    },
    {
      month: "March",
      revenue: 80000000,
      collected: 65000000,
      outstanding: 15000000,
    },
    {
      month: "April",
      revenue: 65000000,
      collected: 60000000,
      outstanding: 5000000,
    },
    {
      month: "May",
      revenue: 75000000,
      collected: 70000000,
      outstanding: 5000000,
    },
  ];

  const outstandingBalances = [
    {
      studentId: "S015",
      name: "Michael Brown",
      class: "Form 3B",
      totalFees: 500000,
      paid: 200000,
      balance: 300000,
      dueDate: "2024-05-15",
      status: "Overdue",
      daysPastDue: 7,
    },
    {
      studentId: "S034",
      name: "David Martinez",
      class: "Form 1B",
      totalFees: 450000,
      paid: 150000,
      balance: 300000,
      dueDate: "2024-05-20",
      status: "Overdue",
      daysPastDue: 2,
    },
    {
      studentId: "S087",
      name: "Lisa Anderson",
      class: "Form 2A",
      totalFees: 500000,
      paid: 250000,
      balance: 250000,
      dueDate: "2024-05-25",
      status: "Due Soon",
      daysPastDue: 0,
    },
    {
      studentId: "S123",
      name: "Tom Wilson",
      class: "Form 3A",
      totalFees: 500000,
      paid: 100000,
      balance: 400000,
      dueDate: "2024-05-10",
      status: "Overdue",
      daysPastDue: 12,
    },
  ];

  const expenseBreakdown = [
    {
      category: "Staff Salaries",
      amount: 85000000,
      percentage: 45.9,
      budget: 90000000,
      variance: -5.6,
    },
    {
      category: "Utilities",
      amount: 12000000,
      percentage: 6.5,
      budget: 11000000,
      variance: 9.1,
    },
    {
      category: "Learning Materials",
      amount: 18000000,
      percentage: 9.7,
      budget: 20000000,
      variance: -10.0,
    },
    {
      category: "Maintenance",
      amount: 15000000,
      percentage: 8.1,
      budget: 14000000,
      variance: 7.1,
    },
    {
      category: "Transportation",
      amount: 8000000,
      percentage: 4.3,
      budget: 8000000,
      variance: 0,
    },
    {
      category: "Sports & Activities",
      amount: 5000000,
      percentage: 2.7,
      budget: 6000000,
      variance: -16.7,
    },
    {
      category: "Administration",
      amount: 22000000,
      percentage: 11.9,
      budget: 20000000,
      variance: 10.0,
    },
    {
      category: "Other",
      amount: 20000000,
      percentage: 10.8,
      budget: 21000000,
      variance: -4.8,
    },
  ];

  const recentTransactions = [
    {
      id: "TRX001",
      date: "2024-05-22",
      studentName: "Alice Johnson",
      type: "Fee Payment",
      method: "Bank Transfer",
      amount: 500000,
      status: "Completed",
    },
    {
      id: "TRX002",
      date: "2024-05-22",
      studentName: "Bob Smith",
      type: "Fee Payment",
      method: "Mobile Money",
      amount: 250000,
      status: "Completed",
    },
    {
      id: "TRX003",
      date: "2024-05-21",
      studentName: "Carol White",
      type: "Fee Payment",
      method: "Cash",
      amount: 300000,
      status: "Completed",
    },
    {
      id: "TRX004",
      date: "2024-05-21",
      studentName: "David Lee",
      type: "Partial Payment",
      method: "Bank Transfer",
      amount: 150000,
      status: "Completed",
    },
  ];

  const handleExportReport = () => {
    alert("Exporting financial report as PDF...");
  };

  const handlePrintReport = () => {
    alert("Printing financial report...");
  };

  const handleSendReminder = (studentId: string) => {
    alert(`Sending payment reminder to student ${studentId}...`);
  };

  const handleGenerateInvoice = (studentId: string) => {
    alert(`Generating invoice for student ${studentId}...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Financial Reports
          </h1>
          <p className="text-blue-600 mt-1">
            Comprehensive financial analytics and fee collection reports
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handlePrintReport}>
            Print Report
          </Button>
          <Button onClick={handleExportReport}>Export PDF</Button>
        </div>
      </div>

      {/* Filter Controls */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Term
            </label>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="term1">Term 1 - 2024</option>
              <option value="term2">Term 2 - 2024</option>
              <option value="term3">Term 3 - 2023</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Classes</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Report Type
            </label>
            <select
              value={selectedReportType}
              onChange={(e) => setSelectedReportType(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="overview">Overview</option>
              <option value="collection">Fee Collection</option>
              <option value="expenses">Expenses</option>
              <option value="outstanding">Outstanding Balances</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Financial Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value={`UGX ${(financialOverview.totalRevenue / 1000000).toFixed(
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <StatsCard
          title="Amount Collected"
          value={`UGX ${(financialOverview.totalCollected / 1000000).toFixed(
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
        />
        <StatsCard
          title="Outstanding Balance"
          value={`UGX ${(financialOverview.outstanding / 1000000).toFixed(1)}M`}
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
        />
        <StatsCard
          title="Collection Rate"
          value={`${financialOverview.collectionRate}%`}
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
        />
      </div>

      {/* Fee Collection by Class */}
      <Card title="Fee Collection by Class">
        <Table
          columns={[
            { header: "Class", accessor: "className" },
            { header: "Students", accessor: "students" },
            {
              header: "Total Fees",
              accessor: (row) => `UGX ${(row.totalFees / 1000000).toFixed(1)}M`,
            },
            {
              header: "Collected",
              accessor: (row) => (
                <span className="text-green-600 font-semibold">
                  UGX {(row.collected / 1000000).toFixed(1)}M
                </span>
              ),
            },
            {
              header: "Outstanding",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">
                  UGX {(row.outstanding / 1000000).toFixed(1)}M
                </span>
              ),
            },
            {
              header: "Collection Rate",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        row.rate >= 90
                          ? "bg-green-600"
                          : row.rate >= 80
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                      style={{ width: `${row.rate}%` }}
                    />
                  </div>
                  <span className="font-semibold text-blue-900">
                    {row.rate}%
                  </span>
                </div>
              ),
            },
          ]}
          data={feeCollectionByClass}
        />
      </Card>

      {/* Payment Methods Distribution */}
      <Card title="Payment Methods Distribution">
        <Table
          columns={[
            { header: "Payment Method", accessor: "method" },
            { header: "Transactions", accessor: "transactions" },
            {
              header: "Total Amount",
              accessor: (row) => (
                <span className="font-semibold text-blue-900">
                  UGX {(row.amount / 1000000).toFixed(1)}M
                </span>
              ),
            },
            {
              header: "Percentage",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="font-semibold text-blue-900">
                    {row.percentage}%
                  </span>
                </div>
              ),
            },
          ]}
          data={paymentMethods}
        />
      </Card>

      {/* Term Comparison */}
      <Card title="Term-by-Term Comparison">
        <Table
          columns={[
            { header: "Term", accessor: "term" },
            {
              header: "Total Revenue",
              accessor: (row) => `UGX ${(row.revenue / 1000000).toFixed(1)}M`,
            },
            {
              header: "Collected",
              accessor: (row) => (
                <span className="text-green-600 font-semibold">
                  UGX {(row.collected / 1000000).toFixed(1)}M
                </span>
              ),
            },
            {
              header: "Outstanding",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">
                  UGX {(row.outstanding / 1000000).toFixed(1)}M
                </span>
              ),
            },
            {
              header: "Collection Rate",
              accessor: (row) => (
                <Badge
                  variant={
                    row.rate >= 90
                      ? "success"
                      : row.rate >= 80
                      ? "warning"
                      : "danger"
                  }
                >
                  {row.rate}%
                </Badge>
              ),
            },
          ]}
          data={termComparison}
        />
      </Card>

      {/* Outstanding Balances - Priority Follow-up */}
      <Card title="Outstanding Balances - Priority Follow-up">
        <Table
          columns={[
            { header: "Student ID", accessor: "studentId" },
            { header: "Student Name", accessor: "name" },
            { header: "Class", accessor: "class" },
            {
              header: "Total Fees",
              accessor: (row) => `UGX ${row.totalFees.toLocaleString()}`,
            },
            {
              header: "Paid",
              accessor: (row) => (
                <span className="text-green-600">
                  UGX {row.paid.toLocaleString()}
                </span>
              ),
            },
            {
              header: "Balance",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">
                  UGX {row.balance.toLocaleString()}
                </span>
              ),
            },
            { header: "Due Date", accessor: "dueDate" },
            {
              header: "Status",
              accessor: (row) => (
                <Badge
                  variant={row.status === "Overdue" ? "danger" : "warning"}
                >
                  {row.status}
                  {row.daysPastDue > 0 && ` (${row.daysPastDue}d)`}
                </Badge>
              ),
            },
            {
              header: "Actions",
              accessor: (row) => (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSendReminder(row.studentId)}
                  >
                    Send Reminder
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleGenerateInvoice(row.studentId)}
                  >
                    Invoice
                  </Button>
                </div>
              ),
            },
          ]}
          data={outstandingBalances}
        />
      </Card>

      {/* Monthly Revenue Trends */}
      <Card title="Monthly Revenue Trends">
        <Table
          columns={[
            { header: "Month", accessor: "month" },
            {
              header: "Total Revenue",
              accessor: (row) => `UGX ${(row.revenue / 1000000).toFixed(1)}M`,
            },
            {
              header: "Collected",
              accessor: (row) => (
                <span className="text-green-600 font-semibold">
                  UGX {(row.collected / 1000000).toFixed(1)}M
                </span>
              ),
            },
            {
              header: "Outstanding",
              accessor: (row) => (
                <span className="text-red-600 font-semibold">
                  UGX {(row.outstanding / 1000000).toFixed(1)}M
                </span>
              ),
            },
            {
              header: "Collection Progress",
              accessor: (row) => {
                const rate = (row.collected / row.revenue) * 100;
                return (
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${rate}%` }}
                      />
                    </div>
                    <span className="font-semibold text-blue-900">
                      {rate.toFixed(1)}%
                    </span>
                  </div>
                );
              },
            },
          ]}
          data={monthlyRevenue}
        />
      </Card>

      {/* Expense Breakdown */}
      <Card title="Expense Breakdown - Current Term">
        <Table
          columns={[
            { header: "Category", accessor: "category" },
            {
              header: "Amount Spent",
              accessor: (row) => `UGX ${(row.amount / 1000000).toFixed(1)}M`,
            },
            {
              header: "Budget",
              accessor: (row) => `UGX ${(row.budget / 1000000).toFixed(1)}M`,
            },
            {
              header: "% of Total",
              accessor: (row) => `${row.percentage}%`,
            },
            {
              header: "Variance",
              accessor: (row) => (
                <Badge
                  variant={
                    row.variance > 0
                      ? "danger"
                      : row.variance < 0
                      ? "success"
                      : "info"
                  }
                >
                  {row.variance > 0 ? "+" : ""}
                  {row.variance}%
                </Badge>
              ),
            },
            {
              header: "Budget Status",
              accessor: (row) => (
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-blue-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        row.variance > 10
                          ? "bg-red-600"
                          : row.variance > 0
                          ? "bg-yellow-600"
                          : "bg-green-600"
                      }`}
                      style={{ width: `${(row.amount / row.budget) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-blue-600">
                    {((row.amount / row.budget) * 100).toFixed(0)}%
                  </span>
                </div>
              ),
            },
          ]}
          data={expenseBreakdown}
        />
      </Card>

      {/* Recent Transactions */}
      <Card title="Recent Transactions">
        <Table
          columns={[
            { header: "Transaction ID", accessor: "id" },
            { header: "Date", accessor: "date" },
            { header: "Student", accessor: "studentName" },
            { header: "Type", accessor: "type" },
            { header: "Method", accessor: "method" },
            {
              header: "Amount",
              accessor: (row) => (
                <span className="font-semibold text-green-600">
                  UGX {row.amount.toLocaleString()}
                </span>
              ),
            },
            {
              header: "Status",
              accessor: (row) => <Badge variant="success">{row.status}</Badge>,
            },
          ]}
          data={recentTransactions}
        />
      </Card>
    </div>
  );
}
