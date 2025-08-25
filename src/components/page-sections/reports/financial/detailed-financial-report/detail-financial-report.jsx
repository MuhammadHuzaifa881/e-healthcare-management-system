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
import { financialData } from "@/constants/hospital/reports/financial";

const DetailFinancialReports = () => {

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
