import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiActivity, FiCalendar, FiTrendingDown, FiUsers } from "react-icons/fi";

const PatientStatisticCards = ({timeRange}) => {

      // Summary cards data
        const summaryData = [
          {
            title: "Total Patients",
            value: "1,150",
            change: "+12%",
            isPositive: true,
            icon: <FiUsers className="h-5 w-5" />,
          },
          {
            title: "New Patients",
            value: "175",
            change: "+8%",
            isPositive: true,
            icon: <FiActivity className="h-5 w-5" />,
          },
          {
            title: "Avg. Stay Duration",
            value: "3.2 days",
            change: "-0.5 days",
            isPositive: false,
            icon: <FiCalendar className="h-5 w-5" />,
          },
          {
            title: "Readmission Rate",
            value: "8.5%",
            change: "-1.2%",
            isPositive: true,
            icon: <FiTrendingDown className="h-5 w-5" />,
          },
        ];
      
  return (
    <>
          {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {summaryData.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      {item.title}
                    </CardTitle>
                    <div
                      className={`p-2 rounded-full ${
                        item.isPositive
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <p
                      className={`text-xs ${
                        item.isPositive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.change} from last {timeRange}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
      
    </>
  )
}

export default PatientStatisticCards