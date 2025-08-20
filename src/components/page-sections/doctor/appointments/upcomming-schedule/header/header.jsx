import React from 'react'
import { FaCalendarAlt, FaPlus, FaPrint } from 'react-icons/fa'

const UpcommingScheduleHeader = ({setIsNewAppointmentModalOpen}) => {
  return (
    <>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Upcoming Schedule</h1>
          <p className="text-gray-500 flex items-center mt-1">
            <FaCalendarAlt className="mr-2" />
            View and manage your upcoming appointments
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex space-x-2">
            <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center shadow-md"
          onClick={() => setIsNewAppointmentModalOpen(true)}
        >
          <FaPlus className="mr-2" />
          New Appointment
        </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center">
            <FaPrint className="mr-2" />
            Print Schedule
          </button>
        </div>
      </div>

    </>
  )
}

export default UpcommingScheduleHeader