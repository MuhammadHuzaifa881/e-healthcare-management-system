import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


const AddEquipment = ({addEquipmentModalOpen,setAddEquipmentModalOpen}) => {
    const  hanldeSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
        setAddEquipmentModalOpen(false);
    }
  return (
    <>
      
              <Dialog open={addEquipmentModalOpen} onOpenChange={setAddEquipmentModalOpen}>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Add New Equipment</DialogTitle>
                    <DialogDescription>
                      Register new medical equipment to the hospital inventory.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Equipment Name</Label>
                        <Input placeholder="Enter equipment name" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Type</Label>
                        <Input placeholder="Select equipment type" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Serial Number</Label>
                        <Input placeholder="Enter serial number" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Location</Label>
                        <Input placeholder="Enter location" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Status</Label>
                        <Input placeholder="Select status" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Last Maintenance</Label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Next Maintenance</Label>
                        <Input type="date" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Warranty Expiry</Label>
                      <Input type="date" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={hanldeSubmit}>Add Equipment</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
    </>
  )
}

export default AddEquipment