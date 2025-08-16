import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiDollarSign, FiPieChart, FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const FinancialCards = () => {
  // Summary cards data
  const summaryData = [
    {
      title: "Total Revenue",
      value: "$215,000",
      change: "+8.5%",
      isPositive: true,
      icon: <FiDollarSign className="h-5 w-5" />,
    },
    {
      title: "Total Expenses",
      value: "$130,000",
      change: "+4.2%",
      isPositive: false,
      icon: <FiTrendingDown className="h-5 w-5" />,
    },
    {
      title: "Net Profit",
      value: "$85,000",
      change: "+14.3%",
      isPositive: true,
      icon: <FiTrendingUp className="h-5 w-5" />,
    },
    {
      title: "Profit Margin",
      value: "39.5%",
      change: "+2.1%",
      isPositive: true,
      icon: <FiPieChart className="h-5 w-5" />,
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
                {item.change} {item.isPositive ? "increase" : "increase"} from
                last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FinancialCards;
