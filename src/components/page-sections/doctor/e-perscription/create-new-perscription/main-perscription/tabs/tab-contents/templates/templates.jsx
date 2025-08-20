import { TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FiPlus } from 'react-icons/fi'

const Templates = () => {
  return (
    <>
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Prescription Templates</CardTitle>
              <CardDescription>
                Save time with pre-defined prescription templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="cursor-pointer hover:border-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Hypertension</CardTitle>
                    <CardDescription>
                      Standard hypertension medication regimen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Lisinopril 10mg, Amlodipine 5mg</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:border-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Diabetes Type II</CardTitle>
                    <CardDescription>
                      Standard diabetes medication regimen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Metformin 500mg, Glipizide 5mg</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:border-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">
                      Upper Respiratory Infection
                    </CardTitle>
                    <CardDescription>
                      Common antibiotics for URI
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Amoxicillin 500mg, Guaifenesin 400mg
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex justify-center">
                <Button variant="outline">
                  <FiPlus className="mr-2" /> Create New Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
    </>
  )
}

export default Templates