import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

const NursesHeader = ({ setNurseModalOpen }) => {
  const handleAddNewNurse = () => {
    setNurseModalOpen(true);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Nurses</h1>
        <Button
          type="text"
          className="bg-primary-600 hover:bg-primary-700 text-white"
          onClick={handleAddNewNurse}
        >
          <FaPlus className="mr-2" />
          Add new Nurse
        </Button>
      </div>
    </>
  );
};

export default NursesHeader;
