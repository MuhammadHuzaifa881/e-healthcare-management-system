import { useState } from "react";
import MedicineHeader from "@/components/page-sections/inventory/medicines/header/medicine-header";
import AddMedicine from "@/components/modals/add-medicine";
import MedicineCards from "@/components/page-sections/inventory/medicines/medicine-cards/medicine-cards";
import MedicineTable from "@/components/page-sections/inventory/medicines/medicine-table/medicine-table";
import { medicines } from "@/constants/hospital/inventory/medicines";

const Medicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [addMedicineModalOpen, setAddMedicineModalOpen] = useState(false);
  const medicinesPerPage = 8;

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
  const [editData, setEditData] = useState(null);

  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 min-h-screen rounded-lg">
      <MedicineHeader
        setAddMedicineModalOpen={setAddMedicineModalOpen}
        addMedicineModalOpen={addMedicineModalOpen}
      />

      <MedicineCards medicines={medicines} />

      <MedicineTable
        setEditData={setEditData}
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
        setAddMedicineModalOpen={setAddMedicineModalOpen}
      />

      {/* medicine modal */}
      <AddMedicine
        editData={editData}
        setEditData={setEditData}
        setAddMedicineModalOpen={setAddMedicineModalOpen}
        addMedicineModalOpen={addMedicineModalOpen}
      />
    </div>
  );
};

export default Medicine;
