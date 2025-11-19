import Card from "../../components/shared/Card";
import Button from "../../components/shared/Button";

export default function SystemSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">System Settings</h1>
      <p className="text-blue-600">Configure system-wide settings</p>

      <Card title="School Information">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              School Name
            </label>
            <input
              type="text"
              defaultValue="Dangotech School"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Academic Year
            </label>
            <input
              type="text"
              defaultValue="2024/2025"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button>Save Settings</Button>
        </div>
      </Card>
    </div>
  );
}
