import { Button } from "@/components/ui/button";
import React from "react";
import { FaPlus } from "react-icons/fa";

const EquipmentHeader = ({ setAddEquipmentModalOpen }) => {
  const handleAddNewMedicine = () => {
    setAddEquipmentModalOpen(true);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Medical Equipment</h1>
        <Button
          type="text"
          className="bg-primary-600 hover:bg-primary-700 text-white"
          onClick={handleAddNewMedicine}
        >
          <FaPlus className="mr-2" />
          Add new Medicine
        </Button>
      </div>
    </>
  );
};

export default EquipmentHeader;
