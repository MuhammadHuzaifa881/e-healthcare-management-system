import { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiEdit2,
  FiTrash2,
  FiArchive,
  FiAlertTriangle,
  FiDownload,
} from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteModal from "@/components/modals/common/delete-modal";
import { categoryMap } from "@/constants/hospital/inventory/medicines";

const MedicineTable = ({
  paginate,
  totalPages,
  currentMedicines,
  indexOfFirstMedicine,
  indexOfLastMedicine,
  setCategoryFilter,
  categoryFilter,
  searchTerm,
  filteredMedicines,
  medicinesPerPage,
  setCurrentPage,
  currentPage,
  setSearchTerm,
  setEditData,
  setAddMedicineModalOpen,
}) => {
  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [medicineToDelete, setMedicineToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Enhanced Category badge component with custom colors
  const CategoryBadge = ({ category }) => {
    return (
      <Badge variant="outline" className={categoryMap[category]?.className}>
        {categoryMap[category]?.text}
      </Badge>
    );
  };

  // Stock status component
  const StockStatus = ({ stock, threshold }) => {
    const percentage = (stock / (threshold * 3)) * 100;
    const isLowStock = stock <= threshold;
    const isCriticalStock = stock <= threshold * 0.3;

    return (
      <div className="flex items-center gap-2">
        <Progress
          value={percentage}
          className={`w-24 h-2 ${
            isCriticalStock ? "bg-red-200" : isLowStock ? "bg-amber-200" : ""
          }`}
        />
        {isLowStock && (
          <FiAlertTriangle
            className={isCriticalStock ? "text-red-500" : "text-amber-500"}
          />
        )}
        <span
          className={
            isCriticalStock
              ? "text-red-600 font-medium"
              : isLowStock
              ? "text-amber-600 font-medium"
              : ""
          }
        >
          {stock}
        </span>
      </div>
    );
  };

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDeleteModalOpen(false);

      // Adjust current page if we deleted the last item on the page
      if (currentMedicines.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setMedicineToDelete(null);
    }
  };

  const handleEdit = (data) => {
    setEditData(data);
    setAddMedicineModalOpen(true)
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header with title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Medicine Inventory</h2>
        <p className="text-gray-500 mt-1">
          Manage and track all medicines in stock
        </p>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by medicine name, category, or supplier..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FiFilter className="h-4 w-4" />
                {categoryFilter === "all"
                  ? "All Categories"
                  : categoryFilter.charAt(0).toUpperCase() +
                    categoryFilter.slice(1)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-80 overflow-y-auto">
              <DropdownMenuItem
                onClick={() => setCategoryFilter("all")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                All Categories
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("analgesic")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Analgesic
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("antibiotic")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                Antibiotic
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("cardiovascular")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                Cardiovascular
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("diabetes")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Diabetes
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("cholesterol")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                Cholesterol
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("gastrointestinal")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                Gastrointestinal
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("respiratory")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                Respiratory
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("antihistamine")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                Antihistamine
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("psychiatric")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                Psychiatric
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <FiDownload className="h-4 w-4" />
                Export Inventory
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <FiArchive className="h-4 w-4" />
                Manage Categories
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Medicines Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[120px]">Medicine ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Expiry</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentMedicines.length > 0 ? (
              currentMedicines.map((medicine) => {
                const isExpiringSoon =
                  new Date(medicine.expiry) - new Date() <
                  90 * 24 * 60 * 60 * 1000;
                const isCriticalStock =
                  medicine.stock <= medicine.threshold * 0.3;
                const isLowStock = medicine.stock <= medicine.threshold;

                return (
                  <TableRow
                    key={medicine.id}
                    className={`hover:bg-gray-50/50 ${
                      isCriticalStock
                        ? "bg-red-50"
                        : isLowStock
                        ? "bg-amber-50"
                        : ""
                    }`}
                  >
                    <TableCell className="font-medium">{medicine.id}</TableCell>
                    <TableCell className="font-semibold">
                      {medicine.name}
                    </TableCell>
                    <TableCell>
                      <CategoryBadge category={medicine.category} />
                    </TableCell>
                    <TableCell>{medicine.batch}</TableCell>
                    <TableCell
                      className={
                        isExpiringSoon ? "text-red-600 font-medium" : ""
                      }
                    >
                      {medicine.expiry}
                    </TableCell>
                    <TableCell>
                      <StockStatus
                        stock={medicine.stock}
                        threshold={medicine.threshold}
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      ${medicine.price.toFixed(2)}
                    </TableCell>
                    <TableCell>{medicine.supplier}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <span className="sr-only">Open menu</span>
                            •••
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={()=>handleEdit(medicine)}>
                            <FiEdit2 className="h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                            <FiPlus className="h-4 w-4" />
                            Restock
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="flex items-center gap-2 text-red-600 cursor-pointer"
                            onClick={() => {
                              setMedicineToDelete(medicine.id);
                              setDeleteModalOpen(true);
                            }}
                          >
                            <FiTrash2 className="h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-12">
                  <div className="flex flex-col items-center justify-center">
                    <FiAlertTriangle className="h-12 w-12 text-gray-300 mb-4" />
                    <p className="text-gray-500 font-medium">
                      No medicines found
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Try adjusting your search or filter to find what you're
                      looking for.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {filteredMedicines.length > medicinesPerPage && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstMedicine + 1} to{" "}
            {Math.min(indexOfLastMedicine, filteredMedicines.length)} of{" "}
            {filteredMedicines.length} medicines
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <FiChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <Button
                  key={number}
                  variant={currentPage === number ? "default" : "outline"}
                  size="sm"
                  onClick={() => paginate(number)}
                  className="h-8 w-8 p-0"
                >
                  {number}
                </Button>
              )
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0"
            >
              <FiChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        title="Delete Medicine"
        description="Are you sure you want to delete this medicine from inventory? This action cannot be undone."
      />
    </div>
  );
};

export default MedicineTable;
