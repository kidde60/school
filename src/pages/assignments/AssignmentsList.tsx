import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";
import { assignments } from "../../data/dummyData";
import AddAssignmentModal from "../../components/modals/AddAssignmentModal";
import type { AssignmentFormData } from "../../components/modals/AddAssignmentModal";

export default function AssignmentsList() {
  const authData = JSON.parse(localStorage.getItem("dangotech_auth") || "{}");
  const userRole = authData.role || "student";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignmentsList, setAssignmentsList] = useState(assignments);
  const [editingAssignment, setEditingAssignment] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddAssignment = (assignmentData: AssignmentFormData) => {
    if (isEditMode && editingAssignment) {
      setAssignmentsList(
        assignmentsList.map((a) =>
          a.id === editingAssignment.id ? { ...a, ...assignmentData } : a
        )
      );
      alert(`Assignment "${assignmentData.title}" updated successfully!`);
      setIsEditMode(false);
      setEditingAssignment(null);
    } else {
      const newId = `A${String(assignmentsList.length + 1).padStart(3, "0")}`;

      const newAssignment = {
        id: newId,
        title: assignmentData.title,
        subject: assignmentData.subject,
        class: assignmentData.class,
        dueDate: assignmentData.dueDate,
        status: "pending" as const,
      };

      setAssignmentsList([...assignmentsList, newAssignment]);
      alert(`Assignment "${assignmentData.title}" created successfully!`);
    }
  };

  const handleEditAssignment = (assignment: any) => {
    setEditingAssignment(assignment);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDeleteAssignment = (assignmentId: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      setAssignmentsList(assignmentsList.filter((a) => a.id !== assignmentId));
      alert("Assignment deleted successfully!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditingAssignment(null);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Assignments</h1>
          <p className="text-blue-600 mt-1">Manage all assignments</p>
        </div>
        {userRole !== "student" && (
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
            Create Assignment
          </Button>
        )}
      </div>

      <Card>
        <Table
          columns={[
            {
              header: "Title",
              accessor: (row) => (
                <Link
                  to={`/assignments/${row.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {row.title}
                </Link>
              ),
            },
            {
              header: "Subject",
              accessor: "subject",
            },
            {
              header: "Class",
              accessor: "class",
            },
            {
              header: "Due Date",
              accessor: "dueDate",
            },
            {
              header: "Status",
              accessor: (row) => {
                const status = row.status;
                return (
                  <Badge
                    variant={
                      status === "submitted"
                        ? "success"
                        : status === "graded"
                        ? "info"
                        : "warning"
                    }
                  >
                    {status}
                  </Badge>
                );
              },
            },
            ...(userRole !== "student"
              ? [
                  {
                    header: "Actions",
                    accessor: (row: any) => (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditAssignment(row)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleDeleteAssignment(row.id, row.title)
                          }
                          className="text-red-600 hover:text-red-700 hover:border-red-600"
                        >
                          Delete
                        </Button>
                      </div>
                    ),
                  },
                ]
              : []),
          ]}
          data={assignmentsList}
        />
      </Card>

      <AddAssignmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddAssignment}
        initialData={editingAssignment}
        isEditMode={isEditMode}
      />
    </div>
  );
}
