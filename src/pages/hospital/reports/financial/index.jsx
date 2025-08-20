import { useState } from "react";
import {
  FiDownload,
  FiPrinter,
  FiFilter,
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiPieChart,
} from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeaderFinancialReport from "@/components/page-sections/reports/financial/header/header";
import ActionFilter from "@/components/page-sections/reports/financial/action-filter/action-filter";
import FinancialCards from "@/components/page-sections/reports/financial/financial-cards/financial-cards";
import ChartList from "@/components/page-sections/reports/financial/chart-list/chart-list";
import DetailFinancialReports from "@/components/page-sections/reports/financial/detailed-financial-report/detail-financial-report";

const FinancialReports = () => {
  const [timeRange, setTimeRange] = useState("month");
  const [reportType, setReportType] = useState("revenue");
  const [dateRange, setDateRange] = useState({
    start: "2023-10-01",
    end: "2023-10-31",
  });

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

  const revenueByService = [
    { name: "Consultations", value: 125000 },
    { name: "Diagnostics", value: 85000 },
    { name: "Procedures", value: 65000 },
    { name: "Medications", value: 45000 },
    { name: "Other", value: 25000 },
  ];

  const expenseBreakdown = [
    { name: "Staff", value: 65000 },
    { name: "Medicines", value: 35000 },
    { name: "Equipment", value: 25000 },
    { name: "Facilities", value: 15000 },
    { name: "Other", value: 10000 },
  ];

  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 rounded-lg">
      <HeaderFinancialReport />
      {/* filter action here */}
      <ActionFilter
        setDateRange={setDateRange}
        setReportType={setReportType}
        dateRange={dateRange}
        setTimeRange={setTimeRange}
        timeRange={timeRange}
      />
      {/* financial cards  */}
      <FinancialCards />

      <ChartList />

      {/* Detailed Report Table using shadcn Table component */}
      <DetailFinancialReports/>
    </div>
  );
};

export default FinancialReports;