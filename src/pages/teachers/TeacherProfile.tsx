import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { teachers } from "../../data/dummyData";

export default function TeacherProfile() {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Teacher not found</p>
        <Link
          to="/teachers"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Teachers
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/teachers"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Teachers
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">{teacher.name}</h1>
          <p className="text-blue-600 mt-1">
            {teacher.subject} • {teacher.id}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Edit Profile</Button>
          <Button>Send Message</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Personal Information">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Email</p>
              <p className="font-semibold text-blue-900">{teacher.email}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Subject</p>
              <p className="font-semibold text-blue-900">{teacher.subject}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Status</p>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
        </Card>

        <Card title="Teaching Load">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Classes</p>
              <p className="font-semibold text-blue-900 text-2xl">5</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Total Students</p>
              <p className="font-semibold text-blue-900">125</p>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              View Schedule
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              View Classes
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Performance Report
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
