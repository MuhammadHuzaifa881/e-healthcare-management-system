import { FaClock, FaMapMarkerAlt, FaStethoscope, FaVideo } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

const UpcommingAppointmentList = ({appointmentsByDate,filteredAppointments,viewMode}) => {
  return (
    <>
     <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            {viewMode === "day"
              ? "Daily Appointments"
              : viewMode === "week"
              ? "Weekly Schedule"
              : "Monthly Overview"}
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {Object.entries(appointmentsByDate).map(([date, appointments]) => (
            <div key={date}>
              {/* Date Header */}
              <div className="bg-gray-50 px-4 py-3">
                <h3 className="font-semibold text-gray-800">
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
              </div>

              {/* Appointments for this date */}
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    {/* Appointment Info */}
                    <div className="flex items-start space-x-4 flex-1">
                      <div
                        className={`p-3 rounded-lg ${
                          appointment.status === "confirmed"
                            ? "bg-green-50 text-green-600"
                            : appointment.status === "pending"
                            ? "bg-yellow-50 text-yellow-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <FaClock className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between">
                          <h3 className="font-medium text-gray-900">
                            {appointment.patient}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              appointment.priority === "high"
                                ? "bg-red-100 text-red-800"
                                : appointment.priority === "low"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {appointment.priority} priority
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center mt-2 text-sm text-gray-500 space-x-4">
                          <span className="flex items-center">
                            <FaClock className="mr-1" /> {appointment.time} (
                            {appointment.duration})
                          </span>
                          <span className="flex items-center">
                            <FaStethoscope className="mr-1" />{" "}
                            {appointment.type}
                          </span>
                          <span className="flex items-center">
                            {appointment.location === "Telemedicine" ? (
                              <FaVideo className="mr-1" />
                            ) : (
                              <FaMapMarkerAlt className="mr-1" />
                            )}
                            {appointment.location}
                          </span>
                        </div>

                        {appointment.notes && (
                          <p className="mt-2 text-sm text-gray-600">
                            {appointment.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-3 lg:mt-0 flex items-center space-x-3">
                      <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition">
                        Details
                      </button>
                      <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredAppointments.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center mt-6">
          <MdEventAvailable className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            No upcoming appointments
          </h3>
          <p className="text-gray-500 mb-4">
            You don't have any appointments scheduled for the selected period.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Schedule New Appointment
          </button>
        </div>
      )}
    </>
  )
}

export default UpcommingAppointmentList;