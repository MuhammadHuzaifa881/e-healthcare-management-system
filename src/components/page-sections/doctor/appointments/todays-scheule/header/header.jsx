import { FaCalendarAlt } from "react-icons/fa"

const DoctorTodaysScheduleHeader = () => {
  return (
    <>
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
    </>
  )
}

export default DoctorTodaysScheduleHeader;