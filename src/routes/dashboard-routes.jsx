// Updated DashboardRoutes.jsx
import { useEffect, useState } from "react";
import DoctorRoutes from "@/routes/protected-routes/doctor-routes";
import NurseRoutes from "@/routes/protected-routes/nurse-routes";
import ReceptionistRoutes from "@/routes/protected-routes/receptionist-routes";
import Unauthorized from "@/routes/protected-routes/unauthorized";
import HospitalRoutes from "./protected-routes/hospital-routes";
import CommonRoutes from "./protected-routes/common-routes";

const DashboardRoutes = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user role from localStorage
    const role = localStorage.getItem("userRole");
    setUserRole(role);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or your custom loading component
  }

  // Render routes based on user role
  switch (userRole) {
    case "hospital":
      return (
        <>
          <HospitalRoutes />
          <CommonRoutes />
        </>
      );
    case "doctor":
      return (
        <>
          <CommonRoutes />
          <DoctorRoutes />
        </>
      );
    case "nurse":
      return (
        <>
          <NurseRoutes />
          <CommonRoutes />
        </>
      );
    case "receptionist":
      return (
        <>
          <ReceptionistRoutes />
          <CommonRoutes />
        </>
      );
    default:
      return <Unauthorized />;
  }
};

export default DashboardRoutes;
