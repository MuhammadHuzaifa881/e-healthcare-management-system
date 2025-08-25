import { useState } from "react";
import PatientList from "./patient-list";
import UpcommingAppointmnets from "@/components/page-sections/doctor/doctor-patient/my-patient/main-patient-list/upcomming-appointments";
import RecentActivity from "./recent-activity";
import QuickActions from "./quick-actions";
import { patients } from "@/constants/doctor/patients/my-patients";

const MainPatientList = ({setEditDetail,setPatientModalOpen}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");



  // Filter patients based on search term and active tab
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && patient.status === activeTab;
  });

  // Count patients by status
  const patientCounts = {
    all: patients.length,
    critical: patients.filter((p) => p.status === "critical").length,
    stable: patients.filter((p) => p.status === "stable").length,
    recovering: patients.filter((p) => p.status === "recovering").length,
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PatientList setEditDetail={setEditDetail}
        setPatientModalOpen={setPatientModalOpen}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          filteredPatients={filteredPatients}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          patientCounts={patientCounts}
        />

        <div className="space-y-6">
          <UpcommingAppointmnets patients={patients} />
          <RecentActivity />

          <QuickActions />
        </div>
      </div>
    </>
  );
};

export default MainPatientList;
