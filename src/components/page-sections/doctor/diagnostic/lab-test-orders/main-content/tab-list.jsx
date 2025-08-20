import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabListLabTestOrders = () => {
  return (
    <>
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="order">Order Tests</TabsTrigger>
        <TabsTrigger value="history">Order History</TabsTrigger>
        <TabsTrigger value="results">Test Results</TabsTrigger>
      </TabsList>
    </>
  );
};

export default TabListLabTestOrders;
