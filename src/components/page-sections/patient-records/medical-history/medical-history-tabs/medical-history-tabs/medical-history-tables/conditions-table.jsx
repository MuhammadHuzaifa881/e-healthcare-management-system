import React, { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FiEdit2, FiTrash2, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import TableCardHead from "./table-card-head";
import DeleteModal from "@/components/modals/common/delete-modal";
import { conditionlist } from "@/constants/doctor/patient-records/medical-history";

const ConditionsTable = () => {
  const [medicalConditions, setMedicalConditions] = useState(conditionlist);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [conditionToDelete, setConditionToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Calculate pagination values
  const totalPages = Math.ceil(medicalConditions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = medicalConditions.slice(startIndex, startIndex + itemsPerPage);

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const updatedConditions = medicalConditions.filter(condition => condition.id !== conditionToDelete);
      setMedicalConditions(updatedConditions);
      
      // Adjust current page if needed after deletion
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setConditionToDelete(null);
    }
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Generate page numbers for pagination controls
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <>
      <TabsContent value="conditions">
        <Card>
          <TableCardHead title='Medical Conditions' description='Your current and past medical conditions' />
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Condition</TableHead>
                  <TableHead>Date Diagnosed</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((condition) => (
                  <TableRow key={condition.id}>
                    <TableCell className="font-medium">
                      {condition.name}
                    </TableCell>
                    <TableCell>{condition.date}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          condition.severity === "Mild"
                            ? "bg-green-100 text-green-800"
                            : condition.severity === "Moderate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {condition.severity}
                      </span>
                    </TableCell>
                    <TableCell>{condition.notes}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <FiEdit2 className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => {
                            setConditionToDelete(condition.id);
                            setDeleteModalOpen(true);
                          }}
                        >
                          <FiTrash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Pagination Controls */}
            {medicalConditions.length > itemsPerPage && (
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, medicalConditions.length)} of {medicalConditions.length} entries
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                  >
                    <FiChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <FiChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {getPageNumbers().map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <FiChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    <FiChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        title="Delete Medical Condition"
        description="Are you sure you want to delete this medical condition record? This action cannot be undone."
      />
    </>
  );
};

export default ConditionsTable;