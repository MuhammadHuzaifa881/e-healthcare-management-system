import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiUser } from "react-icons/fi";
const AddReceptionist = ({
  receptionistModal,
  setReceptionistModalOpen,
  isEditMode,
  currentReceptionist,
  setCurrentReceptionist,
  receptionists,
  setReceptionists,
  setIsEditMode
}) => {
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentReceptionist((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (isEditMode) {
      setReceptionists(
        receptionists.map((r) =>
          r.id === currentReceptionist.id ? currentReceptionist : r
        )
      );
    } else {
      const newId = (receptionists.length + 1).toString();
      setReceptionists([
        ...receptionists,
        { ...currentReceptionist, id: newId },
      ]);
    }
    resetForm();
    setOpenDialog(false);
  };
  // Reset form
  const resetForm = () => {
    setCurrentReceptionist({
      id: "",
      name: "",
      email: "",
      phone: "",
      shift: "Morning",
      status: "active",
      avatar: "",
    });
    setIsEditMode(false);
  };
  return (
    <>
      <Dialog open={receptionistModal} onOpenChange={setReceptionistModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? "Edit Receptionist" : "Add New Receptionist"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={currentReceptionist.avatar} />
                <AvatarFallback>
                  <FiUser className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={currentReceptionist.name}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={currentReceptionist.email}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={currentReceptionist.phone}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shift" className="text-right">
                Shift
              </Label>
              <select
                id="shift"
                name="shift"
                value={currentReceptionist.shift}
                onChange={handleInputChange}
                className="col-span-3 border rounded-md p-2"
              >
                <option value="Morning">Morning (8AM-4PM)</option>
                <option value="Evening">Evening (4PM-12AM)</option>
                <option value="Night">Night (12AM-8AM)</option>
              </select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <select
                id="status"
                name="status"
                value={currentReceptionist.status}
                onChange={handleInputChange}
                className="col-span-3 border rounded-md p-2"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="on leave">On Leave</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setReceptionistModalOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleSubmit}>
              {isEditMode ? "Update" : "Add"} Receptionist
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddReceptionist;
