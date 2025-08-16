import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

const MedicineHeader = ({setAddMedicineModalOpen}) => {
  const handleAddNewMedicine=()=>{
    setAddMedicineModalOpen(true)
  }
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Medicine Inventory</h1>
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

export default MedicineHeader;
