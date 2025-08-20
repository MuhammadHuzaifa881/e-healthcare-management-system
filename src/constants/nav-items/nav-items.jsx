import { 
  FiHome, FiUsers, FiUser, FiCalendar, FiFileText, 
  FiDollarSign, FiPackage, FiPieChart, FiClipboard, FiVideo,
  FiSettings, FiBell, FiHelpCircle 
} from 'react-icons/fi';

// Common menu items for all panels
export const commonItems = [
  {
    title: 'Profile & Settings',
    icon: FiSettings,
    path: '/profile-settings'
  },
  {
    title: 'Notifications',
    icon: FiBell,
    path: '/notifications'
  },
  {
    title: 'Help/Support',
    icon: FiHelpCircle,
    path: '/help-support'
  },
];

// Hospital Admin Panel
export const hospitalAdminItems = [
  {
    title: 'Dashboard',
    icon: FiHome,
    path: '/'
  },
  {
    title: 'Staff Management',
    icon: FiUsers,
    submenu: [
      {
        title: 'Doctors',
        path: '/staff-management/doctors'
      },
      {
        title: 'Nurses',
        path: '/staff-management/nurses'
      },
      {
        title: 'Receptionists',
        path: '/staff-management/receptionists'
      }
    ]
  },
  {
    title: 'Patient Records',
    icon: FiUser,
    submenu: [
      {
        title: 'All Patients',
        path: '/patient-records/all-patients'
      },
      {
        title: 'Medical History',
        path: '/patient-records/medical-history'
      }
    ]
  },
  {
    title: 'Appointments',
    icon: FiCalendar,
    submenu: [
      {
        title: 'Schedule',
        path: '/appointments/schedule'
      },
      {
        title: 'Calendar View',
        path: '/appointments/calender-view'
      }
    ]
  },
  {
    title: 'Billing & Payments',
    icon: FiDollarSign,
    submenu: [
      {
        title: 'Invoices',
        path: '/billing-and-payments/invoices'
      },
      {
        title: 'Insurance Claims',
        path: '/billing-and-payments/insurance-claims'
      }
    ]
  },
  {
    title: 'Inventory',
    icon: FiPackage,
    submenu: [
      {
        title: 'Medicines',
        path: '/inventory/medicines'
      },
      {
        title: 'Equipment',
        path: '/inventory/equipments'
      }
    ]
  },
  {
    title: 'Reports',
    icon: FiPieChart,
    submenu: [
      {
        title: 'Financial',
        path: '/reports/financial'
      },
      {
        title: 'Patient Statistics',
        path: '/reports/patient-statistics'
      }
    ]
  }
];

// Doctor Panel
export const doctorItems = [
  {
    title: 'Dashboard',
    icon: FiHome,
    path: '/'
  },
  {
    title: 'My Appointments',
    icon: FiCalendar,
    submenu: [
      {
        title: "Today's Schedule",
        path: '/appointments/today'
      },
      {
        title: 'Upcoming',
        path: '/appointments/upcomming-schedule'
      }
    ]
  },
  {
    title: 'Patients',
    icon: FiUser,
    submenu: [
      {
        title: 'My Patients',
        path: '/patients/my-patients'
      },
      {
        title: 'Medical Records',
        path: '/patients/records'
      }
    ]
  },
  {
    title: 'E-Prescriptions',
    icon: FiFileText,
    submenu: [
      {
        title: 'Create New',
        path: '/prescriptions/new'
      },
    ]
  },
  {
    title: 'Diagnostics',
    icon: FiClipboard,
    submenu: [
      {
        title: 'Lab Test Orders',
        path: '/diagnostics/orders'
      },
    ]
  },
  {
    title: 'Reports',
    icon: FiPieChart,
    submenu: [
      {
        title: 'Treatment Summary',
        path: '/reports/treatment'
      }
    ]
  }
];

// Patient Panel
export const patientItems = [
  {
    title: 'Dashboard',
    icon: FiHome,
    path: '/'
  },
  {
    title: 'My Appointments',
    icon: FiCalendar,
    submenu: [
      {
        title: 'Book New',
        path: '/appointments/new'
      },
      {
        title: 'History',
        path: '/appointments/history'
      }
    ]
  },
  {
    title: 'Medical Records',
    icon: FiFileText,
    submenu: [
      {
        title: 'Prescriptions',
        path: '/records/prescriptions'
      },
      {
        title: 'Lab Reports',
        path: '/records/lab-reports'
      }
    ]
  },
  {
    title: 'Billing',
    icon: FiDollarSign,
    submenu: [
      {
        title: 'Payments',
        path: '/billing/payments'
      },
      {
        title: 'Insurance',
        path: '/billing/insurance'
      }
    ]
  },
  {
    title: 'Teleconsultation',
    icon: FiVideo,
    submenu: [
      {
        title: 'Video Calls',
        path: '/teleconsultation/video'
      },
      {
        title: 'Chat with Doctor',
        path: '/teleconsultation/chat'
      }
    ]
  }
];