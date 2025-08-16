import { useState } from "react";
import AddReceptionist from "@/components/modals/add-receptionist";
import ReceptionistHeader from "@/components/page-sections/staff-management/all-receptionist/header";
import ReceptionistTable from "@/components/page-sections/staff-management/all-receptionist/receptionist-table";

export default function AllReceptionists() {
  // Sample receptionist data
  const [receptionists, setReceptionists] = useState([
    {
      id: "1",
      name: "Jennifer Lopez",
      email: "jennifer.l@hospital.com",
      phone: "+1 555-123-4567",
      shift: "Morning",
      status: "active",
      avatar: "",
    },
    {
      id: "2",
      name: "Robert Garcia",
      email: "robert.g@hospital.com",
      phone: "+1 555-234-5678",
      shift: "Evening",
      status: "active",
      avatar: "",
    },
    {
      id: "3",
      name: "Emily Wilson",
      email: "emily.w@hospital.com",
      phone: "+1 555-345-6789",
      shift: "Night",
      status: "on leave",
      avatar: "",
    },
    {
      id: "4",
      name: "Michael Brown",
      email: "michael.b@hospital.com",
      phone: "+1 555-456-7890",
      shift: "Morning",
      status: "active",
      avatar: "",
    },
    {
      id: "5",
      name: "Sarah Miller",
      email: "sarah.m@hospital.com",
      phone: "+1 555-567-8901",
      shift: "Evening",
      status: "inactive",
      avatar: "",
    },
    {
      id: "6",
      name: "David Taylor",
      email: "david.t@hospital.com",
      phone: "+1 555-678-9012",
      shift: "Night",
      status: "active",
      avatar: "",
    },
  ]);

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
  const itemsPerPage = 4;

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = receptionists.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(receptionists.length / itemsPerPage);



  return (
    <div className="mx-auto p-4 bg-blue-300 rounded-lg min-h-screen">
      <ReceptionistHeader
       setReceptionistModalOpen={setReceptionistModalOpen}
      />

      <ReceptionistTable setCurrentPage={setCurrentPage} currentItems={currentItems} totalPages={totalPages} currentPage={currentPage}/>

      <AddReceptionist
        setReceptionistModalOpen={setReceptionistModalOpen}
        receptionistModal={receptionistsModal}
        currentReceptionist={currentReceptionist}
        setCurrentReceptionist={setCurrentReceptionist}
        receptionists={receptionists}
        setReceptionists={setReceptionists}
        isEditMode={isEditMode}
      />
    </div>
  );
}
