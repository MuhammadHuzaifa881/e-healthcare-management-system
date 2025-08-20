import DoctorTodaysScheduleHeader from "@/components/page-sections/doctor/appointments/todays-scheule/header/header";
import ScheduleTimeline from "@/components/page-sections/doctor/appointments/todays-scheule/schedule-timeline/schedule-timeline";
import StatusCards from "@/components/page-sections/doctor/appointments/todays-scheule/status-cards/status-card";
import TimeSlot from "@/components/page-sections/doctor/appointments/todays-scheule/time-slot/time-slot";
import {
  FaClock,
  FaStethoscope,
  FaNotesMedical,
  FaCheckCircle,
  FaTimesCircle,
  FaEllipsisV,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const DoctorTodaysSchedule = () => {
  // Sample data for today's appointments
  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      time: "09:00 AM",
      duration: "30 mins",
      type: "Follow-up",
      condition: "Hypertension",
      status: "confirmed",
      notes: "Needs BP check",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      time: "09:30 AM",
      duration: "45 mins",
      type: "Consultation",
      condition: "Diabetes",
      status: "confirmed",
      notes: "Review glucose levels",
    },
    {
      id: 3,
      patient: "Michael Brown",
      time: "10:15 AM",
      duration: "30 mins",
      type: "Follow-up",
      condition: "Asthma",
      status: "pending",
      notes: "Check inhaler usage",
    },
    {
      id: 4,
      patient: "Emily Davis",
      time: "11:00 AM",
      duration: "60 mins",
      type: "New Patient",
      condition: "Migraine",
      status: "confirmed",
      notes: "Initial assessment",
    },
    {
      id: 5,
      patient: "Robert Wilson",
      time: "12:00 PM",
      duration: "30 mins",
      type: "Vaccination",
      condition: "Annual Checkup",
      status: "cancelled",
      notes: "Flu shot",
    },
    {
      id: 6,
      patient: "Lisa Taylor",
      time: "02:00 PM",
      duration: "45 mins",
      type: "Consultation",
      condition: "Back Pain",
      status: "confirmed",
      notes: "Physical therapy follow-up",
    },
  ];

  // Filter appointments by status
  const confirmedAppointments = appointments.filter(
    (app) => app.status === "confirmed"
  );
  const pendingAppointments = appointments.filter(
    (app) => app.status === "pending"
  );
  const cancelledAppointments = appointments.filter(
    (app) => app.status === "cancelled"
  );

  return (
    <div className="min-h-screen bg-blue-300 p-6 rounded-lg">
      <DoctorTodaysScheduleHeader />
      <StatusCards appointments={appointments} />

      {/* Schedule Timeline */}
      <ScheduleTimeline appointments={appointments} />

      {/* Time Slots Availability */}
      <TimeSlot/>
    </div>
  );
};

export default DoctorTodaysSchedule;
