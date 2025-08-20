import { FaCalendarAlt, FaEllipsisV } from "react-icons/fa"

const UpcommingAppointmnets = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
              <button className="text-sm text-blue-600">View All</button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-gray-500">Regular Checkup</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisV />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-2" />
                    <span>Today, 2:00 PM</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <button className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-md">
                      Confirm
                    </button>
                    <button className="text-sm px-3 py-1 bg-red-50 text-red-600 rounded-md">
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </>
  )
}

export default UpcommingAppointmnets