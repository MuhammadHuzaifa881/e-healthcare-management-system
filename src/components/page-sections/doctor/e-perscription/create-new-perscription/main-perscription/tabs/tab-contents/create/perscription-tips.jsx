import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FiAlertCircle } from 'react-icons/fi'

const PerscriptionTips = () => {
  return (
    <>
        <Card>
              <CardHeader className="pb-3">
                <CardTitle>Prescription Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <FiAlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <p className="text-sm">
                    Check for drug allergies before prescribing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiAlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <p className="text-sm">
                    Review patient's current medications for interactions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiAlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <p className="text-sm">
                    Provide clear instructions for usage
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiAlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <p className="text-sm">
                    Consider patient's age and renal function when dosing
                  </p>
                </div>
              </CardContent>
            </Card>
    </>
  )
}

export default PerscriptionTips