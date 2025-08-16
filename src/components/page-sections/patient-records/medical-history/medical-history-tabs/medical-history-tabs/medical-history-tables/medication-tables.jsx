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

const MedicationTables = () => {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "2018-05-20",
      notes: "For diabetes",
    },
    {
      id: 2,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Daily",
      startDate: "2017-12-01",
      notes: "For blood pressure",
    },
    {
      id: 3,
      name: "Albuterol",
      dosage: "90mcg",
      frequency: "As needed",
      startDate: "2015-03-15",
      notes: "Inhaler for asthma",
    },
  ]);

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
      setMedications(
        medications.filter((med) => med.id !== medicationToDelete)
      );
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
                {medications.map((med) => (
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
