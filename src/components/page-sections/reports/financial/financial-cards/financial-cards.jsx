import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { summaryData } from "@/constants/hospital/reports/financial";

const FinancialCards = () => {
  return (
    <>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryData.map((item, index) => {
          const IconComponent = item.icon; // Get the icon component
          
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {item.title}
                </CardTitle>
                <div
                  className={`p-2 rounded-full h-11 w-11 ${
                    item.isPositive
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  <IconComponent size={24} /> {/* Render as JSX element */}
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
          );
        })}
      </div>
    </>
  );
};

export default FinancialCards;