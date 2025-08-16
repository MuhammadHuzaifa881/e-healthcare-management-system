import { Button } from "@/components/ui/button";
import React from "react";
import { FiPlus } from "react-icons/fi";

const AddNewMedicalHistory = ({setShowAddForm, activeTab}) => {
  return (
    <>
      <div className="flex justify-end mt-4 mb-6">
        <Button onClick={() => setShowAddForm(true)} className="bg-primary-600 text-white hover:bg-primary-700">
          <FiPlus className="mr-2" /> Add{" "}
          {activeTab === "conditions"
            ? "Condition"
            : activeTab === "medications"
            ? "Medication"
            : "Allergy"}
        </Button>
      </div>
    </>
  );
};

export default AddNewMedicalHistory;
