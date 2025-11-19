import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import AddTeacherModal, {
  type TeacherFormData,
} from "../../components/modals/AddTeacherModal";
import { teachers as initialTeachers } from "../../data/dummyData";

export default function TeachersList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachers, setTeachers] = useState(initialTeachers);

  const handleAddTeacher = (teacherData: TeacherFormData) => {
    const newTeacher = {
      id: `T${String(teachers.length + 1).padStart(3, "0")}`,
      name: teacherData.name,
      email: teacherData.email,
      subject: teacherData.subject,
      phone: teacherData.phone,
      classes: [],
      status: "active" as const,
    };
    setTeachers([...teachers, newTeacher]);
    alert("Teacher added successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Teachers</h1>
          <p className="text-blue-600 mt-1">Manage all teaching staff</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          leftIcon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          }
        >
          Add Teacher
        </Button>
      </div>

      <AddTeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTeacher}
      />

      <Card>
        <Table
          columns={[
            {
              header: "Teacher ID",
              accessor: "id",
            },
            {
              header: "Name",
              accessor: (row) => (
                <Link
                  to={`/teachers/${row.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {row.name}
                </Link>
              ),
            },
            {
              header: "Subject",
              accessor: "subject",
            },
            {
              header: "Email",
              accessor: "email",
            },
            {
              header: "Status",
              accessor: () => <Badge variant="success">Active</Badge>,
            },
          ]}
          data={teachers}
        />
      </Card>
    </div>
  );
}
