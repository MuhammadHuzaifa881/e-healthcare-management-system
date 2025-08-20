import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { patients } from "@/constants/doctor/e-perscriptions/create-new/create-new"
import { FiSearch } from "react-icons/fi"

const PatientInformation = ({setSearchTerm,searchTerm,selectedPatient}) => {
  return (
    <>
          <Card>
              <CardHeader>
                <CardTitle>Patient Information</CardTitle>
                <CardDescription>
                  Select a patient to create a prescription
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
                            <p className="text-sm mt-1">{patient.condition}</p>
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
    </>
  )
}

export default PatientInformation