import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const InvoiceCards = ({invoices}) => {

        // Summary cards data
  const summaryData = [
    { title: 'Total Invoices', value: invoices.length, change: '+12% from last month' },
    { title: 'Paid Invoices', value: invoices.filter(i => i.status === 'paid').length, change: '+8% from last month' },
    { title: 'Pending Invoices', value: invoices.filter(i => i.status === 'pending').length, change: '+3% from last month' },
    { title: 'Overdue Invoices', value: invoices.filter(i => i.status === 'overdue').length, change: '-5% from last month' },
  ];

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryData.map((item, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-gray-500">{item.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvoiceCards;
