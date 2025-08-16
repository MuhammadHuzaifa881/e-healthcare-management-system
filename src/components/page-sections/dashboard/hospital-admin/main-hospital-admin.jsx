// src/components/Dashboard.jsx

import AdminHeader from "./header";
import CardTypeDetail from "./cards-type-detail";
import LineCharts from "./line-charts";
import RecentActivity from "./recent-activity";

const MainHospitalAdmin = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-blue-300 rounded-lg">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-3">
          <AdminHeader />

          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {/* Metrics Grid */}
            <CardTypeDetail />

            {/* Charts Section */}
            {/* line charts here */}
            <LineCharts />

            {/* recent activity */}
            <RecentActivity/>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainHospitalAdmin;
