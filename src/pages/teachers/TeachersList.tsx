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
  const [editingTeacher, setEditingTeacher] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddTeacher = (teacherData: TeacherFormData) => {
    if (isEditMode && editingTeacher) {
      setTeachers(
        teachers.map((t) =>
          t.id === editingTeacher.id ? { ...t, ...teacherData } : t
        )
      );
      alert("Teacher updated successfully!");
      setIsEditMode(false);
      setEditingTeacher(null);
    } else {
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
    }
  };

  const handleEditTeacher = (teacher: any) => {
    setEditingTeacher(teacher);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDeleteTeacher = (teacherId: string, teacherName: string) => {
    if (window.confirm(`Are you sure you want to delete ${teacherName}?`)) {
      setTeachers(teachers.filter((t) => t.id !== teacherId));
      alert("Teacher deleted successfully!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditingTeacher(null);
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
        onClose={handleCloseModal}
        onSubmit={handleAddTeacher}
        initialData={editingTeacher}
        isEditMode={isEditMode}
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
            {
              header: "Actions",
              accessor: (row) => (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditTeacher(row)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteTeacher(row.id, row.name)}
                    className="text-red-600 hover:text-red-700 hover:border-red-600"
                  >
                    Delete
                  </Button>
                </div>
              ),
            },
          ]}
          data={teachers}
        />
      </Card>
    </div>
  );
}
