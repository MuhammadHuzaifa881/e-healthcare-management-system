import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { FiArrowLeft, FiUser } from 'react-icons/fi'

const SelectPatient = ({selectedPatient,setSelectedPatient}) => {
  return (
    <>
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
                          {selectedPatient.age} yrs • {selectedPatient.gender} •{" "}
                          {selectedPatient.bloodType}
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
    </>
  )
}

export default SelectPatient