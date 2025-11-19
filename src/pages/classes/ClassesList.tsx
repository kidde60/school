import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Table from "../../components/shared/Table";
import Button from "../../components/shared/Button";
import AddClassModal, {
  type ClassFormData,
} from "../../components/modals/AddClassModal";
import { classes as initialClasses } from "../../data/dummyData";

export default function ClassesList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classes, setClasses] = useState(initialClasses);

  const handleAddClass = (classData: ClassFormData) => {
    const newClass = {
      id: `C${String(classes.length + 1).padStart(3, "0")}`,
      name: classData.name,
      subject: classData.subjects.join(", "),
      teacher: classData.teacher,
      students: 0,
      schedule: classData.schedule,
    };
    setClasses([...classes, newClass]);
    alert(
      `Class added successfully with ${classData.subjects.length} subject(s)!`
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Classes</h1>
          <p className="text-blue-600 mt-1">Manage all classes</p>
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
          Add Class
        </Button>
      </div>

      <AddClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddClass}
      />

      <Card>
        <Table
          columns={[
            {
              header: "Class ID",
              accessor: "id",
            },
            {
              header: "Class Name",
              accessor: (row) => (
                <Link
                  to={`/classes/${row.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {row.name}
                </Link>
              ),
            },
            {
              header: "Teacher",
              accessor: "teacher",
            },
            {
              header: "Students",
              accessor: "students",
            },
            {
              header: "Subject",
              accessor: "subject",
            },
          ]}
          data={classes}
        />
      </Card>
    </div>
  );
}
