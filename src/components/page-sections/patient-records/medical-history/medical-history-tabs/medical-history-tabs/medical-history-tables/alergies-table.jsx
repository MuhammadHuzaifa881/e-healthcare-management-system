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
import { Button } from "@/components/ui/button";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TabsContent } from "@/components/ui/tabs";
import TableCardHead from "./table-card-head";
import DeleteModal from "@/components/modals/common/delete-modal";

const AllergiesTable = () => {
  const [allergies, setAllergies] = useState([
    {
      id: 1,
      name: "Penicillin",
      reaction: "Rash",
      severity: "Moderate",
      notes: "Discovered in childhood",
    },
    {
      id: 2,
      name: "Shellfish",
      reaction: "Hives",
      severity: "Severe",
      notes: "Anaphylactic reaction",
    },
  ]);

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [allergyToDelete, setAllergyToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAllergies(allergies.filter(allergy => allergy.id !== allergyToDelete));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setAllergyToDelete(null);
    }
  };

  return (
    <>
      <TabsContent value="allergies">
        <Card>
          <TableCardHead 
            title='Allergies' 
            description='Your current allergy information' 
          />
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Allergen</TableHead>
                  <TableHead>Reaction</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allergies.map((allergy) => (
                  <TableRow key={allergy.id}>
                    <TableCell className="font-medium">
                      {allergy.name}
                    </TableCell>
                    <TableCell>{allergy.reaction}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          allergy.severity === "Mild"
                            ? "bg-green-100 text-green-800"
                            : allergy.severity === "Moderate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {allergy.severity}
                      </span>
                    </TableCell>
                    <TableCell>{allergy.notes}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <FiEdit2 className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => {
                            setAllergyToDelete(allergy.id);
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
        title="Delete Allergy Record"
        description="Are you sure you want to delete this allergy record? This action cannot be undone."
      />
    </>
  );
};

export default AllergiesTable;