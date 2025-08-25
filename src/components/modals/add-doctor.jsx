import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const AddDoctor = ({ doctors, setDoctors, setIsDialogOpen, isDialogOpen, currentDoctor, setCurrentDoctor, formData, setFormData }) => {
  const statusOptions = ['Active', 'On Leave', 'Inactive'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentDoctor) {
      // Update existing doctor
      setDoctors(doctors.map(doc => 
        doc.id === currentDoctor.id ? { ...formData, id: currentDoctor.id } : doc
      ));
    } else {
      // Add new doctor
      const newDoctor = {
        ...formData,
        id: doctors.length > 0 ? Math.max(...doctors.map(d => d.id)) + 1 : 1
      };
      setDoctors([...doctors, newDoctor]);
    }
    handleCloseDialog();
  };

  const specialties = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Oncology",
    "General Medicine",
  ];

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentDoctor(null);
    setFormData({
      name: "",
      specialty: "",
      email: "",
      phone: "",
      status: "Active",
    });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{currentDoctor ? 'Edit Doctor' : 'Add New Doctor'}</DialogTitle>
          <DialogDescription>
            {currentDoctor ? 'Update the doctor details' : 'Add a new doctor to the system'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="specialty" className="text-right">
                Specialty
              </label>
              <Select
                value={formData?.specialty}
                onValueChange={(value) => setFormData({...formData, specialty: value})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map(specialty => (
                    <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData?.email}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="phone" className="text-right">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData?.phone}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="status" className="text-right">
                Status
              </label>
              <Select
                value={formData?.status}
                onValueChange={(value) => setFormData({...formData, status: value})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map(status => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={handleCloseDialog}>Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white">
              {currentDoctor ? 'Update Doctor' : 'Add Doctor'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddDoctor;