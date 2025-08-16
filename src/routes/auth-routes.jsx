import LoginForm from '@/components/auth/login/login'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm/>} />
    </Routes>
  )
}

export default AuthRoutes