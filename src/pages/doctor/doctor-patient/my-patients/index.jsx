
import AddPatient from '@/components/modals/add-patient';
import MyPatientHeader from '@/components/page-sections/doctor/doctor-patient/my-patient/header/my-patient-header';
import MainPatientList from '@/components/page-sections/doctor/doctor-patient/my-patient/main-patient-list/main-patient-list';
import { useState } from 'react';

const MyPatients = () => {

      const [patientModalOpen, setPatientModalOpen] = useState(false);
      const [editDetail,setEditDetail]=useState(null)
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
     <MainPatientList setEditDetail={setEditDetail} setPatientModalOpen={setPatientModalOpen} />

     <AddPatient setNewPatient={setNewPatient}  newPatient={newPatient} patientModalOpen={patientModalOpen} setPatientModalOpen={setPatientModalOpen} editDetail={editDetail} />
    </div>
  );
};

export default MyPatients;