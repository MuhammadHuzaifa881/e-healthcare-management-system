import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEdit, FaTrash, FaUserMd } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import DeleteModal from "@/components/modals/common/delete-modal";
import AddDoctor from "@/components/modals/add-doctor";

const DoctorTable = ({
  filteredDoctors,
  setCurrentDoctor,
  setFormData,
  setIsDialogOpen,
  searchTerm,
  // handleEditID
}) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Reset to first page when filteredDoctors changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredDoctors]);

  const handleEdit = (doctor) => {
    setIsDialogOpen(true);
    setCurrentDoctor(doctor);
    setFormData({
      name: doctor.name,
      specialty: doctor.specialty,
      email: doctor.email,
      phone: doctor.phone,
      status: doctor.status,
    });
  };

  const handleDeleteClick = (id) => {
    setDoctorToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // setDoctors(doctors.filter((doctor) => doctor.id !== doctorToDelete));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setDoctorToDelete(null);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of visible page range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're at the beginning
      if (currentPage <= 2) {
        endPage = 3;
      }

      // Adjust if we're at the end
      if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("ellipsis-left");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("ellipsis-right");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Container with horizontal scrolling */}
      <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-sm border">
        <div className="overflow-x-auto">
          <Table className="w-full   text-sm text-left">
            <TableHeader className="text-xs text-gray-700 uppercase bg-gray-50">
              <TableRow>
                <TableHead className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  ID
                </TableHead>
                <TableHead className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Name
                </TableHead>
                <TableHead className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Specialty
                </TableHead>
                <TableHead className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Email
                </TableHead>
                <TableHead className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Phone
                </TableHead>
                <TableHead className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Status
                </TableHead>
                <TableHead className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-200">
              {currentDoctors.length > 0 ? (
                currentDoctors.map((doctor) => (
                  <TableRow
                    key={doctor.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <TableCell className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700 font-medium">
                        {doctor.id}
                      </div>
                    </TableCell>
                    <TableCell className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <FaUserMd className="h-4 w-4 md:h-5 md:w-5" />
                        </div>
                        <div className="ml-2 md:ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {doctor.name}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700 font-medium">
                        {doctor.specialty}
                      </div>
                    </TableCell>
                    <TableCell className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 break-all max-w-[120px] md:max-w-none">
                        {doctor.email}
                      </div>
                    </TableCell>
                    <TableCell className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{doctor.phone}</div>
                    </TableCell>
                    <TableCell className="px-3 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          doctor.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : doctor.status === "On Leave" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {doctor.status}
                      </span>
                    </TableCell>
                    <TableCell className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-2 justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(doctor)}
                          className="text-blue-600 hover:text-blue-900 border-blue-200 hover:bg-blue-50 text-xs md:text-sm"
                        >
                          <FaEdit className="mr-1 hidden md:inline" />
                          <span className="md:hidden">
                            <FaEdit />
                          </span>
                          <span className="hidden md:inline">Edit</span>
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteClick(doctor.id)}
                          className="text-white hover:text-red-900 border-2 border-red-200 hover:bg-red-50 text-xs md:text-sm"
                        >
                          <FaTrash className="mr-1 hidden md:inline" />
                          <span className="md:hidden">
                            <FaTrash />
                          </span>
                          <span className="hidden md:inline">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <FaUserMd className="h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-lg font-medium">No doctors found</p>
                      <p className="text-sm mt-1">
                        {searchTerm
                          ? "Try a different search term"
                          : "Add a new doctor to get started"}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="mb-4 text-sm text-gray-500 mt-4 px-3">
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, filteredDoctors.length)} of{" "}
          {filteredDoctors.length} doctors
        </div>
        {filteredDoctors.length > itemsPerPage && (
          <div className="mt-4 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {getPageNumbers().map((page, index) => {
                  if (page === "ellipsis-left" || page === "ellipsis-right") {
                    return (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }

                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        title="Delete Doctor"
        description="Are you sure you want to delete this doctor? This action cannot be undone."
      />
      <AddDoctor />
    </>
  );
};

export default DoctorTable;