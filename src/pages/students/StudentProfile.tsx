import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { students } from "../../data/dummyData";

export default function StudentProfile() {
  const { id } = useParams();
  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Student not found</p>
        <Link
          to="/students"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/students"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Students
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">{student.name}</h1>
          <p className="text-blue-600 mt-1">
            {student.class} • {student.id}
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
              <p className="font-semibold text-blue-900">{student.email}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Class</p>
              <p className="font-semibold text-blue-900">{student.class}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Status</p>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
        </Card>

        <Card title="Academic Performance">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Overall Grade</p>
              <p className="font-semibold text-blue-900 text-2xl">A</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Attendance</p>
              <p className="font-semibold text-blue-900">95%</p>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              View Timetable
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              View Grades
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              View Attendance
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
