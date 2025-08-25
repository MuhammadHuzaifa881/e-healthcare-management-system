import NewAppointmentModal from "@/components/modals/doctor/new-appointment";
import ControlFilters from "@/components/page-sections/doctor/appointments/upcomming-schedule/controls-filter/control-filters";
import UpcommingScheduleHeader from "@/components/page-sections/doctor/appointments/upcomming-schedule/header/header";
import UpcommingScheduleStatusCards from "@/components/page-sections/doctor/appointments/upcomming-schedule/status-card/status-cards";
import UpcommingAppointmentList from "@/components/page-sections/doctor/appointments/upcomming-schedule/upcomming-appointment-list/upcomming-appointment-list";
import { upcomingAppointments } from "@/constants/doctor/appointments/upcomming-appointments";
import { useState } from "react";

const DoctorUpcomingSchedule = () => {
  const [viewMode, setViewMode] = useState("week"); // 'day', 'week', 'month'
  const [selectedStatus, setSelectedStatus] = useState("all"); // 'all', 'confirmed', 'pending', 'cancelled'
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] =
    useState(false);
  // Sample data for upcoming appointments
  

  // Filter appointments based on selected status
  const filteredAppointments =
    selectedStatus === "all"
      ? upcomingAppointments
      : upcomingAppointments.filter((app) => app.status === selectedStatus);

  // Group appointments by date
  const appointmentsByDate = filteredAppointments.reduce((acc, appointment) => {
    const date = appointment.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(appointment);
    return acc;
  }, {});

  // Get dates for the next 7 days
  const getNextWeekDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  const weekDates = getNextWeekDates();

  const handleSaveAppointment = async (appointmentData) => {
    console.log("Saving appointment:", appointmentData);
  };

  return (
    <div className="min-h-screen bg-blue-300 rounded-lg p-6">
      {/* Header */}
      <UpcommingScheduleHeader setIsNewAppointmentModalOpen={setIsNewAppointmentModalOpen} />
      {/* Stats Cards */}
      <UpcommingScheduleStatusCards
        upcomingAppointments={upcomingAppointments}
        weekDates={weekDates}
      />

      {/* Controls and Filters */}
      <ControlFilters
        viewMode={viewMode}
        setViewMode={setViewMode}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      {/* Upcoming Appointments List */}
      <UpcommingAppointmentList
        filteredAppointments={filteredAppointments}
        appointmentsByDate={appointmentsByDate}
        viewMode={viewMode}
      />

      {/* new appointment modal */}
      <NewAppointmentModal
        isOpen={isNewAppointmentModalOpen}
        onClose={() => setIsNewAppointmentModalOpen(false)}
        onSave={handleSaveAppointment}
      />
    </div>
  );
};

export default DoctorUpcomingSchedule;
