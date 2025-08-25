import { useState } from "react";


import HeaderPatientStatistic from "@/components/page-sections/reports/patient-statistic/header/header";
import PatientStatisticCards from "@/components/page-sections/reports/patient-statistic/patient-statistic-cards/patient-statistic-cards";
import PatientStatisticCharts from "@/components/page-sections/reports/patient-statistic/patient-statistic-charts/patient-statistic-charts";
import PatientStatisticDetail from "@/components/page-sections/reports/patient-statistic/patient-statistic-detail/patient-statistic-detail";
import { patientStats } from "@/constants/hospital/reports/patient-statistic";

const PatientStatistics = () => {
  const [timeRange, setTimeRange] = useState("month");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Sample patient data


  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderPatientStatistic
        timeRange={timeRange}
        setDepartmentFilter={setDepartmentFilter}
        setTimeRange={setTimeRange}
        departmentFilter={departmentFilter}
      />
      <PatientStatisticCards timeRange={timeRange} />

      <PatientStatisticCharts patientStats={patientStats} />

      {/* Detailed Patient Statistics Table */}
   <PatientStatisticDetail  patientStats={patientStats} />
    </div>
  );
};

export default PatientStatistics;
