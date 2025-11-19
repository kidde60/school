import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { assignments } from "../../data/dummyData";

export default function AssignmentDetails() {
  const { id } = useParams();
  const assignment = assignments.find((a) => a.id === id);

  if (!assignment) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Assignment not found</p>
        <Link
          to="/assignments"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/assignments"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Assignments
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">
            {assignment.title}
          </h1>
          <p className="text-blue-600 mt-1">
            {assignment.subject} • {assignment.class}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Edit Assignment</Button>
          <Button>Grade Submissions</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Assignment Details">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Due Date</p>
              <p className="font-semibold text-blue-900">
                {assignment.dueDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Subject</p>
              <p className="font-semibold text-blue-900">
                {assignment.subject}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Status</p>
              <Badge
                variant={
                  assignment.status === "submitted" ? "success" : "warning"
                }
              >
                {assignment.status}
              </Badge>
            </div>
          </div>
        </Card>

        <Card title="Submission Stats">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Total Students</p>
              <p className="font-semibold text-blue-900 text-2xl">30</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Submitted</p>
              <p className="font-semibold text-blue-900">25</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Pending</p>
              <p className="font-semibold text-blue-900">5</p>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              View Submissions
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Download All
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Send Reminder
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
