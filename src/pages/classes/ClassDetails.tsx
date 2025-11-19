import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Button from "../../components/shared/Button";
import TakeAttendanceModal, {
  type AttendanceFormData,
} from "../../components/modals/TakeAttendanceModal";
import { classes } from "../../data/dummyData";

export default function ClassDetails() {
  const { id } = useParams();
  const classData = classes.find((c) => c.id === id);
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

  const handleTakeAttendance = (attendanceData: AttendanceFormData) => {
    console.log("Attendance recorded:", attendanceData);
    alert(
      `Attendance recorded for ${attendanceData.class} - ${attendanceData.subject}`
    );
  };

  if (!classData) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-600">Class not found</p>
        <Link
          to="/classes"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Classes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/classes"
            className="text-blue-600 hover:underline text-sm mb-2 inline-block"
          >
            ← Back to Classes
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">{classData.name}</h1>
          <p className="text-blue-600 mt-1">
            {classData.subject} • {classData.id}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Edit Class</Button>
          <Button onClick={() => setIsAttendanceModalOpen(true)}>
            Take Attendance
          </Button>
        </div>
      </div>

      <TakeAttendanceModal
        isOpen={isAttendanceModalOpen}
        onClose={() => setIsAttendanceModalOpen(false)}
        onSubmit={handleTakeAttendance}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Class Information">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Teacher</p>
              <p className="font-semibold text-blue-900">{classData.teacher}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Subject</p>
              <p className="font-semibold text-blue-900">{classData.subject}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Total Students</p>
              <p className="font-semibold text-blue-900">
                {classData.students}
              </p>
            </div>
          </div>
        </Card>

        <Card title="Performance">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-blue-600">Class Average</p>
              <p className="font-semibold text-blue-900 text-2xl">82%</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Attendance Rate</p>
              <p className="font-semibold text-blue-900">94%</p>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              View Students
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              View Assignments
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Generate Report
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
