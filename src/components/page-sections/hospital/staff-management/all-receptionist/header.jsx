import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

const ReceptionistHeader = ({ setReceptionistModalOpen }) => {
  const handleAddNewReceptionist = () => {
    setReceptionistModalOpen(true);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Receptionist</h1>
        <Button
          type="text"
          className="bg-primary-600 hover:bg-primary-700 text-white"
          onClick={handleAddNewReceptionist}
        >
          <FaPlus className="mr-2" />
          Add new Receptionist
        </Button>
      </div>
    </>
  );
};

export default ReceptionistHeader;
