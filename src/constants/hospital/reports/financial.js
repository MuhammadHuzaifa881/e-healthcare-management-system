import { FiDollarSign, FiPieChart, FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export  const financialData = [
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


  export const revenueByService = [
      { name: "Consultations", value: 125000 },
      { name: "Diagnostics", value: 85000 },
      { name: "Procedures", value: 65000 },
      { name: "Medications", value: 45000 },
      { name: "Other", value: 25000 },
    ];
  
  export const expenseBreakdown = [
      { name: "Staff", value: 65000 },
      { name: "Medicines", value: 35000 },
      { name: "Equipment", value: 25000 },
      { name: "Facilities", value: 15000 },
      { name: "Other", value: 10000 },
    ];
  
    export   const summaryData = [
        {
          title: "Total Revenue",
          value: "$215,000",
          change: "+8.5%",
          isPositive: true,
          icon: FiDollarSign,
        },
        {
          title: "Total Expenses",
          value: "$130,000",
          change: "+4.2%",
          isPositive: false,
          icon: FiTrendingDown,
        },
        {
          title: "Net Profit",
          value: "$85,000",
          change: "+14.3%",
          isPositive: true,
          icon: FiTrendingUp,
        },
        {
          title: "Profit Margin",
          value: "39.5%",
          change: "+2.1%",
          isPositive: true,
          icon: FiPieChart,
        },
      ];