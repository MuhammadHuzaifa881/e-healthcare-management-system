import React from 'react'
import { FiAlertCircle, FiChevronLeft, FiChevronRight, FiEdit2, FiSearch, FiTrash2 } from 'react-icons/fi'

const AppointmentList = ({date,setSearchTerm,searchTerm,filteredAppointments}) => {

        const getAppointmentStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };
  return (
    <>
     <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Scheduled Appointments
              </h2>
              <p className="text-gray-600">
                Appointments for {new Date(date).toLocaleDateString()}
              </p>
            </div>
            <div className="relative w-64">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="p-6">
          {filteredAppointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Patient
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Doctor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Reason
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAppointments.map((appt) => (
                    <tr key={appt.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FiClock className="mr-2 text-gray-500" />
                          {appt.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {appt.patientName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appt.doctor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appt.reason}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getAppointmentStatusColor(
                            appt.status
                          )}`}
                        >
                          {appt.status.charAt(0).toUpperCase() +
                            appt.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-500 hover:text-blue-600">
                            <FiEdit2 className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-red-600">
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <FiAlertCircle className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No appointments
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                No appointments scheduled for this date
              </p>
            </div>
          )}
        </div>
        <div className="px-6 py-4 border-t flex justify-between">
          <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors">
            <FiChevronLeft className="mr-2" /> Previous Day
          </button>
          <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors">
            Next Day <FiChevronRight className="ml-2" />
          </button>
        </div>
      </div> 
    </>
  )
}

export default AppointmentList