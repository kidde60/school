import { getCurrentUser } from "../../utils/auth";
import Card from "../../components/shared/Card";
import Button from "../../components/shared/Button";

export default function ProfileSettings() {
  const user = getCurrentUser();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Profile Settings</h1>
      <p className="text-blue-600">Manage your account settings</p>

      <Card title="Personal Information">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={user?.name}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button>Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}
