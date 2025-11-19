import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { students } from "../../data/dummyData";
import AddStudentModal from "../../components/modals/AddStudentModal";
import type { StudentFormData } from "../../components/modals/AddStudentModal";

export default function StudentsList() {
  const authData = JSON.parse(localStorage.getItem("dangotech_auth") || "{}");
  const userRole = authData.role || "student";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentsList, setStudentsList] = useState(students);
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddStudent = (studentData: StudentFormData) => {
    if (isEditMode && editingStudent) {
      // Update existing student
      setStudentsList(
        studentsList.map((s) =>
          s.id === editingStudent.id ? { ...s, ...studentData } : s
        )
      );
      alert(`Student ${studentData.name} updated successfully!`);
      setIsEditMode(false);
      setEditingStudent(null);
    } else {
      // Generate new student ID
      const newId = `S${String(studentsList.length + 1).padStart(3, "0")}`;

      // Create new student object
      const newStudent = {
        id: newId,
        name: studentData.name,
        email: studentData.email,
        class: studentData.class,
        grade: "A", // Default grade
        parentName: studentData.parentName,
        parentPhone: studentData.parentPhone,
        feeBalance: 500000, // Default fee
        attendance: 100, // Default attendance
        performance: 0, // Default performance
      };

      // Add to list
      setStudentsList([...studentsList, newStudent]);
      alert(`Student ${studentData.name} added successfully!`);
    }
  };

  const handleEditStudent = (student: any) => {
    setEditingStudent(student);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDeleteStudent = (studentId: string, studentName: string) => {
    if (window.confirm(`Are you sure you want to delete ${studentName}?`)) {
      setStudentsList(studentsList.filter((s) => s.id !== studentId));
      alert(`Student ${studentName} deleted successfully!`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditingStudent(null);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Students</h1>
          <p className="text-blue-600 mt-1">Manage all students</p>
        </div>
        {userRole !== "teacher" && (
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
            Add Student
          </Button>
        )}
      </div>

      <Card>
        <Table
          columns={[
            {
              header: "Student ID",
              accessor: "id",
            },
            {
              header: "Name",
              accessor: (row) => (
                <Link
                  to={`/students/${row.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {row.name}
                </Link>
              ),
            },
            {
              header: "Class",
              accessor: "class",
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
                  {userRole !== "teacher" && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditStudent(row)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteStudent(row.id, row.name)}
                        className="text-red-600 hover:text-red-700 hover:border-red-600"
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </div>
              ),
            },
          ]}
          data={studentsList}
        />
      </Card>

      <AddStudentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddStudent}
        initialData={editingStudent}
        isEditMode={isEditMode}
      />
    </div>
  );
}
