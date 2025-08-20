import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { medicationOptions } from "@/constants/doctor/e-perscriptions/create-new/create-new";
import { useState } from "react";
import { FiCheckCircle, FiPlus } from "react-icons/fi";

const CurrentMedications = ({ selectedPatient }) => {
  const [medications, setMedications] = useState([]);
  const addMedication = () => {
    if (formData.medication && formData.dosage && formData.frequency) {
      const newMedication = {
        id: Date.now(),
        name: formData.medication,
        dosage: formData.dosage,
        frequency: formData.frequency,
        duration: formData.duration,
        instructions: formData.instructions,
        refills: formData.refills,
      };

      setMedications([...medications, newMedication]);

      // Reset form
      setFormData({
        medication: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
        refills: "0",
      });
    }
  };
  const [formData, setFormData] = useState({
    medication: "",
    dosage: "",
    frequency: "",
    duration: "",
    instructions: "",
    refills: "0",
  });
  const submitPrescription = () => {
    if (selectedPatient && medications.length > 0) {
      // Here you would typically send the data to your backend
      alert(`Prescription submitted for ${selectedPatient.name}`);
      setMedications([]);
      setSelectedPatient(null);
    } else {
      alert("Please select a patient and add at least one medication");
    }
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Medication Details</CardTitle>
          <CardDescription>Add medications to the prescription</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="medication">Medication</Label>
              <Select
                value={formData.medication}
                onValueChange={(value) =>
                  handleInputChange("medication", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select medication" />
                </SelectTrigger>
                <SelectContent>
                  {medicationOptions.map((med) => (
                    <SelectItem key={med.id} value={med.name}>
                      {med.name} ({med.dosage}) - {med.category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                id="dosage"
                placeholder="e.g., 10mg"
                value={formData.dosage}
                onChange={(e) => handleInputChange("dosage", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Select
                value={formData.frequency}
                onValueChange={(value) => handleInputChange("frequency", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Once daily">Once daily</SelectItem>
                  <SelectItem value="Twice daily">Twice daily</SelectItem>
                  <SelectItem value="Three times daily">
                    Three times daily
                  </SelectItem>
                  <SelectItem value="Four times daily">
                    Four times daily
                  </SelectItem>
                  <SelectItem value="As needed">As needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                placeholder="e.g., 7 days"
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="refills">Refills</Label>
              <Select
                value={formData.refills}
                onValueChange={(value) => handleInputChange("refills", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select refills" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No refills</SelectItem>
                  <SelectItem value="1">1 refill</SelectItem>
                  <SelectItem value="2">2 refills</SelectItem>
                  <SelectItem value="3">3 refills</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Additional Instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Special instructions for the patient"
              value={formData.instructions}
              onChange={(e) =>
                handleInputChange("instructions", e.target.value)
              }
            />
          </div>

          <Button
            onClick={addMedication}
            className="w-full"
            disabled={
              !formData.medication || !formData.dosage || !formData.frequency
            }
          >
            <FiPlus className="mr-2" /> Add Medication
          </Button>
        </CardContent>
      </Card>

      {medications.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Current Medications</CardTitle>
            <CardDescription>
              Review medications before submitting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Refills</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medications.map((medication) => (
                    <TableRow key={medication.id}>
                      <TableCell className="font-medium">
                        {medication.name}
                      </TableCell>
                      <TableCell>{medication.dosage}</TableCell>
                      <TableCell>{medication.frequency}</TableCell>
                      <TableCell>{medication.duration}</TableCell>
                      <TableCell>{medication.refills}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMedication(medication.id)}
                        >
                          <FiTrash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={submitPrescription}
                disabled={!selectedPatient}
                className="flex items-center gap-2"
              >
                <FiCheckCircle className="h-4 w-4" /> Submit Prescription
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CurrentMedications;
