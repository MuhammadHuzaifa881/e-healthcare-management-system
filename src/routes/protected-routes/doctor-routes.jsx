// routes/DoctorRoutes.jsx
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected-routes";

import Dashboard from "@/pages/hospital/dashboard";
import DoctorTodaysSchedule from "@/pages/doctor/appointmnets/todays-schedule";
import DoctorUpcommingSchedule from "@/pages/doctor/appointmnets/upcomming-schedule";
import DoctorMedicalRecordsPage from "@/pages/doctor/doctor-patient/doctor-medical-records";
import MyPatients from "@/pages/doctor/doctor-patient/my-patients";
import NewEPrescription from "@/pages/doctor/e-perscription/create-new";
import LabTestOrderPage from "@/pages/doctor/diagnostic/lab-test-orders";
import TreatmentSummary from "@/pages/doctor/reports/treatment-summary";

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments/today"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorTodaysSchedule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments/upcomming-schedule"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorUpcommingSchedule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patients/my-patients"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <MyPatients />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patients/records"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorMedicalRecordsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/prescriptions/new"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <NewEPrescription />
          </ProtectedRoute>
        }
      />
      <Route
        path="/diagnostics/orders"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <LabTestOrderPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports/treatment"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <TreatmentSummary />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default DoctorRoutes;
