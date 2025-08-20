import { FaCalendarAlt, FaUserInjured, FaClock, FaStethoscope, FaNotesMedical, FaCheckCircle, FaTimesCircle, FaEllipsisV } from 'react-icons/fa';
import {  MdAccessTime } from 'react-icons/md';

const MainHospitalTodaysSchedule = () => {
  // Sample data for today's appointments
  const appointments = [
    {
      id: 1,
      patient: 'John Smith',
      time: '09:00 AM',
      duration: '30 mins',
      type: 'Follow-up',
      condition: 'Hypertension',
      status: 'confirmed',
      notes: 'Needs BP check'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      time: '09:30 AM',
      duration: '45 mins',
      type: 'Consultation',
      condition: 'Diabetes',
      status: 'confirmed',
      notes: 'Review glucose levels'
    },
    {
      id: 3,
      patient: 'Michael Brown',
      time: '10:15 AM',
      duration: '30 mins',
      type: 'Follow-up',
      condition: 'Asthma',
      status: 'pending',
      notes: 'Check inhaler usage'
    },
    {
      id: 4,
      patient: 'Emily Davis',
      time: '11:00 AM',
      duration: '60 mins',
      type: 'New Patient',
      condition: 'Migraine',
      status: 'confirmed',
      notes: 'Initial assessment'
    },
    {
      id: 5,
      patient: 'Robert Wilson',
      time: '12:00 PM',
      duration: '30 mins',
      type: 'Vaccination',
      condition: 'Annual Checkup',
      status: 'cancelled',
      notes: 'Flu shot'
    },
    {
      id: 6,
      patient: 'Lisa Taylor',
      time: '02:00 PM',
      duration: '45 mins',
      type: 'Consultation',
      condition: 'Back Pain',
      status: 'confirmed',
      notes: 'Physical therapy follow-up'
    }
  ];

  // Filter appointments by status
  const confirmedAppointments = appointments.filter(app => app.status === 'confirmed');
  const pendingAppointments = appointments.filter(app => app.status === 'pending');
  const cancelledAppointments = appointments.filter(app => app.status === 'cancelled');

  // Stats for the day
  const stats = [
    { title: 'Total Appointments', value: appointments.length, icon: <FaCalendarAlt className="w-5 h-5" /> },
    { title: 'Confirmed', value: confirmedAppointments.length, icon: <FaCheckCircle className="w-5 h-5" /> },
    { title: 'Pending', value: pendingAppointments.length, icon: <MdAccessTime className="w-5 h-5" /> },
    { title: 'Cancelled', value: cancelledAppointments.length, icon: <FaTimesCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Today's Schedule</h1>
          <p className="text-gray-500 flex items-center mt-1">
            <FaCalendarAlt className="mr-2" />
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add Appointment
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            Print Schedule
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Schedule Timeline */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Appointment Timeline</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-4 hover:bg-gray-50 transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                {/* Appointment Info */}
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    appointment.status === 'confirmed' ? 'bg-green-50 text-green-600' :
                    appointment.status === 'pending' ? 'bg-yellow-50 text-yellow-600' :
                    'bg-red-50 text-red-600'
                  }`}>
                    {appointment.status === 'confirmed' ? <FaCheckCircle className="w-5 h-5" /> :
                     appointment.status === 'pending' ? <MdAccessTime className="w-5 h-5" /> :
                     <FaTimesCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{appointment.patient}</h3>
                    <div className="flex flex-wrap items-center mt-1 text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <FaClock className="mr-1" /> {appointment.time}
                      </span>
                      <span className="flex items-center">
                        <FaStethoscope className="mr-1" /> {appointment.type}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium ${
                        appointment.condition === 'Hypertension' ? 'bg-purple-100 text-purple-800' :
                        appointment.condition === 'Diabetes' ? 'bg-blue-100 text-blue-800' :
                        appointment.condition === 'Asthma' ? 'bg-green-100 text-green-800' :
                        appointment.condition === 'Migraine' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }">
                        {appointment.condition}
                      </span>
                    </div>
                    {appointment.notes && (
                      <p className="mt-2 text-sm text-gray-600 flex items-start">
                        <FaNotesMedical className="mr-2 mt-0.5 flex-shrink-0" /> {appointment.notes}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="mt-3 sm:mt-0 flex items-center space-x-3 sm:space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition">
                    Start
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition">
                    <FaEllipsisV />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots Availability */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Available Time Slots</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'].map((time) => (
              <button
                key={time}
                className="py-2 px-3 border border-gray-200 rounded-md text-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition"
              >
                {time}
              </button>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All Available Slots →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHospitalTodaysSchedule;