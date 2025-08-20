// Sample patient data
export const patients = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 45,
    gender: "Female",
    lastVisit: "2023-10-15",
    status: "stable",
    condition: "Hypertension",
    bloodType: "A+",
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 62,
    gender: "Male",
    lastVisit: "2023-10-12",
    status: "critical",
    condition: "Diabetes Type II",
    bloodType: "O-",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    age: 28,
    gender: "Female",
    lastVisit: "2023-10-10",
    status: "recovering",
    condition: "Migraine",
    bloodType: "B+",
  },
];

// Sample medication data
export const medicationOptions = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    type: "Tablet",
    category: "Hypertension",
  },
  {
    id: 2,
    name: "Metoprolol",
    dosage: "25mg",
    type: "Tablet",
    category: "Hypertension",
  },
  {
    id: 3,
    name: "Metformin",
    dosage: "500mg",
    type: "Tablet",
    category: "Diabetes",
  },
  {
    id: 4,
    name: "Insulin Glargine",
    dosage: "100 units/mL",
    type: "Injection",
    category: "Diabetes",
  },
  {
    id: 5,
    name: "Sumatriptan",
    dosage: "50mg",
    type: "Tablet",
    category: "Migraine",
  },
  {
    id: 6,
    name: "Atorvastatin",
    dosage: "20mg",
    type: "Tablet",
    category: "Cholesterol",
  },
  {
    id: 7,
    name: "Amoxicillin",
    dosage: "500mg",
    type: "Capsule",
    category: "Antibiotic",
  },
  {
    id: 8,
    name: "Albuterol",
    dosage: "90mcg",
    type: "Inhaler",
    category: "Asthma",
  },
];

// Sample prescription history
export const prescriptionHistory = [
  {
    id: 1,
    patient: "Sarah Johnson",
    date: "2023-10-15",
    medications: ["Lisinopril 10mg", "Metoprolol 25mg"],
    status: "active",
  },
  {
    id: 2,
    patient: "Michael Chen",
    date: "2023-10-12",
    medications: ["Metformin 500mg", "Insulin Glargine"],
    status: "active",
  },
  {
    id: 3,
    patient: "Emma Rodriguez",
    date: "2023-10-10",
    medications: ["Sumatriptan 50mg"],
    status: "completed",
  },
];
