import { FiDownload } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DetailFinancialReports = () => {
  // Sample financial data
  const financialData = [
    { name: "Jan", revenue: 125000, expenses: 85000, profit: 40000 },
    { name: "Feb", revenue: 135000, expenses: 90000, profit: 45000 },
    { name: "Mar", revenue: 145000, expenses: 95000, profit: 50000 },
    { name: "Apr", revenue: 155000, expenses: 100000, profit: 55000 },
    { name: "May", revenue: 165000, expenses: 105000, profit: 60000 },
    { name: "Jun", revenue: 175000, expenses: 110000, profit: 65000 },
    { name: "Jul", revenue: 185000, expenses: 115000, profit: 70000 },
    { name: "Aug", revenue: 195000, expenses: 120000, profit: 75000 },
    { name: "Sep", revenue: 205000, expenses: 125000, profit: 80000 },
    { name: "Oct", revenue: 215000, expenses: 130000, profit: 85000 },
    { name: "Nov", revenue: 225000, expenses: 135000, profit: 90000 },
    { name: "Dec", revenue: 235000, expenses: 140000, profit: 95000 },
  ];

  return (
    <>
      {/* Detailed Report Table using shadcn Table component */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Detailed Financial Report</CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <FiDownload className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Period</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">Expenses</TableHead>
                <TableHead className="text-right">Profit</TableHead>
                <TableHead className="text-right">Margin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financialData.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">
                    ${item.revenue.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.expenses.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.profit.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {((item.profit / item.revenue) * 100).toFixed(1)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailFinancialReports;
