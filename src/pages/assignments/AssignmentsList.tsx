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

  const handleAddAssignment = (assignmentData: AssignmentFormData) => {
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
          ]}
          data={assignmentsList}
        />
      </Card>

      <AddAssignmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddAssignment}
      />
    </div>
  );
}
