import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { exams } from "../../data/dummyData";

export default function ExamDetails() {
  const { id } = useParams();
  const exam = exams.find((e) => e.id === id);

  if (!exam) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Exam not found</p>
        <Link
          to="/exams"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Exams
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/exams"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Exams
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">{exam.name}</h1>
          <p className="text-blue-600 mt-1">
            {exam.subject} • {exam.date}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Edit Exam</Button>
          <Button>Enter Marks</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Exam Details">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Date</p>
              <p className="font-semibold text-blue-900">{exam.date}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Total Marks</p>
              <p className="font-semibold text-blue-900">{exam.totalMarks}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Status</p>
              <Badge
                variant={exam.status === "completed" ? "success" : "warning"}
              >
                {exam.status}
              </Badge>
            </div>
          </div>
        </Card>

        <Card title="Statistics">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Total Students</p>
              <p className="font-semibold text-blue-900 text-2xl">28</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Average Score</p>
              <p className="font-semibold text-blue-900">75%</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Pass Rate</p>
              <p className="font-semibold text-blue-900">89%</p>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              View Results
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Generate Report
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Download
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
