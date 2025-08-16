import DeleteModal from "@/components/modals/common/delete-modal";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";// Import your existing DeleteModal
import  { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const NursesTable = ({ nurses, setNurses }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const nursesPerPage = 4;

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [nurseToDelete, setNurseToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Calculate pagination values
  const indexOfLastNurse = currentPage * nursesPerPage;
  const indexOfFirstNurse = indexOfLastNurse - nursesPerPage;
  const currentNurses = nurses.slice(indexOfFirstNurse, indexOfLastNurse);
  const totalPages = Math.ceil(nurses.length / nursesPerPage);

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNurses(nurses.filter(nurse => nurse.id !== nurseToDelete));
      setDeleteModalOpen(false);
      
      // Adjust current page if we deleted the last item on the page
      if (currentNurses.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setNurseToDelete(null);
    }
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const half = Math.floor(maxVisiblePages / 2);
      let start = Math.max(1, currentPage - half);
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <>
      <div className="rounded-md border p-4 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentNurses.length > 0 ? (
              currentNurses.map((nurse) => (
                <TableRow key={nurse.id}>
                  <TableCell className="font-medium">{nurse.name}</TableCell>
                  <TableCell>{nurse.email}</TableCell>
                  <TableCell>{nurse.department}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="icon">
                        <FiEdit2 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => {
                          setNurseToDelete(nurse.id);
                          setDeleteModalOpen(true);
                        }}
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  No nurses found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Shadcn Pagination */}
        {nurses.length > 0 && (
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                />
              </PaginationItem>

              {getPageNumbers().map((number) => (
                <PaginationItem key={number}>
                  <PaginationLink
                    isActive={number === currentPage}
                    onClick={() => setCurrentPage(number)}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        title="Delete Nurse"
        description="Are you sure you want to delete this nurse? This action cannot be undone."
      />
    </>
  );
};

export default NursesTable;