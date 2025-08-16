import CalendarView from "@/pages/appointments/calender-view";
import Schedule from "@/pages/appointments/schedule";
import InsuranceClaims from "@/pages/billing-and-payments/insurance-claims";
import Invoices from "@/pages/billing-and-payments/invoices";
import Dashboard from "@/pages/dashboard";
import HelpSupport from "@/pages/help-support";
import Equipments from "@/pages/inventory/equipment";
import Medicines from "@/pages/inventory/medicines";
import Notification from "@/pages/notifications";
import AllPatients from "@/pages/patient-records/all-patients";
import MedicalHistory from "@/pages/patient-records/medical-history";
import ProfileSettings from "@/pages/profile-settings";
import Financial from "@/pages/reports/financial";
import PatientStatistic from "@/pages/reports/patient-statistic/patient-statistic";
import AllDoctors from "@/pages/staff-management/all-doctors";
import AllNurses from "@/pages/staff-management/nurses";
import AllReceptionists from "@/pages/staff-management/receptionists/all-receptionists";
import { Route, Routes } from "react-router-dom";

const DashboardRoutes = () => {
  return (
    <Routes>
      {/* hospital pannel */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/staff-management/doctors" element={<AllDoctors />} />
      <Route path="/staff-management/nurses" element={<AllNurses />} />
      <Route
        path="/staff-management/receptionists"
        element={<AllReceptionists />}
      />
      <Route path="/patient-records/all-patients" element={<AllPatients />} />
      <Route
        path="/patient-records/medical-history"
        element={<MedicalHistory />}
      />
      <Route path="/appointments/schedule" element={<Schedule />} />
      <Route path="/appointments/calender-view" element={<CalendarView />} />

      {/* billing and payments */}
      <Route path="/billing-and-payments/invoices" element={<Invoices />} />
      <Route
        path="/billing-and-payments/insurance-claims"
        element={<InsuranceClaims />}
      />

      {/* inventory */}
      <Route path="/inventory/medicines" element={<Medicines />} />
      <Route
        path="/inventory/equipments"
        element={<Equipments />}
      />


      {/* reports */}
      <Route path="/reports/financial" element={<Financial />} />
      <Route
        path="/reports/patient-statistics"
        element={<PatientStatistic />}
      />

           {/* profile and settings */}
      <Route path="/profile-settings" element={<ProfileSettings />} />

      {/* help and support */}
      <Route
        path="/help-support"
        element={<HelpSupport />}
      />
      {/* Notification */}
 
       <Route
        path="/notifications"
        element={<Notification />}
      />
    </Routes>
  );
};

export default DashboardRoutes;
