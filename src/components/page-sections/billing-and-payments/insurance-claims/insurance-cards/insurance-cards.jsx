import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const InsuranceCards = ({claims}) => {
        // Summary cards data
  const summaryData = [
    { title: 'Total Claims', value: claims.length, change: '+15% from last month' },
    { title: 'Approved Claims', value: claims.filter(c => c.status === 'approved').length, change: '+10% from last month' },
    { title: 'Pending Claims', value: claims.filter(c => c.status === 'pending').length, change: '+5% from last month' },
    { title: 'Rejected Claims', value: claims.filter(c => c.status === 'rejected').length, change: '-2% from last month' },
  ];

  return (
  <>
       {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryData.map((item, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-gray-500">{item.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>
  
  </>
);
};

export default InsuranceCards;
