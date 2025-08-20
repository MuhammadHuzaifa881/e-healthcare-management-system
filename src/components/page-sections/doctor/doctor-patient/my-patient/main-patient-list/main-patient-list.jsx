import { useState } from "react";
import PatientList from "./patient-list";
import UpcommingAppointmnets from "@/components/page-sections/doctor/doctor-patient/my-patient/main-patient-list/upcomming-appointments";
import RecentActivity from "./recent-activity";
import QuickActions from "./quick-actions";

const MainPatientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Sample patient data
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 45,
      gender: "Female",
      lastVisit: "2023-10-15",
      nextAppointment: "2023-11-15",
      status: "stable",
      condition: "Hypertension",
      bloodType: "A+",
      avatar: "/avatars/sarah.jpg",
      initials: "SJ",
      email: "sarah.j@example.com",
      phone: "(555) 123-4567",
      address: "123 Main St, Anytown",
      treatmentProgress: 75,
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 62,
      gender: "Male",
      lastVisit: "2023-10-12",
      nextAppointment: "2023-10-29",
      status: "critical",
      condition: "Diabetes Type II",
      bloodType: "O-",
      avatar: "/avatars/michael.jpg",
      initials: "MC",
      email: "michael.c@example.com",
      phone: "(555) 234-5678",
      address: "456 Oak Ave, Somewhere",
      treatmentProgress: 40,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: 28,
      gender: "Female",
      lastVisit: "2023-10-10",
      nextAppointment: "2023-11-05",
      status: "recovering",
      condition: "Migraine",
      bloodType: "B+",
      avatar: "/avatars/emma.jpg",
      initials: "ER",
      email: "emma.r@example.com",
      phone: "(555) 345-6789",
      address: "789 Pine Rd, Nowhere",
      treatmentProgress: 90,
    },
    {
      id: 4,
      name: "James Wilson",
      age: 51,
      gender: "Male",
      lastVisit: "2023-10-08",
      nextAppointment: "2023-11-10",
      status: "stable",
      condition: "High Cholesterol",
      bloodType: "AB+",
      avatar: "/avatars/james.jpg",
      initials: "JW",
      email: "james.w@example.com",
      phone: "(555) 456-7890",
      address: "321 Elm St, Anycity",
      treatmentProgress: 60,
    },
    {
      id: 5,
      name: "Olivia Parker",
      age: 34,
      gender: "Female",
      lastVisit: "2023-10-05",
      nextAppointment: "2023-10-25",
      status: "recovering",
      condition: "Asthma",
      bloodType: "A-",
      avatar: "/avatars/olivia.jpg",
      initials: "OP",
      email: "olivia.p@example.com",
      phone: "(555) 567-8901",
      address: "654 Maple Dr, Yourtown",
      treatmentProgress: 85,
    },
    {
      id: 6,
      name: "Robert Kim",
      age: 59,
      gender: "Male",
      lastVisit: "2023-10-03",
      nextAppointment: "2023-10-20",
      status: "critical",
      condition: "Arthritis",
      bloodType: "B-",
      avatar: "/avatars/robert.jpg",
      initials: "RK",
      email: "robert.k@example.com",
      phone: "(555) 678-9012",
      address: "987 Cedar Ln, Theirtown",
      treatmentProgress: 30,
    },
  ];

  // Filter patients based on search term and active tab
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && patient.status === activeTab;
  });

  // Count patients by status
  const patientCounts = {
    all: patients.length,
    critical: patients.filter((p) => p.status === "critical").length,
    stable: patients.filter((p) => p.status === "stable").length,
    recovering: patients.filter((p) => p.status === "recovering").length,
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PatientList
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          filteredPatients={filteredPatients}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          patientCounts={patientCounts}
        />

        <div className="space-y-6">
          <UpcommingAppointmnets patients={patients} />
          <RecentActivity />

          <QuickActions />
        </div>
      </div>
    </>
  );
};

export default MainPatientList;
