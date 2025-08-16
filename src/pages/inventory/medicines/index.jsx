import { useState } from "react";
import MedicineHeader from "@/components/page-sections/inventory/medicines/header/medicine-header";
import AddMedicine from "@/components/modals/add-medicine";
import MedicineCards from "@/components/page-sections/inventory/medicines/medicine-cards/medicine-cards";
import MedicineTable from "@/components/page-sections/inventory/medicines/medicine-table/medicine-table";

const Medicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [addMedicineModalOpen, setAddMedicineModalOpen] = useState(false);
  const medicinesPerPage = 8;

  // Sample medicine data for e-healthcare system
  const medicines = [
    {
      id: "MED-001",
      name: "Paracetamol 500mg",
      category: "analgesic",
      batch: "B20231001",
      expiry: "2024-12-31",
      stock: 125,
      threshold: 20,
      price: 2.5,
      supplier: "PharmaPlus Inc.",
    },
    {
      id: "MED-002",
      name: "Amoxicillin 250mg",
      category: "antibiotic",
      batch: "B20231002",
      expiry: "2024-06-30",
      stock: 68,
      threshold: 15,
      price: 5.75,
      supplier: "MediSupply Co.",
    },
    {
      id: "MED-003",
      name: "Lisinopril 10mg",
      category: "cardiovascular",
      batch: "B20231003",
      expiry: "2025-03-15",
      stock: 42,
      threshold: 10,
      price: 8.2,
      supplier: "HealthCare Distributors",
    },
    {
      id: "MED-004",
      name: "Metformin 500mg",
      category: "diabetes",
      batch: "B20231004",
      expiry: "2024-09-30",
      stock: 87,
      threshold: 25,
      price: 3.1,
      supplier: "PharmaPlus Inc.",
    },
    {
      id: "MED-005",
      name: "Atorvastatin 20mg",
      category: "cholesterol",
      batch: "B20231005",
      expiry: "2025-01-31",
      stock: 53,
      threshold: 15,
      price: 7.9,
      supplier: "MediSupply Co.",
    },
    {
      id: "MED-006",
      name: "Ibuprofen 400mg",
      category: "analgesic",
      batch: "B20231006",
      expiry: "2024-08-15",
      stock: 94,
      threshold: 30,
      price: 3.25,
      supplier: "HealthCare Distributors",
    },
    {
      id: "MED-007",
      name: "Omeprazole 20mg",
      category: "gastrointestinal",
      batch: "B20231007",
      expiry: "2024-11-30",
      stock: 36,
      threshold: 10,
      price: 4.5,
      supplier: "PharmaPlus Inc.",
    },
    {
      id: "MED-008",
      name: "Salbutamol Inhaler",
      category: "respiratory",
      batch: "B20231008",
      expiry: "2024-07-31",
      stock: 22,
      threshold: 5,
      price: 12.75,
      supplier: "MediSupply Co.",
    },
    {
      id: "MED-009",
      name: "Cetirizine 10mg",
      category: "antihistamine",
      batch: "B20231009",
      expiry: "2025-02-28",
      stock: 78,
      threshold: 20,
      price: 2.8,
      supplier: "HealthCare Distributors",
    },
    {
      id: "MED-010",
      name: "Diazepam 5mg",
      category: "psychiatric",
      batch: "B20231010",
      expiry: "2024-10-31",
      stock: 15,
      threshold: 5,
      price: 6.4,
      supplier: "PharmaPlus Inc.",
    },
  ];

  // Filter medicines based on search term and category
  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch =
      medicine.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.batch.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || medicine.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastMedicine = currentPage * medicinesPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
  const currentMedicines = filteredMedicines.slice(
    indexOfFirstMedicine,
    indexOfLastMedicine
  );
  const totalPages = Math.ceil(filteredMedicines.length / medicinesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 min-h-screen rounded-lg">
      <MedicineHeader setAddMedicineModalOpen={setAddMedicineModalOpen} addMedicineModalOpen={addMedicineModalOpen} />

      <MedicineCards medicines={medicines} />

      <MedicineTable
        medicinesPerPage={medicinesPerPage}
        filteredMedicines={filteredMedicines}
        categoryFilter={categoryFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCategoryFilter={setCategoryFilter}
        paginate={paginate}
        medicines={medicines}
        totalPages={totalPages}
        currentMedicines={currentMedicines}
        indexOfFirstMedicine={indexOfFirstMedicine}
        indexOfLastMedicine={indexOfLastMedicine}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* medicine modal */}
      <AddMedicine
      setAddMedicineModalOpen={setAddMedicineModalOpen} 
      addMedicineModalOpen={addMedicineModalOpen}
      />
    </div>
  );
};

export default Medicine;
