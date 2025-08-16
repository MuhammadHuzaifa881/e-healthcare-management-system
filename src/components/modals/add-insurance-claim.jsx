import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
const AddInsuranceClaim = ({open,onOpenChange}) => {
  return (
    <>
            <Dialog open={open} onOpenChange={onOpenChange}>
               <DialogContent>
                 <DialogHeader>
                   <DialogTitle>Submit New Insurance Claim</DialogTitle>
                   <DialogDescription>
                     Fill out the form to submit a new insurance claim for a patient.
                   </DialogDescription>
                 </DialogHeader>
                 <div className="grid gap-4 py-4">
                   {/* Form fields would go here */}
                   <div className="text-center py-8">
                     <p className="text-gray-500">Claim submission form would appear here</p>
                   </div>
                 </div>
                 <DialogFooter>
                   <Button type="submit">Submit Claim</Button>
                 </DialogFooter>
               </DialogContent>
             </Dialog>
    </>
  )
}

export default AddInsuranceClaim