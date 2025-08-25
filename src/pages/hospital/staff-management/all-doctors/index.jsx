// src/components/Doctors.jsx
import { useState } from "react";
import AddDoctor from "@/components/modals/add-doctor";
import AllDoctorHeader from "@/components/page-sections/hospital/staff-management/all-doctors/header/header";
import DoctorTable from "@/components/page-sections/hospital/staff-management/all-doctors/doctor-table/doctor-table";
import SearchDoctor from "@/components/page-sections/hospital/staff-management/all-doctors/search-doctor/search-doctor";
import { allDoctors } from "@/constants/hospital/staff-management/all-doctors";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState(allDoctors);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editData,setEditData]=useState(null)
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

  const handleEditID=(data)=>{
    setEditData(data);
    setIsDialogOpen(true)
  }

  return (
    <div className="p-6 max-w-full mx-auto bg-blue-300 rounded-lg min-h-screen">
      <AllDoctorHeader
        setCurrentDoctor={setCurrentDoctor}
        setIsDialogOpen={setIsDialogOpen}
      />

      <SearchDoctor searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <DoctorTable filteredDoctors={filteredDoctors} doctors={doctors} 
          isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        handleEditID={handleEditID}
        currentDoctor={currentDoctor}
        setCurrentDoctor={setCurrentDoctor}
        setFormData={setFormData}
      />

      <AddDoctor
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        currentDoctor={currentDoctor}
        setCurrentDoctor={setCurrentDoctor}
        setDoctors={setDoctors}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default AllDoctors;
