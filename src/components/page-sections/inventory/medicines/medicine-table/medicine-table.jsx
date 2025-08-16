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
import DeleteModal  from "@/components/modals/common/delete-modal";

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
  setMedicines,  // Added to manage medicines state
  medicines      // Added to access full medicines data
}) => {
  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [medicineToDelete, setMedicineToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Category badge component
  const CategoryBadge = ({ category }) => {
    const categoryMap = {
      analgesic: { text: "Analgesic", variant: "default" },
      antibiotic: { text: "Antibiotic", variant: "secondary" },
      cardiovascular: { text: "Cardiovascular", variant: "destructive" },
      diabetes: { text: "Diabetes", variant: "outline" },
      cholesterol: { text: "Cholesterol", variant: "outline" },
      gastrointestinal: { text: "Gastrointestinal", variant: "outline" },
      respiratory: { text: "Respiratory", variant: "outline" },
      antihistamine: { text: "Antihistamine", variant: "outline" },
      psychiatric: { text: "Psychiatric", variant: "outline" },
    };

    return (
      <Badge variant={categoryMap[category].variant}>
        {categoryMap[category].text}
      </Badge>
    );
  };

  // Stock status component
  const StockStatus = ({ stock, threshold }) => {
    const percentage = (stock / (threshold * 3)) * 100;
    const isLowStock = stock <= threshold;

    return (
      <div className="flex items-center gap-2">
        <Progress value={percentage} className="w-24 h-2" />
        {isLowStock ? <FiAlertTriangle className="text-yellow-500" /> : null}
        <span className={isLowStock ? "text-yellow-600 font-medium" : ""}>
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
      await new Promise(resolve => setTimeout(resolve, 1000));
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

  return (
    <div className="bg-white p-4 rounded-lg">
      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search medicines..."
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
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setCategoryFilter("all")}>
                All Categories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("analgesic")}>
                Analgesic
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("antibiotic")}>
                Antibiotic
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("cardiovascular")}
              >
                Cardiovascular
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("diabetes")}>
                Diabetes
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("cholesterol")}
              >
                Cholesterol
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("gastrointestinal")}
              >
                Gastrointestinal
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("respiratory")}
              >
                Respiratory
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("antihistamine")}
              >
                Antihistamine
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCategoryFilter("psychiatric")}
              >
                Psychiatric
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="flex items-center gap-2">
                <FiDownload className="h-4 w-4" />
                Export Inventory
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
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
              currentMedicines.map((medicine) => (
                <TableRow
                  key={medicine.id}
                  className={
                    medicine.stock <= medicine.threshold ? "bg-yellow-50" : ""
                  }
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
                      new Date(medicine.expiry) - new Date() <
                      90 * 24 * 60 * 60 * 1000
                        ? "text-red-600 font-medium"
                        : ""
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
                  <TableCell>${medicine.price.toFixed(2)}</TableCell>
                  <TableCell>{medicine.supplier}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          •••
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <FiEdit2 className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <FiPlus className="h-4 w-4" />
                          Restock
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-red-600"
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  No medicines found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {filteredMedicines.length > medicinesPerPage && (
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstMedicine + 1} to{" "}
            {Math.min(indexOfLastMedicine, filteredMedicines.length)} of{" "}
            {filteredMedicines.length} medicines
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
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