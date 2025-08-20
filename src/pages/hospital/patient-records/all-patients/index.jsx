import { useState } from "react";
import AllPatientHeader from "@/components/page-sections/patient-records/all-patients/header";
import PatientRecordTable from "@/components/page-sections/patient-records/patient-record-table/patient-record-table";
import AddPatient from "@/components/modals/add-patient";
export default function AllPatients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    status: "active",
  });
  const patientsPerPage = 8;

    // Sample patient data
  const [patients, setPatients] = useState(
  [
    {
      id: "PT001",
      name: "John Doe",
      age: 35,
      gender: "Male",
      lastVisit: "2023-05-15",
      status: "active",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
    },
    {
      id: "PT002",
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      lastVisit: "2023-06-20",
      status: "active",
      email: "jane.smith@example.com",
      phone: "(555) 987-6543",
    },
    {
      id: "PT003",
      name: "Robert Johnson",
      age: 42,
      gender: "Male",
      lastVisit: "2023-04-10",
      status: "inactive",
      email: "robert.j@example.com",
      phone: "(555) 456-7890",
    },
    
  ]
);


  // Filter patients based on search term
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 min-h-screen rounded-lg">
      <AllPatientHeader
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setCurrentPage={setCurrentPage}
        setPatientModalOpen={setPatientModalOpen}
        patientMdalOpen={patientModalOpen}
      />
      <PatientRecordTable
        currentPatients={currentPatients}
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
      />

      <AddPatient
        setNewPatient={setNewPatient}
        newPatient={newPatient}
        setPatients={setPatients}
        setPatientModalOpen={setPatientModalOpen}
        patientMdalOpen={patientModalOpen}
      />
    </div>
  );
}
