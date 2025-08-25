import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import EquipmentHeader from "@/components/page-sections/inventory/equipment/equipment-header/equipment-header";
import AddEquipment from "@/components/modals/add-equipment";
import EquipmentCards from "@/components/page-sections/inventory/equipment/equipment-cards/equipment-cards";
import EquipmentTable from "@/components/page-sections/inventory/equipment/equipment-table/equipment-table";
import { equipment } from "@/constants/hospital/inventory/equipments";

const Equipment = () => {
  const [addEquipmentModalOpen, setAddEquipmentModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const equipmentPerPage = 8;

  // Filter equipment based on search term and status
  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serial.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const indexOfLastEquipment = currentPage * equipmentPerPage;
  const indexOfFirstEquipment = indexOfLastEquipment - equipmentPerPage;
  const currentEquipment = filteredEquipment.slice(
    indexOfFirstEquipment,
    indexOfLastEquipment
  );
  const totalPages = Math.ceil(filteredEquipment.length / equipmentPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [editData, setEditData] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-300 rounded-lg">
      <EquipmentHeader setAddEquipmentModalOpen={setAddEquipmentModalOpen} />

      <EquipmentCards equipment={equipment} />

      <EquipmentTable
        setEditData={setEditData}
        paginate={paginate}
        totalPages={totalPages}
        currentEquipment={currentEquipment}
        indexOfFirstEquipment={indexOfFirstEquipment}
        indexOfLastEquipment={indexOfLastEquipment}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        filteredEquipment={filteredEquipment}
        equipmentPerPage={equipmentPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        Progress={Progress}
        equipment={equipment}
        setAddEquipmentModalOpen={setAddEquipmentModalOpen}
      />

      <AddEquipment
        editData={editData}
        setEditData={setEditData}
        addEquipmentModalOpen={addEquipmentModalOpen}
        setAddEquipmentModalOpen={setAddEquipmentModalOpen}
      />
    </div>
  );
};

export default Equipment;
