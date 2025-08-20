import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const PatientStatusCards = () => {
  return (
    <>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Patients</CardDescription>
            <CardTitle className="text-4xl">{patientCounts.all}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Under your care</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Critical Cases</CardDescription>
            <CardTitle className="text-4xl">{patientCounts.critical}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Need immediate attention</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Stable Patients</CardDescription>
            <CardTitle className="text-4xl">{patientCounts.stable}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">Doing well</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Recovering</CardDescription>
            <CardTitle className="text-4xl">{patientCounts.recovering}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">In recovery phase</div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default PatientStatusCards