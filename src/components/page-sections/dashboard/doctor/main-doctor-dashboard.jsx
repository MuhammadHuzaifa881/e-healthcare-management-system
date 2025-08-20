import { useState } from "react";
import StatusCards from "./status-cards";
import DoctorCharts from "./charts";
import RecentPatients from "./recent-patietns";
import UpcommingAppointmnets from "./upcomming-appointments";

const MainDoctorDashboard = () => {



  return (
    <div className="min-h-screen bg-blue-300 rounded-lg">
      {/* Main Content */}
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <StatusCards />

        {/* Charts Section */}
        <DoctorCharts />

        {/* Recent Patients and Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Patients */}
         <RecentPatients/>

          {/* Upcoming Appointments */}
          <UpcommingAppointmnets />
        </div>
      </div>
    </div>
  );
};

export default MainDoctorDashboard;
