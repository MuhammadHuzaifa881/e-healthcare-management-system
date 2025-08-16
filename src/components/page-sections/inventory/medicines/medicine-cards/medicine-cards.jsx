import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MedicineCards = ({medicines}) => {

        // Summary cards data
  const summaryData = [
    { title: 'Total Medicines', value: medicines.length, change: '+8% from last month' },
    { title: 'Low Stock Items', value: medicines.filter(m => m.stock <= m.threshold).length, change: '+3 from last week' },
    { title: 'Expiring Soon', value: medicines.filter(m => {
      const expiryDate = new Date(m.expiry);
      const today = new Date();
      const diffTime = expiryDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 90;
    }).length, change: '2 this month' },
    { title: 'Categories', value: new Set(medicines.map(m => m.category)).size, change: 'No change' },
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

export default MedicineCards;
