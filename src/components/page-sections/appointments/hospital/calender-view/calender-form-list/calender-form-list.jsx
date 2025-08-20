import {
  FiCalendar,
  FiClock,
  FiUser,
} from "react-icons/fi";

const CalenderFormList = ({selectedDate}) => {
  return (
    <>
      <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Appointments for {selectedDate.toLocaleDateString()}
          </h2>
        </div>
        <div className="p-6">
          {selectedDate.getDay() % 2 === 0 ? ( // Just for demo purposes
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center font-medium">
                    <FiClock className="mr-2 text-gray-500" />
                    09:00 AM
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    Scheduled
                  </span>
                </div>
                <div className="mt-2">
                  <div className="flex items-center font-semibold">
                    <FiUser className="mr-2 text-gray-500" />
                    John Doe
                  </div>
                  <div className="text-sm text-gray-600 ml-6">
                    Annual Checkup with Dr. Smith
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center font-medium">
                    <FiClock className="mr-2 text-gray-500" />
                    02:30 PM
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Confirmed
                  </span>
                </div>
                <div className="mt-2">
                  <div className="flex items-center font-semibold">
                    <FiUser className="mr-2 text-gray-500" />
                    Jane Smith
                  </div>
                  <div className="text-sm text-gray-600 ml-6">
                    Follow-up with Dr. Johnson
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <FiCalendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No appointments
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                No appointments scheduled for this day
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CalenderFormList;
