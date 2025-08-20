// CommonRoutes.jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './protected-routes'
import HelpSupport from '@/pages/common/help-support'
import ProfileSettings from '@/pages/profile-settings'
import Notification from '@/pages/common/notifications'

const CommonRoutes = () => {
  return (
    <Routes>
      <Route
        path="/help-support"
        element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor', 'patient']}>
            <HelpSupport />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile-settings"
        element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor', 'patient']}>
            <ProfileSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor', 'patient']}>
            <Notification />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default CommonRoutes