import { getStatusBadge } from "@/helper/status-badge-color/status-badge-color";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaUser, FaEdit, FaHistory, FaTrash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState, useRef, useEffect } from "react";
import DeleteModal from "@/components/modals/common/delete-modal";

const PatientRecordTable = ({
  currentPatients,
  totalPages,
  currentPage,
  paginate,
  handleEditDetail
}) => {
  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const dropdownRef = useRef(null);

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setPatientToDelete(null);
    }
  };

  // Close dropdown when modal opens
  useEffect(() => {
    if (deleteModalOpen && dropdownRef.current) {
      const dropdownTrigger = dropdownRef.current.querySelector('[data-state="open"]');
      if (dropdownTrigger) {
        dropdownTrigger.click(); // Close the dropdown
      }
    }
  }, [deleteModalOpen]);

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg pointer-events-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Last Visit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentPatients.length > 0 ? (
            currentPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.id}</TableCell>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600">{patient.email}</div>
                  <div className="text-sm text-gray-600">{patient.phone}</div>
                </TableCell>
                <TableCell>
                  {new Date(patient.lastVisit).toLocaleDateString()}
                </TableCell>
                <TableCell>{getStatusBadge(patient.status)}</TableCell>
                <TableCell>
                  <div ref={dropdownRef}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <FiMoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" onCloseAutoFocus={(e) => e.preventDefault()}>
                        <DropdownMenuItem>
                          <FaUser className="mr-2" /> View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEditDetail(patient)}>
                          <FaEdit className="mr-2" /> Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FaHistory className="mr-2" /> Medical History
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600"
                          onClick={() => {
                            setPatientToDelete(patient.id);
                            setDeleteModalOpen(true);
                          }}
                        >
                          <FaTrash className="mr-2" /> Delete Patient
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-8">
                No patients found matching your search criteria.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="w-full flex justify-between items-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <PaginationItem key={number}>
                  <Button
                    variant={currentPage === number ? "default" : "ghost"}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Button>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && paginate(currentPage + 1)
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setPatientToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        title="Delete Patient Record"
        description="Are you sure you want to delete this patient record? This action cannot be undone and all associated data will be permanently removed."
      />
    </div>
  );
};

export default PatientRecordTable;