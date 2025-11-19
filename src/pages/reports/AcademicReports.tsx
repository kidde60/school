import Card from "../../components/shared/Card";

export default function AcademicReports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Academic Reports</h1>
      <p className="text-blue-600">
        Comprehensive academic performance reports
      </p>

      <Card title="Academic Analytics">
        <div className="text-center py-12">
          <p className="text-blue-600">
            Academic reports and charts will be here
          </p>
        </div>
      </Card>
    </div>
  );
}
