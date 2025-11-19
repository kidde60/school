import { Link } from "react-router-dom";
import Card from "../../components/shared/Card";
import Badge from "../../components/shared/Badge";
import Button from "../../components/shared/Button";

export default function ParentChildren() {
  // Mock children data for the logged-in parent
  const children = [
    {
      id: "S002",
      name: "Bob Smith",
      class: "Grade 10A",
      grade: "B",
      attendance: 92,
      feeBalance: 150000,
      overallAverage: 85,
      image: "",
    },
    {
      id: "S006",
      name: "Jane Smith",
      class: "Grade 8B",
      grade: "A",
      attendance: 96,
      feeBalance: 0,
      overallAverage: 91,
      image: "",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">My Children</h1>
          <p className="text-blue-600 mt-1">
            View your children's information and performance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children.map((child) => (
          <Card key={child.id} title="">
            <div className="space-y-4">
              {/* Child Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {child.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">
                      {child.name}
                    </h3>
                    <p className="text-blue-600">{child.class}</p>
                    <p className="text-sm text-blue-500">{child.id}</p>
                  </div>
                </div>
                <Badge variant="success">Active</Badge>
              </div>

              {/* Academic Performance */}
              <div>
                <h4 className="text-sm font-semibold text-blue-700 mb-3">
                  Academic Performance
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-600 mb-1">Current Grade</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {child.grade}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-600 mb-1">Average Score</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {child.overallAverage}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Attendance */}
              <div>
                <h4 className="text-sm font-semibold text-blue-700 mb-3">
                  Attendance
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-blue-100 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all"
                      style={{ width: `${child.attendance}%` }}
                    ></div>
                  </div>
                  <span className="text-lg font-bold text-blue-900 min-w-[50px]">
                    {child.attendance}%
                  </span>
                </div>
              </div>

              {/* Fee Status */}
              <div>
                <h4 className="text-sm font-semibold text-blue-700 mb-3">
                  Fee Status
                </h4>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600">Balance:</span>
                    <span
                      className={`text-lg font-bold ${
                        child.feeBalance > 0 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {child.feeBalance > 0
                        ? `UGX ${child.feeBalance.toLocaleString()}`
                        : "Paid"}
                    </span>
                  </div>
                  {child.feeBalance > 0 && (
                    <div className="mt-2">
                      <Badge variant="warning" size="sm">
                        Payment Due
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-blue-100">
                <Link to={`/students/${child.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </Link>
                <Button size="sm" className="w-full">
                  Pay Fees
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Stats Summary */}
      <Card title="Summary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-1">Total Children</p>
            <p className="text-3xl font-bold text-blue-900">
              {children.length}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-1">Total Fees Due</p>
            <p className="text-3xl font-bold text-red-600">
              UGX{" "}
              {children
                .reduce((sum, child) => sum + child.feeBalance, 0)
                .toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-1">Avg Attendance</p>
            <p className="text-3xl font-bold text-green-600">
              {Math.round(
                children.reduce((sum, child) => sum + child.attendance, 0) /
                  children.length
              )}
              %
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-1">Avg Performance</p>
            <p className="text-3xl font-bold text-blue-600">
              {Math.round(
                children.reduce((sum, child) => sum + child.overallAverage, 0) /
                  children.length
              )}
              %
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
