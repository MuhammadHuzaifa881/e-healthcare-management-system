import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabLists from "../../tab-lists/tab-lists";
import AddNewMedicalHistory from "../../add-new-history/add-new-history";
import AddNewDetailForm from "../../add-new-detail-form/add-detail-form";
import { useState } from "react";
import ConditionsTable from "../medical-history-tables/conditions-table";
import MedicationTables from "../medical-history-tables/medication-tables";
import AlergiesTable from "../medical-history-tables/alergies-table";

const MedicalHistoryTabs = () => {
  const [activeTab, setActiveTab] = useState("conditions");
  const [showAddForm, setShowAddForm] = useState(false);

  


  return (
    <>
      <Tabs defaultValue="conditions" className="w-full">
        <TabLists setActiveTab={setActiveTab} activeTab={activeTab} />

        <AddNewMedicalHistory setShowAddForm={setShowAddForm} activeTab={activeTab} />

        {showAddForm && <AddNewDetailForm activeTab={activeTab} />}

        {/* all tables */}
        {/* condition table */}
        <ConditionsTable />

        {/* medication table */}
        <MedicationTables />
        
        {/* alergies table */}
        <AlergiesTable />
      </Tabs>
    </>
  );
};

export default MedicalHistoryTabs;
