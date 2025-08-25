import { useState } from "react";
import AddReceptionist from "@/components/modals/add-receptionist";
import ReceptionistHeader from "@/components/page-sections/hospital/staff-management/all-receptionist/header";
import ReceptionistTable from "@/components/page-sections/hospital/staff-management/all-receptionist/receptionist-table";
import { allReceptionist } from "@/constants/hospital/staff-management/all-receptionist";

export default function AllReceptionists() {
  // Sample receptionist data
  const [receptionists, setReceptionists] = useState(allReceptionist);

  // Form state
  const [currentReceptionist, setCurrentReceptionist] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    shift: "Morning",
    status: "active",
    avatar: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [receptionistsModal, setReceptionistModalOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = receptionists.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(receptionists.length / itemsPerPage);

  return (
    <div className="mx-auto p-4 bg-blue-300 rounded-lg min-h-screen">
      <ReceptionistHeader setReceptionistModalOpen={setReceptionistModalOpen} />

      <ReceptionistTable
      setCurrentReceptionist={setCurrentReceptionist}
        setCurrentPage={setCurrentPage}
        currentItems={currentItems}
        totalPages={totalPages}
        currentPage={currentPage}
          setIsEditMode={setIsEditMode}
          setReceptionistModalOpen={setReceptionistModalOpen}
      />

      <AddReceptionist
        setReceptionistModalOpen={setReceptionistModalOpen}
        receptionistModal={receptionistsModal}
        currentReceptionist={currentReceptionist}
        setCurrentReceptionist={setCurrentReceptionist}
        receptionists={receptionists}
        setReceptionists={setReceptionists}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    </div>
  );
}
