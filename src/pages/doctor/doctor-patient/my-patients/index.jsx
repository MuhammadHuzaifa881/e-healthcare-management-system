
import AddPatient from '@/components/modals/add-patient';
import MyPatientHeader from '@/components/page-sections/doctor/doctor-patient/my-patient/header/my-patient-header';
import MainPatientList from '@/components/page-sections/doctor/doctor-patient/my-patient/main-patient-list/main-patient-list';
import { useState } from 'react';

const MyPatients = () => {

      const [patientMdalOpen, setPatientModalOpen] = useState(false);
      const [newPatient, setNewPatient] = useState({
      name: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      status: "active"
    })

  return (
    <div className="p-6 space-y-6 bg-blue-300 rounded-lg">
     <MyPatientHeader setPatientModalOpen={setPatientModalOpen} />
     <MainPatientList/>

     <AddPatient setNewPatient={setNewPatient}  newPatient={newPatient} patientMdalOpen={patientMdalOpen} setPatientModalOpen={setPatientModalOpen}  />
    </div>
  );
};

export default MyPatients;