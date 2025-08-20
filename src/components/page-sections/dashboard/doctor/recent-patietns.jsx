
const RecentPatients = () => {
        const recentPatients = [
    {
      id: 1,
      name: "John Smith",
      lastVisit: "2023-05-15",
      condition: "Hypertension",
      nextAppointment: "2023-06-10",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      lastVisit: "2023-05-10",
      condition: "Diabetes",
      nextAppointment: "2023-06-05",
    },
    {
      id: 3,
      name: "Michael Brown",
      lastVisit: "2023-05-08",
      condition: "Asthma",
      nextAppointment: "2023-06-12",
    },
    {
      id: 4,
      name: "Emily Davis",
      lastVisit: "2023-05-05",
      condition: "Migraine",
      nextAppointment: "2023-06-08",
    },
  ];
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Patients</h2>
              <button className="text-sm text-blue-600">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Visit
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Condition
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Next Appointment
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentPatients.map((patient) => (
                    <tr key={patient.id}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            {patient.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {patient.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {patient.lastVisit}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {patient.condition}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {patient.nextAppointment}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> 
    </>
  )
}

export default RecentPatients