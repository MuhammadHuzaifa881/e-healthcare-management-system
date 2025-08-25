import { useState } from "react";
import AllPatientHeader from "@/components/page-sections/patient-records/all-patients/header";
import PatientRecordTable from "@/components/page-sections/patient-records/patient-record-table/patient-record-table";
import AddPatient from "@/components/modals/add-patient";
import { allPatients } from "@/constants/hospital/patient-records/all-patients";
export default function AllPatients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  const [editDetail,setEditDetail]=useState(null)
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    status: "active",
  });
  const patientsPerPage = 10;

    // Sample patient data
  const [patients, setPatients] = useState(allPatients);


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

  const handleEditDetail=(data)=>{
  setEditDetail(data);
  setPatientModalOpen(true)
  }

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
        handleEditDetail={handleEditDetail}
      />

      <AddPatient
        setNewPatient={setNewPatient}
        newPatient={newPatient}
        setPatients={setPatients}
        setPatientModalOpen={setPatientModalOpen}
        patientModalOpen={patientModalOpen}
        editDetail={editDetail}
        setEditDetail={setEditDetail}
      />
    </div>
  );
}
