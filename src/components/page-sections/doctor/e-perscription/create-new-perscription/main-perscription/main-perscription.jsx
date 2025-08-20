import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiTrash2,
  FiUser,
  FiArrowLeft,
  FiCheckCircle,
  FiAlertCircle,
  FiEdit,
} from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabLists from "./tabs/tab-lists";
import { prescriptionHistory } from "@/constants/doctor/e-perscriptions/create-new/create-new";
import MainCreate from "./tabs/tab-contents/create/main-create";
import History from "./tabs/tab-contents/history/history";
import Templates from "./tabs/tab-contents/templates/templates";

const MainPerscriptios = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medications, setMedications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Form state

  // Handle form input changes
  //   const handleInputChange = (field, value) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [field]: value,
  //     }));
  //   };

  // Add medication to the list

  // Remove medication from the list
  //   const removeMedication = (id) => {
  //     setMedications(medications.filter((med) => med.id !== id));
  //   };

  // Handle patient selection
  //   const handlePatientSelect = (patient) => {
  //     setSelectedPatient(patient);
  //   };

  // Submit prescription

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabLists />

        {/* tab content */}
        <MainCreate setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        {/* history tab */}
        <History />

      {/* Templates */}
      <Templates/>
      </Tabs>
    </>
  );
};

export default MainPerscriptios;
