import DoctorPatientMedicalRecord from "@/components/page-sections/doctor/doctor-patient/medical-records/header/header";
import DoctorMedicalTable from "../../../../components/page-sections/doctor/doctor-patient/medical-records/doctor-medicle-table/doctor-medical-table";

const DoctorMedicalRecordsPage = () => {
  return (
    <div className="p-6 space-y-6 bg-blue-300 rounded-lg h-screen">
      {/* header */}
      <DoctorPatientMedicalRecord />
      <DoctorMedicalTable />
    </div>
  );
};

export default DoctorMedicalRecordsPage;
