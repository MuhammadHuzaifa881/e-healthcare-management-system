import { useState, useEffect } from "react";
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

const AddEquipment = ({ 
  addEquipmentModalOpen, 
  setAddEquipmentModalOpen, 
  editData,
  // onSave 
}) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    serial: "",
    location: "",
    status: "",
    lastMaintenance: "",
    nextMaintenance: "",
    warranty: ""
  });

  // Update form data when editData changes
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || "",
        type: editData.type || "",
        serial: editData.serial || "",
        location: editData.location || "",
        status: editData.status || "",
        lastMaintenance: editData.lastMaintenance || "",
        nextMaintenance: editData.nextMaintenance || "",
        warranty: editData.warranty || ""
      });
    } else {
      // Reset form when adding new equipment
      setFormData({
        name: "",
        type: "",
        serial: "",
        location: "",
        status: "",
        lastMaintenance: "",
        nextMaintenance: "",
        warranty: ""
      });
    }
  }, [editData, addEquipmentModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data and whether we're editing to the parent component
    // onSave(formData, !!editData);
    setAddEquipmentModalOpen(false);
  };

  return (
    <>
      <Dialog
        open={addEquipmentModalOpen}
        onOpenChange={setAddEquipmentModalOpen}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editData ? "Edit Equipment" : "Add New Equipment"}
            </DialogTitle>
            <DialogDescription>
              {editData 
                ? "Update the medical equipment details." 
                : "Register new medical equipment to the hospital inventory."
              }
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Equipment Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter equipment name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-sm font-medium">
                    Type
                  </Label>
                  <Input
                    id="type"
                    name="type"
                    placeholder="Select equipment type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serial" className="text-sm font-medium">
                    Serial Number
                  </Label>
                  <Input
                    id="serial"
                    name="serial"
                    placeholder="Enter serial number"
                    value={formData.serial}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status" className="text-sm font-medium">
                    Status
                  </Label>
                  <Input
                    id="status"
                    name="status"
                    placeholder="Select status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastMaintenance" className="text-sm font-medium">
                    Last Maintenance
                  </Label>
                  <Input
                    id="lastMaintenance"
                    name="lastMaintenance"
                    type="date"
                    value={formData.lastMaintenance}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nextMaintenance" className="text-sm font-medium">
                    Next Maintenance
                  </Label>
                  <Input
                    id="nextMaintenance"
                    name="nextMaintenance"
                    type="date"
                    value={formData.nextMaintenance}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="warranty" className="text-sm font-medium">
                  Warranty Expiry
                </Label>
                <Input
                  id="warranty"
                  name="warranty"
                  type="date"
                  value={formData.warranty}
                  onChange={handleChange}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {editData ? "Update Equipment" : "Add Equipment"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEquipment;