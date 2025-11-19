import { useState } from "react";
import Card from "../../components/shared/Card";
import Button from "../../components/shared/Button";
import AddBudgetItemModal, {
  type BudgetItemFormData,
} from "../../components/modals/AddBudgetItemModal";

export default function BudgetManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBudgetItem = (budgetItem: BudgetItemFormData) => {
    console.log("Budget item added:", budgetItem);
    alert(
      `Budget item added: ${
        budgetItem.description
      } - UGX ${budgetItem.amount.toLocaleString()}`
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Budget Management
          </h1>
          <p className="text-blue-600 mt-1">
            Manage school budgets and expenditures
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Add Budget Item</Button>
      </div>

      <AddBudgetItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddBudgetItem}
      />

      <Card title="Budget Overview">
        <div className="text-center py-12">
          <p className="text-blue-600">
            Budget management interface will be here
          </p>
        </div>
      </Card>
    </div>
  );
}
