import { Button } from "@/components/ui/button"
import { FiPlus } from "react-icons/fi"

const MyPatientHeader = ({setPatientModalOpen}) => {
  return (
    <>
      <div className="flex justify-between items-center">
             <div>
               <h1 className="text-3xl font-bold">My Patients</h1>
               <p className="text-muted-foreground">Manage your patient list and appointments</p>
             </div>
             <Button className="flex items-center gap-2 bg-primary-600 text-white hover:bg-primary-700" onClick={() => setPatientModalOpen(true)}>
               <FiPlus /> New Patient
             </Button>
           </div> 
    </>
  )
}

export default MyPatientHeader