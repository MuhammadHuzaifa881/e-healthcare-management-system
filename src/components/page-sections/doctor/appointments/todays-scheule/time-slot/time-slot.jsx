const TimeSlot = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Available Time Slots
          </h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              "09:00 AM",
              "10:00 AM",
              "11:00 AM",
              "01:00 PM",
              "02:00 PM",
              "03:00 PM",
              "04:00 PM",
            ].map((time) => (
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
    </>
  )
}

export default TimeSlot