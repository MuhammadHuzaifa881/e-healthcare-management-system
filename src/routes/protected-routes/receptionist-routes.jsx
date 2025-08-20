// routes/ReceptionistRoutes.jsx
import { Route, Routes } from "react-router-dom";
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
import ProtectedRoute from "./protected-routes";

const ReceptionistRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff-management/doctors"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <AllDoctors />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff-management/nurses"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <AllNurses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff-management/receptionists"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <AllReceptionists />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient-records/all-patients"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <AllPatients />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient-records/medical-history"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <MedicalHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments/schedule"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <Schedule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments/calender-view"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <CalendarView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/billing-and-payments/invoices"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <Invoices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/billing-and-payments/insurance-claims"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <InsuranceClaims />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory/medicines"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <Medicines />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory/equipments"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <Equipments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports/financial"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <Financial />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports/patient-statistics"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <PatientStatistic />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile-settings"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <ProfileSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/help-support"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <HelpSupport />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute allowedRoles={["receptionist"]}>
            <Notification />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default ReceptionistRoutes;
