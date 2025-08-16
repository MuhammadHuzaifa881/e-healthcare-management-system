import { useState } from "react";
import NursesHeader from "@/components/page-sections/staff-management/all-nurses/header/header";
import NursesTable from "@/components/page-sections/staff-management/all-nurses/nurses-table/nurses-table";
import AddNurse from "@/components/modals/add-nurse";

export default function AllNurses() {
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  // Sample nurse data
  const [nurses, setNurses] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.j@hospital.com",
      department: "Pediatrics",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael.c@hospital.com",
      department: "Emergency",
    },
    {
      id: "3",
      name: "Lisa Rodriguez",
      email: "lisa.r@hospital.com",
      department: "Oncology",
    },
    {
      id: "4",
      name: "David Wilson",
      email: "david.w@hospital.com",
      department: "Cardiology",
    },
    {
      id: "5",
      name: "Emily Brown",
      email: "emily.b@hospital.com",
      department: "Neurology",
    },
    {
      id: "6",
      name: "James Taylor",
      email: "james.t@hospital.com",
      department: "Orthopedics",
    },
    {
      id: "7",
      name: "Olivia Martinez",
      email: "olivia.m@hospital.com",
      department: "Pediatrics",
    },
    {
      id: "8",
      name: "Robert Anderson",
      email: "robert.a@hospital.com",
      department: "Emergency",
    },
    {
      id: "9",
      name: "Sophia Thomas",
      email: "sophia.t@hospital.com",
      department: "Oncology",
    },
    {
      id: "10",
      name: "William Jackson",
      email: "william.j@hospital.com",
      department: "Cardiology",
    },
    {
      id: "11",
      name: "Emma White",
      email: "emma.w@hospital.com",
      department: "Neurology",
    },
    {
      id: "12",
      name: "Daniel Harris",
      email: "daniel.h@hospital.com",
      department: "Orthopedics",
    },
  ]);

  return (
    <div className="mx-auto p-4 bg-blue-300 min-h-screen rounded-lg">
      <NursesHeader setNurses={setNurses} nurses={nurses} setNurseModalOpen={setNurseModalOpen} />
      <NursesTable setNurses={setNurses} nurses={nurses} />
      <AddNurse
      setNurseModalOpen={setNurseModalOpen}
      nurseModalOpen={nurseModalOpen}
      />
    </div>
  );
}
