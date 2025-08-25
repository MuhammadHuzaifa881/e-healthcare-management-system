import { useState } from "react";
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