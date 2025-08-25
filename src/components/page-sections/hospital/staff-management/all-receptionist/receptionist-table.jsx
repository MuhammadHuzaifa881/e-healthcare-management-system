import DeleteModal from "@/components/modals/common/delete-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
} from "@/components/ui/table";
import React, { useState } from "react";
import { FiEdit2, FiPhone, FiTrash2 } from "react-icons/fi";

const ReceptionistTable = ({
  currentItems,
  currentPage,
  totalPages,
  setCurrentPage,
  setCurrentReceptionist,
  setIsEditMode,
  setReceptionistModalOpen,
}) => {
  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [receptionistToDelete, setReceptionistToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setReceptionistToDelete(null);
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

  // Edit receptionist
  const handleEdit = (receptionist) => {
    setCurrentReceptionist(receptionist);
    setIsEditMode(true);
    setReceptionistModalOpen(true);
  };

  return (
    <>
      <div className="rounded-md border mb-4 p-4 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Receptionist</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Shift</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((receptionist) => (
              <TableRow key={receptionist.id}>
                <TableCell>{receptionist.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={receptionist.avatar} />
                      <AvatarFallback>
                        {receptionist.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{receptionist.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {receptionist.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FiPhone className="h-4 w-4" />
                    <span>{receptionist.phone}</span>
                  </div>
                </TableCell>
                <TableCell>{receptionist.shift}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      receptionist.status === "active"
                        ? "bg-green-100 text-green-800 hover:bg-green-200 font-medium"
                        : receptionist.status === "on leave"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 font-medium"
                        : "bg-red-100 text-red-800 hover:bg-red-200 font-medium"
                    }
                  >
                    {receptionist.status.charAt(0).toUpperCase() +
                      receptionist.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(receptionist)}
                    >
                      <FiEdit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => {
                        setReceptionistToDelete(receptionist.id);
                        setDeleteModalOpen(true);
                      }}
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination>
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
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        title="Delete Receptionist"
        description="Are you sure you want to delete this receptionist? This action cannot be undone."
      />
    </>
  );
};

export default ReceptionistTable;
