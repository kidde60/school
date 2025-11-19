import Card from "../../components/shared/Card";

export default function FinancialReports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Financial Reports</h1>
      <p className="text-blue-600">
        Comprehensive financial analytics and reports
      </p>

      <Card title="Financial Analytics">
        <div className="text-center py-12">
          <p className="text-blue-600">
            Financial reports and charts will be here
          </p>
        </div>
      </Card>
    </div>
  );
}
