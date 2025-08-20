import React, { useState } from "react";
import {
  FiSearch,
  FiTrash2,
  FiSave,
  FiPrinter,
  FiUser,
  FiArrowLeft,
  FiCheckCircle,
  FiFileText,
  FiFilter,
  FiDownload,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import LabTestOrderHeader from "@/components/page-sections/doctor/diagnostic/lab-test-orders/header/header";
import MainContentLabTestOrders from "@/components/page-sections/doctor/diagnostic/lab-test-orders/main-content/main-content";

const LabTestOrderPage = () => {

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedTests, setSelectedTests] = useState([]);
  const [testSearchTerm, setTestSearchTerm] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    priority: "routine",
    instructions: "",
    fastingRequired: false,
    specialInstructions: "",
  });

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle test selection
  const handleTestSelect = (test) => {
    if (selectedTests.some((t) => t.id === test.id)) {
      setSelectedTests(selectedTests.filter((t) => t.id !== test.id));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  // Remove test from the list
  const removeTest = (id) => {
    setSelectedTests(selectedTests.filter((test) => test.id !== id));
  };

  // Handle patient selection
  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  // Calculate total price
  const totalPrice = selectedTests.reduce(
    (total, test) => total + test.price,
    0
  );

  // Submit test order
  const submitTestOrder = () => {
    if (selectedPatient && selectedTests.length > 0) {
      // Here you would typically send the data to your backend
      alert(`Lab test order submitted for ${selectedPatient.name}`);
      setSelectedTests([]);
      setSelectedPatient(null);
      setFormData({
        priority: "routine",
        instructions: "",
        fastingRequired: false,
        specialInstructions: "",
      });
    } else {
      alert("Please select a patient and at least one test");
    }
  };



  return (
    <div className="p-6 space-y-6 bg-blue-300 rounded-lg">
      <LabTestOrderHeader />

      <MainContentLabTestOrders selectedTests={selectedTests} />
    </div>
  );
};

export default LabTestOrderPage;
