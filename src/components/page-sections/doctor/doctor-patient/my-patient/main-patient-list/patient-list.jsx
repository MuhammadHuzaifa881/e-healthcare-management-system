import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FiActivity, FiAlertCircle, FiCalendar, FiEdit, FiEye, FiFilter, FiHeart, FiSearch } from "react-icons/fi"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
const PatientList = ({setSearchTerm,searchTerm,filteredPatients,activeTab,setActiveTab,patientCounts}) => {
  // Get status badge color based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case "critical":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <FiAlertCircle /> Critical
          </Badge>
        );
      case "stable":
        return (
          <Badge className="bg-green-500 flex items-center gap-1">
            <FiHeart /> Stable
          </Badge>
        );
      case "recovering":
        return (
          <Badge variant="secondary" className="flex items-center gap-1">
            <FiActivity /> Recovering
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (

    <>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Patient List</CardTitle>
              <CardDescription>
                Your current patients and their status
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
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="all">
                    All ({patientCounts.all})
                  </TabsTrigger>
                  <TabsTrigger value="critical">
                    Critical ({patientCounts.critical})
                  </TabsTrigger>
                  <TabsTrigger value="stable">
                    Stable ({patientCounts.stable})
                  </TabsTrigger>
                  <TabsTrigger value="recovering">
                    Recovering ({patientCounts.recovering})
                  </TabsTrigger>
                </TabsList>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Condition</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead>Next Appointment</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPatients.map((patient) => (
                        <TableRow key={patient.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={patient.avatar}
                                  alt={patient.name}
                                />
                                <AvatarFallback>
                                  {patient.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">
                                  {patient.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {patient.age} yrs • {patient.gender}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{patient.condition}</TableCell>
                          <TableCell>{patient.lastVisit}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <FiCalendar className="h-3 w-3 text-muted-foreground" />
                              {patient.nextAppointment}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={patient.treatmentProgress}
                                className="h-2 w-16"
                              />
                              <span className="text-sm">
                                {patient.treatmentProgress}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(patient.status)}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8"
                              >
                                <FiEye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8"
                              >
                                <FiEdit className="h-4 w-4" />
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
        </div>
    </>
  )
}

export default PatientList