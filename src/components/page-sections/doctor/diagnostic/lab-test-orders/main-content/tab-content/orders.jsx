import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { TabsContent } from "@/components/ui/tabs"
import { patients, testCategories, testOrdersHistory } from "@/constants/doctor/diagnostic/lab-test-orders"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"

const OrdersTab = ({setSearchTerm,searchTerm,selectedTests}) => {  
  const [selectedPatient, setSelectedPatient] = useState(null);
      const [testSearchTerm, setTestSearchTerm] = useState("");
    

        // Filter tests based on search term
  const filteredTests = testCategories
    .map((category) => ({
      ...category,
      tests: category.tests.filter(
        (test) =>
          test.name.toLowerCase().includes(testSearchTerm.toLowerCase()) ||
          test.code.toLowerCase().includes(testSearchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.tests.length > 0);

  return (
    <>
       <TabsContent value="order">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Information</CardTitle>
                  <CardDescription>
                    Select a patient to order lab tests
                  </CardDescription>
                  <div className="relative mt-4">
                    <FiSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search patients..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {patients
                      .filter(
                        (patient) =>
                          patient.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          patient.condition
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                      )
                      .map((patient) => (
                        <div
                          key={patient.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedPatient?.id === patient.id
                              ? "border-primary bg-primary/5"
                              : "hover:bg-muted/50"
                          }`}
                          onClick={() => handlePatientSelect(patient)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{patient.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {patient.age} yrs • {patient.gender} •{" "}
                                {patient.bloodType}
                              </p>
                              <p className="text-sm mt-1">
                                {patient.condition}
                              </p>
                            </div>
                            {selectedPatient?.id === patient.id && (
                              <FiCheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select Laboratory Tests</CardTitle>
                  <CardDescription>
                    Choose tests to order for the patient
                  </CardDescription>
                  <div className="relative mt-4">
                    <FiSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search tests..."
                      className="pl-10"
                      value={testSearchTerm}
                      onChange={(e) => setTestSearchTerm(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {filteredTests.map((category) => (
                    <div key={category.id} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-3">
                        {category.name}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {category.tests.map((test) => (
                          <div
                            key={test.id}
                            className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
                              selectedTests.some((t) => t.id === test.id)
                                ? "border-primary bg-primary/5"
                                : "hover:bg-muted/50"
                            }`}
                            onClick={() => handleTestSelect(test)}
                          >
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                checked={selectedTests.some(
                                  (t) => t.id === test.id
                                )}
                                onCheckedChange={() => handleTestSelect(test)}
                              />
                              <div>
                                <p className="font-medium">{test.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  Code: {test.code} • Turnaround:{" "}
                                  {test.duration}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${test.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {selectedTests.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                    <CardDescription>
                      Review and configure test order details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select
                          value={formData.priority}
                          onValueChange={(value) =>
                            handleInputChange("priority", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="routine">Routine</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                            <SelectItem value="stat">
                              STAT (Immediate)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fasting">Fasting Required</Label>
                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox
                            id="fasting"
                            checked={formData.fastingRequired}
                            onCheckedChange={(checked) =>
                              handleInputChange("fastingRequired", checked)
                            }
                          />
                          <label
                            htmlFor="fasting"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Patient should fast before tests
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instructions">Special Instructions</Label>
                      <Textarea
                        id="instructions"
                        placeholder="Any special instructions for the lab"
                        value={formData.specialInstructions}
                        onChange={(e) =>
                          handleInputChange(
                            "specialInstructions",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              {selectedPatient && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Selected Patient</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <FiUser className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {selectedPatient.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedPatient.age} yrs • {selectedPatient.gender}{" "}
                            • {selectedPatient.bloodType}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Condition</p>
                          <p className="text-sm">{selectedPatient.condition}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Last Visit</p>
                          <p className="text-sm">{selectedPatient.lastVisit}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedPatient(null)}
                          className="w-full"
                        >
                          <FiArrowLeft className="mr-2" /> Change Patient
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {selectedTests.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Selected Tests</CardTitle>
                    <CardDescription>
                      {selectedTests.length} test(s) selected
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedTests.map((test) => (
                        <div
                          key={test.id}
                          className="flex justify-between items-center border-b pb-2"
                        >
                          <div>
                            <p className="font-medium text-sm">{test.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {test.code}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">${test.price}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() => removeTest(test.id)}
                            >
                              <FiTrash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}

                      <div className="flex justify-between items-center pt-2 border-t">
                        <p className="font-semibold">Total</p>
                        <p className="font-semibold">${totalPrice}</p>
                      </div>
                    </div>

                    <Button
                      onClick={submitTestOrder}
                      className="w-full mt-4"
                      disabled={!selectedPatient}
                    >
                      <FiCheckCircle className="mr-2" /> Submit Test Order
                    </Button>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Recent Test Orders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {testOrdersHistory.slice(0, 3).map((order) => (
                    <div key={order.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{order.patient}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.date}
                          </p>
                        </div>
                        <Badge
                          variant={
                            order.status === "completed"
                              ? "default"
                              : order.status === "in-progress"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm">{order.tests.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent> 
    </>
  )
}

export default OrdersTab