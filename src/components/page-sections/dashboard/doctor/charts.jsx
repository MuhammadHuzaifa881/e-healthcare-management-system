import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DoctorCharts = () => {
  // Sample data
  const patientStats = [
    { name: "Mon", patients: 12 },
    { name: "Tue", patients: 19 },
    { name: "Wed", patients: 15 },
    { name: "Thu", patients: 8 },
    { name: "Fri", patients: 11 },
    { name: "Sat", patients: 6 },
    { name: "Sun", patients: 3 },
  ];

  const vitalsData = [
    { name: "Jan", bloodPressure: 120, heartRate: 72, temperature: 98.6 },
    { name: "Feb", bloodPressure: 118, heartRate: 75, temperature: 98.4 },
    { name: "Mar", bloodPressure: 122, heartRate: 70, temperature: 98.8 },
    { name: "Apr", bloodPressure: 125, heartRate: 68, temperature: 98.2 },
    { name: "May", bloodPressure: 119, heartRate: 74, temperature: 98.5 },
    { name: "Jun", bloodPressure: 121, heartRate: 71, temperature: 98.7 },
  ];


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Patients Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Weekly Patients</h2>
            <button className="text-sm text-blue-600">View All</button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={patientStats}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="patients" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vitals Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Patient Vitals Trend</h2>
            <button className="text-sm text-blue-600">View All</button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="bloodPressure"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="heartRate"
                  stroke="#10b981"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="temperature"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCharts;
