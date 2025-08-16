import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AddNurse = ({setNurseModalOpen,nurseModalOpen}) => {
        // New nurse form state
  const [newNurse, setNewNurse] = useState({
    name: "",
    email: "",
    department: "",
  });
  const handleAddNurse = () => {
    if (newNurse.name && newNurse.email && newNurse.department) {
      const newId = (nurses.length + 1).toString();
      setNurses([...nurses, { id: newId, ...newNurse }]);
      setNewNurse({ name: "", email: "", department: "" });

      // Go to the last page if the new nurse is added beyond current pages
      const pageForNewNurse = Math.ceil((nurses.length + 1) / nursesPerPage);
      setCurrentPage(pageForNewNurse);
    }
  };

  return (
    <>
      <Dialog open={nurseModalOpen} onOpenChange={setNurseModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Nurse</DialogTitle>
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
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="button" onClick={handleAddNurse}>
              Add Nurse
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNurse;
