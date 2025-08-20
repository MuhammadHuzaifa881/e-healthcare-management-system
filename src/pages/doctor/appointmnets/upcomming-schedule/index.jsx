import NewAppointmentModal from "@/components/modals/doctor/new-appointment";
import ControlFilters from "@/components/page-sections/doctor/appointments/upcomming-schedule/controls-filter/control-filters";
import UpcommingScheduleHeader from "@/components/page-sections/doctor/appointments/upcomming-schedule/header/header";
import UpcommingScheduleStatusCards from "@/components/page-sections/doctor/appointments/upcomming-schedule/status-card/status-cards";
import UpcommingAppointmentList from "@/components/page-sections/doctor/appointments/upcomming-schedule/upcomming-appointment-list/upcomming-appointment-list";
import { useState } from "react";

const DoctorUpcomingSchedule = () => {
  const [viewMode, setViewMode] = useState("week"); // 'day', 'week', 'month'
  const [selectedStatus, setSelectedStatus] = useState("all"); // 'all', 'confirmed', 'pending', 'cancelled'
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] =
    useState(false);
  // Sample data for upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      patient: "John Smith",
      date: "2024-01-15",
      time: "09:00 AM",
      duration: "30 mins",
      type: "Follow-up",
      condition: "Hypertension",
      status: "confirmed",
      notes: "Needs BP check",
      location: "Clinic",
      priority: "normal",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      date: "2024-01-15",
      time: "02:30 PM",
      duration: "45 mins",
      type: "Consultation",
      condition: "Diabetes",
      status: "confirmed",
      notes: "Review glucose levels",
      location: "Telemedicine",
      priority: "high",
    },
    {
      id: 3,
      patient: "Michael Brown",
      date: "2024-01-16",
      time: "10:15 AM",
      duration: "30 mins",
      type: "Follow-up",
      condition: "Asthma",
      status: "pending",
      notes: "Check inhaler usage",
      location: "Clinic",
      priority: "normal",
    },
    {
      id: 4,
      patient: "Emily Davis",
      date: "2024-01-17",
      time: "11:00 AM",
      duration: "60 mins",
      type: "New Patient",
      condition: "Migraine",
      status: "confirmed",
      notes: "Initial assessment",
      location: "Clinic",
      priority: "normal",
    },
    {
      id: 5,
      patient: "Robert Wilson",
      date: "2024-01-18",
      time: "03:00 PM",
      duration: "30 mins",
      type: "Vaccination",
      condition: "Annual Checkup",
      status: "cancelled",
      notes: "Flu shot",
      location: "Clinic",
      priority: "low",
    },
    {
      id: 6,
      patient: "Lisa Taylor",
      date: "2024-01-19",
      time: "09:30 AM",
      duration: "45 mins",
      type: "Consultation",
      condition: "Back Pain",
      status: "confirmed",
      notes: "Physical therapy follow-up",
      location: "Telemedicine",
      priority: "high",
    },
    {
      id: 7,
      patient: "David Miller",
      date: "2024-01-22",
      time: "01:00 PM",
      duration: "30 mins",
      type: "Routine Check",
      condition: "General Health",
      status: "confirmed",
      notes: "Annual physical",
      location: "Clinic",
      priority: "normal",
    },
  ];

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
