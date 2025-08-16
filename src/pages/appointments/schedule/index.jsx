import ScheduleHeader from "@/components/page-sections/appointments/schedule/header/header";
import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
  FiAlertCircle,
} from "react-icons/fi";
import AppointmentForm from "../../../components/page-sections/appointments/schedule/appointment-form/appointment-form";
import AppointmentList from "../../../components/page-sections/appointments/schedule/appointment-list/appointment-list";

const Schedule = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    patientName: "",
    appointmentDate: date,
    appointmentTime: "09:00",
    doctor: "",
    reason: "",
    status: "scheduled",
  });

  // Sample data
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      date: "2023-11-15",
      time: "09:00",
      doctor: "Dr. Smith",
      reason: "Annual Checkup",
      status: "scheduled",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2023-11-15",
      time: "10:30",
      doctor: "Dr. Johnson",
      reason: "Follow-up",
      status: "confirmed",
    },
    {
      id: 3,
      patientName: "Robert Brown",
      date: "2023-11-15",
      time: "14:00",
      doctor: "Dr. Williams",
      reason: "Vaccination",
      status: "completed",
    },
    {
      id: 4,
      patientName: "Emily Davis",
      date: "2023-11-16",
      time: "11:15",
      doctor: "Dr. Smith",
      reason: "Consultation",
      status: "scheduled",
    },
  ];

  const filteredAppointments = appointments.filter(
    (appt) =>
      appt.date === date &&
      (appt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appt.doctor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 rounded-lg ">
      <ScheduleHeader
        date={date}
        setDate={setDate}
        setShowAddForm={setShowAddForm}
      />

      {showAddForm && (
        <AppointmentForm
          formData={formData}
          setFormData={setFormData}
          setShowAddForm={setShowAddForm}
        />
      )}

      <AppointmentList
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        date={date}
        filteredAppointments={filteredAppointments}
      />
    </div>
  );
};

export default Schedule;
