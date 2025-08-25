import DoctorTodaysScheduleHeader from "@/components/page-sections/doctor/appointments/todays-scheule/header/header";
import ScheduleTimeline from "@/components/page-sections/doctor/appointments/todays-scheule/schedule-timeline/schedule-timeline";
import StatusCards from "@/components/page-sections/doctor/appointments/todays-scheule/status-cards/status-card";
import TimeSlot from "@/components/page-sections/doctor/appointments/todays-scheule/time-slot/time-slot";

const DoctorTodaysSchedule = () => {
  // Sample data for today's appointments



  return (
    <div className="min-h-screen bg-blue-300 p-6 rounded-lg">
      <DoctorTodaysScheduleHeader />
      <StatusCards  />

      {/* Schedule Timeline */}
      <ScheduleTimeline />

      {/* Time Slots Availability */}
      <TimeSlot/>
    </div>
  );
};

export default DoctorTodaysSchedule;
