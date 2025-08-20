// src/components/Doctors.jsx
import { useState } from "react";
import AddDoctor from "@/components/modals/add-doctor";
import AllDoctorHeader from "@/components/page-sections/hospital/staff-management/all-doctors/header/header";
import DoctorTable from "@/components/page-sections/hospital/staff-management/all-doctors/doctor-table/doctor-table";
import SearchDoctor from "@/components/page-sections/hospital/staff-management/all-doctors/search-doctor/search-doctor";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      email: "sarah.johnson@hospital.com",
      phone: "(555) 123-4567",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      email: "michael.chen@hospital.com",
      phone: "(555) 234-5678",
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      specialty: "Pediatrics",
      email: "emily.wilson@hospital.com",
      phone: "(555) 345-6789",
      status: "On Leave",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-full mx-auto bg-blue-300 min-h-screen rounded-lg">
      <AllDoctorHeader
        setCurrentDoctor={setCurrentDoctor}
        setIsDialogOpen={setIsDialogOpen}
      />

      <SearchDoctor searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <DoctorTable filteredDoctors={filteredDoctors} />

      <AddDoctor
        isDialogOpen={isDialogOpen}
        currentDoctor={currentDoctor}
        setCurrentDoctor={setCurrentDoctor}
        setDoctors={setDoctors}
        formData={formData}
        setFormData={setFormData}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
};

export default AllDoctors;
