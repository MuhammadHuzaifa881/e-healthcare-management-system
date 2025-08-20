import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { treatments } from "@/constants/doctor/reports/treatment-summary"

const ActiveTreatment = () => {
  return (
    <>
       <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Active Treatments</CardDescription>
                  <CardTitle className="text-4xl">
                    {treatments.filter((t) => t.status === "active").length}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Ongoing treatment plans
                  </div>
                </CardContent>
              </Card>
    </>
  )
}

export default ActiveTreatment