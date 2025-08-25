import { useState } from "react";
import NursesHeader from "@/components/page-sections/hospital/staff-management/all-nurses/header/header";
import NursesTable from "@/components/page-sections/hospital/staff-management/all-nurses/nurses-table/nurses-table";
import AddNurse from "@/components/modals/add-nurse";
import { allNurses } from "@/constants/hospital/staff-management/all-nurses";

export default function AllNurses() {
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  // Sample nurse data
  const [nurses, setNurses] = useState(allNurses);
const [editData,setEditData]=useState(null)


  return (
    <div className="mx-auto p-4 bg-blue-300 min-h-screen rounded-lg">
      <NursesHeader
        setNurses={setNurses}
        nurses={nurses}
        setNurseModalOpen={setNurseModalOpen}
      />
      <NursesTable
        setNurses={setNurses}
        nurses={nurses}
        setNurseModalOpen={setNurseModalOpen}
        setEditData={setEditData}
      />
      <AddNurse
        editData={editData}
        setEditData={setEditData}
        setNurseModalOpen={setNurseModalOpen}
        nurseModalOpen={nurseModalOpen}
      />
    </div>
  );
}
