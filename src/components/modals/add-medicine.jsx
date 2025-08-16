import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const AddMedicine = ({setAddMedicineModalOpen,addMedicineModalOpen}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  setAddMedicineModalOpen(false);
  }
  return (
    <>
      <Dialog open={addMedicineModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Medicine</DialogTitle>
            <DialogDescription>
              Fill out the form to add a new medicine to the inventory.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Form fields would go here */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Medicine Name</Label>
                <Input placeholder="Enter medicine name" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Category</Label>
                <Input placeholder="Select category" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Batch Number</Label>
                <Input placeholder="Enter batch number" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Expiry Date</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Initial Stock</Label>
                <Input type="number" placeholder="Enter quantity" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Threshold</Label>
                <Input type="number" placeholder="Low stock alert" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Price (USD)</Label>
                <Input type="number" placeholder="0.00" step="0.01" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Supplier</Label>
                <Input placeholder="Enter supplier" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>Add Medicine</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddMedicine;
