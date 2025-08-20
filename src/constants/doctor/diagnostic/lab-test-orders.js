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

  // Sample test categories and tests
export const testCategories = [
    {
      id: 1,
      name: "Blood Tests",
      tests: [
        {
          id: 101,
          name: "Complete Blood Count (CBC)",
          code: "CBC",
          price: 25,
          duration: "1-2 days",
        },
        {
          id: 102,
          name: "Basic Metabolic Panel",
          code: "BMP",
          price: 35,
          duration: "1-2 days",
        },
        {
          id: 103,
          name: "Comprehensive Metabolic Panel",
          code: "CMP",
          price: 45,
          duration: "1-2 days",
        },
        {
          id: 104,
          name: "Lipid Panel",
          code: "LIPID",
          price: 30,
          duration: "1-2 days",
        },
        {
          id: 105,
          name: "Thyroid Stimulating Hormone",
          code: "TSH",
          price: 40,
          duration: "2-3 days",
        },
      ],
    },
    {
      id: 2,
      name: "Diabetes Tests",
      tests: [
        {
          id: 201,
          name: "Hemoglobin A1C",
          code: "HBA1C",
          price: 35,
          duration: "1-2 days",
        },
        {
          id: 202,
          name: "Glucose, Fasting",
          code: "GLU-F",
          price: 20,
          duration: "1 day",
        },
        {
          id: 203,
          name: "Glucose Tolerance Test",
          code: "GTT",
          price: 55,
          duration: "3-4 hours",
        },
      ],
    },
    {
      id: 3,
      name: "Cardiac Tests",
      tests: [
        {
          id: 301,
          name: "Troponin",
          code: "TROP",
          price: 50,
          duration: "1-2 days",
        },
        { id: 302, name: "BNP", code: "BNP", price: 60, duration: "1-2 days" },
        {
          id: 303,
          name: "CK-MB",
          code: "CKMB",
          price: 45,
          duration: "1-2 days",
        },
      ],
    },
    {
      id: 4,
      name: "Infectious Disease",
      tests: [
        {
          id: 401,
          name: "COVID-19 PCR",
          code: "COVID",
          price: 75,
          duration: "1-2 days",
        },
        {
          id: 402,
          name: "Influenza A/B",
          code: "FLU",
          price: 65,
          duration: "1-2 days",
        },
        {
          id: 403,
          name: "Strep Test",
          code: "STREP",
          price: 40,
          duration: "1 day",
        },
        {
          id: 404,
          name: "HIV Test",
          code: "HIV",
          price: 55,
          duration: "2-3 days",
        },
      ],
    },
    {
      id: 5,
      name: "Urinalysis",
      tests: [
        {
          id: 501,
          name: "Urinalysis, Complete",
          code: "UA",
          price: 25,
          duration: "1 day",
        },
        {
          id: 502,
          name: "Urine Culture",
          code: "UC",
          price: 40,
          duration: "2-3 days",
        },
        {
          id: 503,
          name: "Microalbumin, Urine",
          code: "MAU",
          price: 35,
          duration: "2 days",
        },
      ],
    },
  ];

  // Sample test orders history
export const testOrdersHistory = [
    {
      id: 1,
      patient: "Sarah Johnson",
      date: "2023-10-15",
      tests: ["CBC", "Lipid Panel"],
      status: "completed",
      results: "available",
    },
    {
      id: 2,
      patient: "Michael Chen",
      date: "2023-10-12",
      tests: ["HBA1C", "Glucose, Fasting"],
      status: "in-progress",
      results: "pending",
    },
    {
      id: 3,
      patient: "Emma Rodriguez",
      date: "2023-10-10",
      tests: ["CMP", "TSH"],
      status: "completed",
      results: "available",
    },
    {
      id: 4,
      patient: "James Wilson",
      date: "2023-10-08",
      tests: ["COVID-19 PCR", "CBC"],
      status: "cancelled",
      results: "n/a",
    },
  ];