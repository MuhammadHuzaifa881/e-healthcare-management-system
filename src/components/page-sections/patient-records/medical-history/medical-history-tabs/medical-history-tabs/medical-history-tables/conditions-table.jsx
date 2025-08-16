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
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import TableCardHead from "./table-card-head";
import DeleteModal from "@/components/modals/common/delete-modal";

const ConditionsTable = () => {
  const [medicalConditions, setMedicalConditions] = useState([
    {
      id: 1,
      name: "Type 2 Diabetes",
      date: "2018-05-15",
      severity: "Moderate",
      notes: "Controlled with medication",
    },
    {
      id: 2,
      name: "Hypertension",
      date: "2017-11-22",
      severity: "Mild",
      notes: "Regular monitoring required",
    },
    {
      id: 3,
      name: "Asthma",
      date: "2015-03-10",
      severity: "Moderate",
      notes: "Seasonal flare-ups",
    },
  ]);

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [conditionToDelete, setConditionToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle delete confirmation
  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMedicalConditions(medicalConditions.filter(condition => condition.id !== conditionToDelete));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setIsDeleting(false);
      setConditionToDelete(null);
    }
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
                {medicalConditions.map((condition) => (
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