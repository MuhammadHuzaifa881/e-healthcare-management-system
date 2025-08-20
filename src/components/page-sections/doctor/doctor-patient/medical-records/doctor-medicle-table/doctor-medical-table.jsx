
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FiSearch, FiFilter, FiEye, FiEdit } from "react-icons/fi";
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
import { useState } from "react";
const DoctorMedicalTable = () => {
        const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Sample patient data
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 45,
      gender: "Female",
      lastVisit: "2023-10-15",
      status: "stable",
      condition: "Hypertension",
      bloodType: "A+",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 62,
      gender: "Male",
      lastVisit: "2023-10-12",
      status: "critical",
      condition: "Diabetes Type II",
      bloodType: "O-",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: 28,
      gender: "Female",
      lastVisit: "2023-10-10",
      status: "recovering",
      condition: "Migraine",
      bloodType: "B+",
    },
    {
      id: 4,
      name: "James Wilson",
      age: 51,
      gender: "Male",
      lastVisit: "2023-10-08",
      status: "stable",
      condition: "High Cholesterol",
      bloodType: "AB+",
    },
    {
      id: 5,
      name: "Olivia Parker",
      age: 34,
      gender: "Female",
      lastVisit: "2023-10-05",
      status: "recovering",
      condition: "Asthma",
      bloodType: "A-",
    },
  ];

        // Get status badge color based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "stable":
        return <Badge className="bg-green-500">Stable</Badge>;
      case "recovering":
        return <Badge variant="secondary">Recovering</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
    // Filter patients based on search term and active tab
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && patient.status === activeTab;
  });

  return (
    <>
       <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
          <CardDescription>
            Manage and review patient medical records
          </CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search patients or conditions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <FiFilter /> Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
              <TabsTrigger value="stable">Stable</TabsTrigger>
              <TabsTrigger value="recovering">Recovering</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Condition</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>
                        <div className="font-medium">{patient.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {patient.age} yrs • {patient.gender} •{" "}
                          {patient.bloodType}
                        </div>
                      </TableCell>
                      <TableCell>{patient.condition}</TableCell>
                      <TableCell>{patient.lastVisit}</TableCell>
                      <TableCell>{getStatusBadge(patient.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <FiEye className="mr-1" /> View
                          </Button>
                          <Button variant="outline" size="sm">
                            <FiEdit className="mr-1" /> Edit
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Tabs>
        </CardContent>
      </Card> 
    </>
  )
}

export default DoctorMedicalTable