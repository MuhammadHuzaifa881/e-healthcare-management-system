import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EquipmentCards = ({equipment}) => {
        // Summary cards data
  const summaryData = [
    { title: 'Total Equipment', value: equipment.length, change: '+5 from last quarter' },
    { title: 'Operational', value: equipment.filter(e => e.status === 'operational').length, change: '92% availability' },
    { title: 'Needs Attention', value: equipment.filter(e => e.status !== 'operational').length, change: '+2 from last month' },
    { title: 'Warranty Expiring', value: equipment.filter(e => {
      const warrantyDate = new Date(e.warranty);
      const today = new Date();
      const diffTime = warrantyDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 180;
    }).length, change: '3 in next 6 months' },
  ];

  return (
    <>
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
    </>
  );
};

export default EquipmentCards;
