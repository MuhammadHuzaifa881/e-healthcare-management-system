import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prescriptionHistory } from "@/constants/doctor/e-perscriptions/create-new/create-new"

const RecentPercription = () => {
  return (
    <>
       <Card>
              <CardHeader className="pb-3">
                <CardTitle>Recent Prescriptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {prescriptionHistory.slice(0, 3).map((prescription) => (
                  <div key={prescription.id} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{prescription.patient}</p>
                        <p className="text-sm text-muted-foreground">
                          {prescription.date}
                        </p>
                      </div>
                      <Badge
                        variant={
                          prescription.status === "active"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {prescription.status}
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">
                        {prescription.medications.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
    </>
  )
}

export default RecentPercription