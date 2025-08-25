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
import React, { useEffect, useState } from "react";

const AddMedicine = ({
  setAddMedicineModalOpen,
  addMedicineModalOpen,
  editData,
  setEditData
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    batch: "",
    expiry: "",
    stock: "",
    threshold: "",
    price: "",
    supplier: "",
  });

  useEffect(() => {
    if (editData) {
      console.log(editData, "medicine edit data");
      // Pre-fill form with editData when in edit mode
      setFormData({
        name: editData.name || "",
        category: editData.category || "",
        batch: editData.batch || "",
        expiryDate: editData.expiry || "",
        stock: editData.stock || "",
        threshold: editData.threshold || "",
        price: editData.price || "",
        supplier: editData.supplier || "",
      });
    } else {
      // Reset form when adding new medicine
      setFormData({
        name: "",
        category: "",
        batch: "",
        expiry: "",
        stock: "",
        threshold: "",
        price: "",
        supplier: "",
      });
    }
  }, [editData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data and whether we're editing to the parent component
    // onSave(formData, !!editData);
    setAddMedicineModalOpen(false);
    setEditData(null)
  };

  return (
    <>
      <Dialog
        open={addMedicineModalOpen}
        onOpenChange={setAddMedicineModalOpen}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editData ? "Edit Medicine" : "Add New Medicine"}
            </DialogTitle>
            <DialogDescription>
              {editData
                ? "Update the medicine details."
                : "Fill out the form to add a new medicine to the inventory."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Medicine Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter medicine name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">
                    Category
                  </Label>
                  <Input
                    id="category"
                    name="category"
                    placeholder="Select category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="batch" className="text-sm font-medium">
                    Batch Number
                  </Label>
                  <Input
                    id="batch"
                    name="batch"
                    placeholder="Enter batch number"
                    value={formData.batch}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="text-sm font-medium">
                    Expiry Date
                  </Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    type="date"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock" className="text-sm font-medium">
                    Initial Stock
                  </Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    placeholder="Enter quantity"
                    value={formData.stock}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="threshold" className="text-sm font-medium">
                    Threshold
                  </Label>
                  <Input
                    id="threshold"
                    name="threshold"
                    type="number"
                    placeholder="Low stock alert"
                    value={formData.threshold}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-sm font-medium">
                    Price (USD)
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    value={formData.price}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier" className="text-sm font-medium">
                    Supplier
                  </Label>
                  <Input
                    id="supplier"
                    name="supplier"
                    placeholder="Enter supplier"
                    value={formData.supplier}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {editData ? "Update Medicine" : "Add Medicine"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddMedicine;
