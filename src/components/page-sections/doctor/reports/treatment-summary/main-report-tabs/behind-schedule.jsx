import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const BehindSchedule = () => {
  return (
    <>
       <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Behind Schedule</CardDescription>
                  <CardTitle className="text-4xl">2</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Progress below target
                  </div>
                </CardContent>
              </Card>
    </>
  )
}

export default BehindSchedule