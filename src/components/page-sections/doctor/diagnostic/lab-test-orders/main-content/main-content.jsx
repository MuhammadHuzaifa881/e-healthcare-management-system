import { Tabs } from "@/components/ui/tabs";
import TabListLabTestOrders from "./tab-list";
import OrdersTab from "./tab-content/orders";
import HistoryTab from "./tab-content/history";
import Results from "./tab-content/results";
import { useState } from "react";

const MainContentLabTestOrders = ({selectedTests}) => {
  const [activeTab, setActiveTab] = useState("order");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabListLabTestOrders />
        <OrdersTab searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedTests={selectedTests} />
        <HistoryTab searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Results searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Tabs>
    </>
  );
};

export default MainContentLabTestOrders;
