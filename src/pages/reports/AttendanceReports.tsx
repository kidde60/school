import Card from "../../components/shared/Card";

export default function AttendanceReports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Attendance Reports</h1>
      <p className="text-blue-600">View attendance trends and analytics</p>

      <Card title="Attendance Analytics">
        <div className="text-center py-12">
          <p className="text-blue-600">
            Attendance reports and charts will be here
          </p>
        </div>
      </Card>
    </div>
  );
}
