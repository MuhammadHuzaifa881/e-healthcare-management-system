import { Button } from '@/components/ui/button'
import React from 'react'
import { FiPrinter, FiSave } from 'react-icons/fi'

const PerscriptionCreateHeader = () => {
  return (
    <>
          <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">E-Prescription</h1>
                <p className="text-muted-foreground">Create and manage digital prescriptions</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <FiPrinter className="mr-2" /> Print
                </Button>
                <Button className='bg-primary-600 text-white hover:bg-primary-700'>
                  <FiSave className="mr-2" /> Save Draft
                </Button>
              </div>
            </div>
    </>
  )
}

export default PerscriptionCreateHeader