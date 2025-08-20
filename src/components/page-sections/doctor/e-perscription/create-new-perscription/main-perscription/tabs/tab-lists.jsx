import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabLists = () => {
  return (
    <>
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="create">Create Prescription</TabsTrigger>
        <TabsTrigger value="history">Prescription History</TabsTrigger>
        <TabsTrigger value="templates">Templates</TabsTrigger>
      </TabsList>
    </>
  );
};

export default TabLists;
