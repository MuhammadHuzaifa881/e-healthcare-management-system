import { Route, Routes } from "react-router-dom";
import CalendarView from "@/pages/hospital/appointments/calender-view/index.jsx";
import Schedule from "@/pages/hospital/appointments/schedule/index.jsx";
import InsuranceClaims from "@/pages/hospital/billing-and-payments/insurance-claims/index.jsx";
import Invoices from "@/pages/hospital/billing-and-payments/invoices/index.jsx";
import Dashboard from "@/pages/hospital/dashboard/index.jsx";
import Equipments from "@/pages/hospital/inventory/equipment/index.jsx";
import Medicines from "@/pages/hospital/inventory/medicines/index.jsx";
import AllPatients from "@/pages/hospital/patient-records/all-patients/index.jsx";
import MedicalHistory from "@/pages/hospital/patient-records/medical-history/index.jsx";
import Financial from "@/pages/hospital/reports/financial/index.jsx";
import PatientStatistic from "@/pages/hospital/reports/patient-statistic/patient-statistic.jsx";
import AllDoctors from "@/pages/hospital/staff-management/all-doctors/index.jsx";
import AllNurses from "@/pages/hospital/staff-management/nurses/index.jsx";
import AllReceptionists from "@/pages/hospital/staff-management/receptionists/all-receptionists.jsx";
import ProtectedRoute from "./protected-routes.jsx";

const HospitalRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff-management/doctors"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <AllDoctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff-management/nurses"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <AllNurses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff-management/receptionists"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <AllReceptionists />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient-records/all-patients"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <AllPatients />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient-records/medical-history"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <MedicalHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments/schedule"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <Schedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments/calender-view"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <CalendarView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing-and-payments/invoices"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <Invoices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing-and-payments/insurance-claims"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <InsuranceClaims />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory/medicines"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <Medicines />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory/equipments"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <Equipments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports/financial"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <Financial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports/patient-statistics"
          element={
            <ProtectedRoute allowedRoles={["hospital"]}>
              <PatientStatistic />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default HospitalRoutes;
