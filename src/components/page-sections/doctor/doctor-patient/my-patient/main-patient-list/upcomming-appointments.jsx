import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

const UpcommingAppointments = ({patients}) => {

  // Upcoming appointments (next 7 days)
  const upcomingAppointments = patients
    .filter((patient) => {
      const appointmentDate = new Date(patient.nextAppointment);
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7);
      return appointmentDate >= today && appointmentDate <= nextWeek;
    })
    .sort((a, b) => new Date(a.nextAppointment) - new Date(b.nextAppointment));
  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Next 7 days</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((patient) => (
              <div
                key={patient.id}
                className="flex items-center gap-4 p-3 border rounded-lg"
              >
                <Avatar>
                  <AvatarImage src={patient.avatar} alt={patient.name} />
                  <AvatarFallback>{patient.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{patient.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FiCalendar className="h-3 w-3" />
                    {patient.nextAppointment}
                    <FiClock className="h-3 w-3 ml-2" />
                    10:30 AM
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <FiArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-4">
              No upcoming appointments
            </p>
          )}
          <Button variant="outline" className="w-full mt-2">
            View All Appointments
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default UpcommingAppointments;
