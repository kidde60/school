import { useState } from "react";
import Card from "../../components/shared/Card";
import Button from "../../components/shared/Button";
import TakeAttendanceModal, {
  type AttendanceFormData,
} from "../../components/modals/TakeAttendanceModal";

export default function AttendanceList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTakeAttendance = (attendanceData: AttendanceFormData) => {
    console.log("Attendance recorded:", attendanceData);
    alert(
      `Attendance recorded for ${attendanceData.class} - ${attendanceData.subject}`
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Attendance Management
          </h1>
          <p className="text-blue-600 mt-1">
            Track and manage student attendance
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Take Attendance</Button>
      </div>

      <TakeAttendanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleTakeAttendance}
      />

      <Card title="Today's Attendance">
        <div className="text-center py-12">
          <p className="text-blue-600">
            Attendance tracking interface will be here
          </p>
        </div>
      </Card>
    </div>
  );
}
