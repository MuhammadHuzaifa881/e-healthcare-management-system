import { useState } from "react";


import HeaderPatientStatistic from "@/components/page-sections/reports/patient-statistic/header/header";
import PatientStatisticCards from "@/components/page-sections/reports/patient-statistic/patient-statistic-cards/patient-statistic-cards";
import PatientStatisticCharts from "@/components/page-sections/reports/patient-statistic/patient-statistic-charts/patient-statistic-charts";
import PatientStatisticDetail from "@/components/page-sections/reports/patient-statistic/patient-statistic-detail/patient-statistic-detail";

const PatientStatistics = () => {
  const [timeRange, setTimeRange] = useState("month");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Sample patient data
  const patientStats = [
    {
      month: "Jan",
      newPatients: 120,
      followUps: 85,
      admissions: 45,
      discharges: 38,
    },
    {
      month: "Feb",
      newPatients: 135,
      followUps: 92,
      admissions: 52,
      discharges: 45,
    },
    {
      month: "Mar",
      newPatients: 150,
      followUps: 105,
      admissions: 60,
      discharges: 55,
    },
    {
      month: "Apr",
      newPatients: 145,
      followUps: 98,
      admissions: 58,
      discharges: 50,
    },
    {
      month: "May",
      newPatients: 160,
      followUps: 110,
      admissions: 65,
      discharges: 60,
    },
    {
      month: "Jun",
      newPatients: 175,
      followUps: 125,
      admissions: 72,
      discharges: 68,
    },
  ];

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
