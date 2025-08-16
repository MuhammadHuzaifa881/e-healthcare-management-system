import React from 'react';
import HealthcareImage from '@/assets/cover-bg.jpg';
import AuthRoutes from '@/routes/auth-routes';

const AuthLayout = () => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center">
      {/* Background image with dim overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HealthcareImage} 
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dim overlay */}
      </div>
      
      {/* Auth content */}
      <div className="relative z-10 w-full max-w-md rounded-2xl outline outline-primary-700 bg-white/50 mx-4">
        <AuthRoutes/>
      </div>
    </div>
  );
};

export default AuthLayout;