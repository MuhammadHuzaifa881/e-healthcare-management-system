import React from 'react'

const AdminHeader = () => {
  return (
    <>
           <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">Hospital Dashboard</h1>
          </div>
        </header>
    </>
  )
}

export default AdminHeader