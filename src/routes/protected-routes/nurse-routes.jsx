// routes/NurseRoutes.jsx
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected-routes";
import CalendarView from "@/pages/hospital/appointments/calender-view";
import Schedule from "@/pages/hospital/appointments/schedule";
import InsuranceClaims from "@/pages/hospital/billing-and-payments/insurance-claims";
import Invoices from "@/pages/hospital/billing-and-payments/invoices";
import Dashboard from "@/pages/hospital/dashboard";
import HelpSupport from "@/pages/common/help-support";
import Equipments from "@/pages/hospital/inventory/equipment";
import Medicines from "@/pages/hospital/inventory/medicines";
import Notification from "@/pages/common/notifications";
import AllPatients from "@/pages/hospital/patient-records/all-patients";
import MedicalHistory from "@/pages/hospital/patient-records/medical-history";
import ProfileSettings from "@/pages/profile-settings";
import Financial from "@/pages/hospital/reports/financial";
import PatientStatistic from "@/pages/hospital/reports/patient-statistic/patient-statistic";
import AllDoctors from "@/pages/hospital/staff-management/all-doctors";
import AllNurses from "@/pages/hospital/staff-management/nurses";
import AllReceptionists from "@/pages/hospital/staff-management/receptionists/all-receptionists";
const NurseRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff-management/doctors"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <AllDoctors />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff-management/nurses"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <AllNurses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff-management/receptionists"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <AllReceptionists />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient-records/all-patients"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <AllPatients />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient-records/medical-history"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <MedicalHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments/schedule"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <Schedule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments/calender-view"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <CalendarView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/billing-and-payments/invoices"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <Invoices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/billing-and-payments/insurance-claims"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <InsuranceClaims />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory/medicines"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <Medicines />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory/equipments"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <Equipments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports/financial"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <Financial />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports/patient-statistics"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <PatientStatistic />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile-settings"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <ProfileSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/help-support"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <HelpSupport />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute allowedRoles={["nurse"]}>
            <Notification />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default NurseRoutes;
