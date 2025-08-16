import MedicalHistoryHeader from "@/components/page-sections/patient-records/medical-history/header";
import MedicalHistoryTabs from "@/components/page-sections/patient-records/medical-history/medical-history-tabs/medical-history-tabs/medical-history-main-tabs/medical-history-tabs";

const MedicalHistory = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 min-h-screen rounded-lg p-2">
      <MedicalHistoryHeader />
      <MedicalHistoryTabs />
    </div>
  );
};

export default MedicalHistory;
