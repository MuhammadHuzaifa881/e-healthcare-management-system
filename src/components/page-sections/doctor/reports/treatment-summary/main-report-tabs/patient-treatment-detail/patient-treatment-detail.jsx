import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  FiActivity,
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiDownload,
  FiEdit,
  FiPlus,
  FiPrinter,
  FiTrendingDown,
  FiUser,
} from "react-icons/fi";
import TreatmentCard from '../treatment-cards/treatment-cards'
const PatientTreatmentDetail = ({ patient, treatments, onBack }) => {
  const [activeTab, setActiveTab] = useState("current");

  const activeTreatments = treatments.filter((t) => t.status === "active");
  const completedTreatments = treatments.filter(
    (t) => t.status === "completed"
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <FiArrowLeft /> Back to summary
        </Button>
        <h1 className="text-3xl font-bold">Treatment Plan</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{patient.name}'s Treatment Plans</CardTitle>
                <CardDescription>
                  {patient.condition} • Under care of {patient.physician}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <FiDownload /> Export
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FiPrinter /> Print
                </Button>
                <Button className="flex items-center gap-2">
                  <FiEdit /> Modify
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="current">Current Plans</TabsTrigger>
                  <TabsTrigger value="history">Treatment History</TabsTrigger>
                </TabsList>

                <TabsContent value="current" className="space-y-4">
                  {activeTreatments.length > 0 ? (
                    activeTreatments.map((treatment) => (
                      <TreatmentCard key={treatment.id} treatment={treatment} />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <FiActivity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium">
                        No Active Treatments
                      </h3>
                      <p className="text-muted-foreground">
                        This patient doesn't have any active treatment plans.
                      </p>
                      <Button className="mt-4">
                        <FiPlus className="mr-2" /> Create New Plan
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                  {completedTreatments.length > 0 ? (
                    completedTreatments.map((treatment) => (
                      <TreatmentCard key={treatment.id} treatment={treatment} />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <FiClock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium">
                        No Treatment History
                      </h3>
                      <p className="text-muted-foreground">
                        This patient doesn't have any completed treatment plans.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>
                Key metrics and outcomes for {patient.name}'s treatment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Blood Pressure Trends</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Systolic</span>
                      <span className="text-sm font-medium">128 mmHg</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>High</span>
                      <span>Target</span>
                      <span>Normal</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Diastolic</span>
                      <span className="text-sm font-medium">82 mmHg</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>High</span>
                      <span>Target</span>
                      <span>Normal</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Lab Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cholesterol</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">198 mg/dL</span>
                        <FiTrendingDown className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">A1C</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">6.2%</span>
                        <FiTrendingDown className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Weight</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">167 lbs</span>
                        <FiTrendingDown className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiUser className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{patient.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {patient.age} yrs • {patient.gender} • {patient.bloodType}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Condition</p>
                    <p className="text-sm">{patient.condition}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Last Visit</p>
                    <p className="text-sm">{patient.lastVisit}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Next Appointment</p>
                    <p className="text-sm">{patient.nextAppointment}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Treatment Progress</p>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={patient.treatmentProgress}
                        className="h-2 w-12"
                      />
                      <span className="text-sm">
                        {patient.treatmentProgress}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    View Full Medical History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Upcoming Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeTreatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-sm">{treatment.planName}</p>
                    <p className="text-xs text-muted-foreground">
                      Review due: {treatment.nextReview}
                    </p>
                  </div>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <FiPlus className="mr-2" /> Add New Treatment
              </Button>
              <Button variant="outline" className="w-full">
                <FiEdit className="mr-2" /> Modify Plan
              </Button>
              <Button variant="outline" className="w-full">
                <FiCalendar className="mr-2" /> Schedule Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientTreatmentDetail;
