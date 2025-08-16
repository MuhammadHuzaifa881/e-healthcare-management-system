import { useState } from "react";

import { Progress } from "@/components/ui/progress";
import EquipmentHeader from "@/components/page-sections/inventory/equipment/equipment-header/equipment-header";
import AddEquipment from "@/components/modals/add-equipment";
import EquipmentCards from "@/components/page-sections/inventory/equipment/equipment-cards/equipment-cards";
import EquipmentTable from "@/components/page-sections/inventory/equipment/equipment-table/equipment-table";

const Equipment = () => {
  const [addEquipmentModalOpen, setAddEquipmentModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const equipmentPerPage = 8;

  // Sample equipment data for e-healthcare system
  const equipment = [
    {
      id: "EQP-001",
      name: "X-Ray Machine",
      type: "imaging",
      serial: "XR-2023-001",
      location: "Radiology Room 1",
      status: "operational",
      lastMaintenance: "2023-09-15",
      nextMaintenance: "2023-12-15",
      warranty: "2025-06-30",
    },
    {
      id: "EQP-002",
      name: "Ultrasound Scanner",
      type: "imaging",
      serial: "US-2023-002",
      location: "Ultrasound Suite",
      status: "operational",
      lastMaintenance: "2023-10-01",
      nextMaintenance: "2024-01-01",
      warranty: "2026-03-31",
    },
    {
      id: "EQP-003",
      name: "ECG Machine",
      type: "diagnostic",
      serial: "ECG-2023-003",
      location: "Cardiology Dept",
      status: "maintenance",
      lastMaintenance: "2023-08-20",
      nextMaintenance: "2023-11-20",
      warranty: "2024-12-31",
    },
    {
      id: "EQP-004",
      name: "Patient Monitor",
      type: "monitoring",
      serial: "PM-2023-004",
      location: "ICU Room 3",
      status: "operational",
      lastMaintenance: "2023-09-10",
      nextMaintenance: "2023-12-10",
      warranty: "2025-09-30",
    },
    {
      id: "EQP-005",
      name: "Defibrillator",
      type: "emergency",
      serial: "DEF-2023-005",
      location: "Emergency Room",
      status: "needs_repair",
      lastMaintenance: "2023-07-15",
      nextMaintenance: "2023-10-15",
      warranty: "2024-06-30",
    },
    {
      id: "EQP-006",
      name: "Anesthesia Machine",
      type: "surgical",
      serial: "AN-2023-006",
      location: "Operating Room 2",
      status: "operational",
      lastMaintenance: "2023-10-05",
      nextMaintenance: "2024-01-05",
      warranty: "2026-12-31",
    },
    {
      id: "EQP-007",
      name: "Ventilator",
      type: "respiratory",
      serial: "VEN-2023-007",
      location: "ICU Room 1",
      status: "operational",
      lastMaintenance: "2023-09-25",
      nextMaintenance: "2023-12-25",
      warranty: "2025-08-31",
    },
    {
      id: "EQP-008",
      name: "Infusion Pump",
      type: "medication",
      serial: "IP-2023-008",
      location: "Ward B",
      status: "out_of_service",
      lastMaintenance: "2023-06-30",
      nextMaintenance: "2023-09-30",
      warranty: "2024-05-31",
    },
    {
      id: "EQP-009",
      name: "Autoclave",
      type: "sterilization",
      serial: "AUT-2023-009",
      location: "Central Sterile",
      status: "operational",
      lastMaintenance: "2023-10-10",
      nextMaintenance: "2024-01-10",
      warranty: "2026-06-30",
    },
    {
      id: "EQP-010",
      name: "Dialysis Machine",
      type: "treatment",
      serial: "DIA-2023-010",
      location: "Nephrology Unit",
      status: "maintenance",
      lastMaintenance: "2023-08-15",
      nextMaintenance: "2023-11-15",
      warranty: "2025-03-31",
    },
  ];

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

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-300 rounded-lg">
      <EquipmentHeader setAddEquipmentModalOpen={setAddEquipmentModalOpen} />

      <EquipmentCards equipment={equipment} />

      <EquipmentTable
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
      />

      <AddEquipment
        addEquipmentModalOpen={addEquipmentModalOpen}
        setAddEquipmentModalOpen={setAddEquipmentModalOpen}
      />
    </div>
  );
};

export default Equipment;
