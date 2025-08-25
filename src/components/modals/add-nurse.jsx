import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const AddNurse = ({
  setNurseModalOpen,
  nurseModalOpen,
  editData,
  setEditData,
  // onAddNurse,
  // onUpdateNurse,
}) => {
  // New nurse form state
  const [newNurse, setNewNurse] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleAddNurse = () => {
    if (newNurse.name && newNurse.email && newNurse.department) {
      // onAddNurse(newNurse);
      setNewNurse({ name: "", email: "", department: "" });
      setNurseModalOpen(false);
    }
  };

  const handleModelClose = () => {
    setNurseModalOpen(false);
    setEditData(null);
    setNewNurse({ name: "", email: "", department: "" });
  };

  useEffect(() => {
    if (editData) {
      setNewNurse({
        name: editData?.name || "",
        email: editData?.email || "",
        department: editData?.department || "",
      });
    } else {
      setNewNurse({ name: "", email: "", department: "" });
    }
  }, [editData, nurseModalOpen]);

  const handleUpdateNurse = () => {
    if (newNurse.name && newNurse.email && newNurse.department) {
      // onUpdateNurse(editData.id, newNurse);
      setNurseModalOpen(false);
      setEditData(null);
      setNewNurse({ name: "", email: "", department: "" });
    }
  };

  return (
    <Dialog open={nurseModalOpen} onOpenChange={handleModelClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editData ? "Update Nurse" : "Add New Nurse"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newNurse.name}
              onChange={(e) =>
                setNewNurse({ ...newNurse, name: e.target.value })
              }
              className="col-span-3"
              placeholder="Enter nurse name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={newNurse.email}
              onChange={(e) =>
                setNewNurse({ ...newNurse, email: e.target.value })
              }
              className="col-span-3"
              placeholder="Enter email address"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="department" className="text-right">
              Department
            </Label>
            <Input
              id="department"
              value={newNurse.department}
              onChange={(e) =>
                setNewNurse({ ...newNurse, department: e.target.value })
              }
              className="col-span-3"
              placeholder="Enter department"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={handleModelClose}>
            Cancel
          </Button>
          <Button
            type="button"
            className="text-white bg-primary-600 hover:bg-primary-700"
            onClick={editData ? handleUpdateNurse : handleAddNurse}
            disabled={!newNurse.name || !newNurse.email || !newNurse.department}
          >
            {editData ? "Update" : "Add Nurse"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNurse;