import React, { useState } from "react";
import TreatmentSummaryHeader from "@/components/page-sections/doctor/reports/treatment-summary/header/header";
import ActiveTreatment from "@/components/page-sections/doctor/reports/treatment-summary/main-report-tabs/active-treatment";
import BehindSchedule from "@/components/page-sections/doctor/reports/treatment-summary/main-report-tabs/behind-schedule";
import Completed from "@/components/page-sections/doctor/reports/treatment-summary/main-report-tabs/completed";
import NeedingReview from "@/components/page-sections/doctor/reports/treatment-summary/main-report-tabs/needing-review";
import { treatments } from "@/constants/doctor/reports/treatment-summary";
import TreatmentPLans from "@/components/page-sections/doctor/reports/treatment-summary/main-report-tabs/treatment-plans";
import PatientTreatmentDetail from "@/components/page-sections/doctor/reports/treatment-summary/main-report-tabs/patient-treatment-detail/patient-treatment-detail";

const TreatmentSummaryPage = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Sample patient data

  // Filter treatments based on filters
  const filteredTreatments = treatments.filter((treatment) => {
    const matchesSearch =
      treatment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      treatment.planName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || treatment.status === statusFilter;
    const matchesDate = dateFilter === "all" || true; // Simplified for demo

    return matchesSearch && matchesStatus && matchesDate;
  });



  // Handle back to list
  const handleBackToList = () => {
    setSelectedPatient(null);
  };

  if (selectedPatient) {
    return (
      <PatientTreatmentDetail
        patient={selectedPatient}
        treatments={treatments.filter(
          (t) => t.patientId === selectedPatient.id
        )}
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="p-6 space-y-6">
      <TreatmentSummaryHeader />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ActiveTreatment />
        <Completed />
        <NeedingReview />
        <BehindSchedule />
      </div>

      <TreatmentPLans
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        dateFilter={dateFilter}
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
        setDateFilter={setDateFilter}
        filteredTreatments={filteredTreatments}
        setSelectedPatient={setSelectedPatient}
      />
    </div>
  );
};

// Patient Treatment Detail Component


// Treatment Card Component




export default TreatmentSummaryPage;
