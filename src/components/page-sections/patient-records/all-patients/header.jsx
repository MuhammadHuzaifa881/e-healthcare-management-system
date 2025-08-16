import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const AllPatientHeader = ({ setSearchTerm,searchTerm,setCurrentPage,setPatientModalOpen }) => {
  const handleAddNewPatient = () => {
    setPatientModalOpen(true);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Patient</h1>
        <Button
          type="text"
          className="bg-primary-600 hover:bg-primary-700 text-white"
          onClick={handleAddNewPatient}
        >
          <FaPlus className="mr-2" />
          Add new Patient
        </Button>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 " />
          <Input
            placeholder="Search patients by name, email, or phone..."
            className="pl-10 bg-white"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AllPatientHeader;
