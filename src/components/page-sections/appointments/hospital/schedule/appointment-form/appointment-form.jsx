import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar, CalendarIcon, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const AppointmentForm = ({
  setFormData,
  setShowAddForm,
  formData,
  handleDateChange,
}) => {
  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Lee"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment scheduled:", formData);
    setShowAddForm(false);
    setFormData({
      patientName: "",
      appointmentDate: date,
      appointmentTime: "09:00",
      doctor: "",
      reason: "",
      status: "scheduled",
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">
          Schedule New Appointment
        </h2>
        <p className="text-gray-600">
          Fill out the form to create a new appointment
        </p>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Patient Name */}
            <div className="space-y-2">
              <label
                htmlFor="patientName"
                className="block text-sm font-medium text-gray-700"
              >
                Patient Name
              </label>
              <Input
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                placeholder="Enter patient name"
                required
              />
            </div>

            {/* Doctor Select */}
            <div className="space-y-2">
              <label
                htmlFor="doctor"
                className="block text-sm font-medium text-gray-700"
              >
                Doctor
              </label>
              <Select
                name="doctor"
                value={formData.doctor}
                onValueChange={(value) =>
                  handleInputChange({
                    target: { name: "doctor", value },
                  })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  {doctors.map((doctor) => (
                    <SelectItem key={doctor} value={doctor}>
                      {doctor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <label
                htmlFor="appointmentDate"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.appointmentDate ? (
                      format(formData.appointmentDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.appointmentDate}
                    onSelect={handleDateChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Input */}
            <div className="space-y-2">
              <label
                htmlFor="appointmentTime"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <Input
                id="appointmentTime"
                name="appointmentTime"
                type="time"
                value={formData.appointmentTime}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Reason */}
            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Reason
              </label>
              <Input
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder="Enter appointment reason"
                required
              />
            </div>

            {/* Status Select */}
            <div className="space-y-2">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <Select
                name="status"
                value={formData.status}
                onValueChange={(value) =>
                  handleInputChange({
                    target: { name: "status", value },
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-2 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowAddForm(false)}
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button type="submit">Schedule Appointment</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
