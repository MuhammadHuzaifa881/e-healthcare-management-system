import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TabsContent } from "@/components/ui/tabs";
import TableCardHead from "./table-card-head";
import DeleteModal from "@/components/modals/common/delete-modal";
import { medicationsList } from "@/constants/doctor/patient-records/medical-history";

const MedicationTables = () => {
  const [medications, setMedications] = useState(medicationsList);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(medications.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = medications.slice(indexOfFirstItem, indexOfLastItem);

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [medicationToDelete, setMedicationToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const updated = medications.filter(
        (med) => med.id !== medicationToDelete
      );
      setMedications(updated);

      // Adjust pagination if deleting last item on last page
      if (indexOfFirstItem >= updated.length && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setMedicationToDelete(null);
    }
  };

  return (
    <>
      <TabsContent value="medications">
        <Card>
          <TableCardHead
            title="Medication"
            description="Your current and past medications"
          />
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((med) => (
                  <TableRow key={med.id}>
                    <TableCell className="font-medium">{med.name}</TableCell>
                    <TableCell>{med.dosage}</TableCell>
                    <TableCell>{med.frequency}</TableCell>
                    <TableCell>{med.startDate}</TableCell>
                    <TableCell>{med.notes}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <FiEdit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setMedicationToDelete(med.id);
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
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        title="Delete Medication"
        description="Are you sure you want to delete this medication record? This action cannot be undone."
      />
    </>
  );
};

export default MedicationTables;
