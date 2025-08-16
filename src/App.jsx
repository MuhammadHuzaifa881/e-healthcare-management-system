import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Bounce, ToastContainer } from 'react-toastify';
import { RingLoader } from 'react-spinners';

// Lazy load your main components
const AuthRoutes = lazy(() => import("./routes/auth-routes"));
const DashboardLayout = lazy(() => import("./components/layouts/dashboard-layout"));

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      
      <Suspense 
        fallback={
          <div className="spinner-container">
            <RingLoader color="#3DA1F5" size={80} />
          </div>
        }
      >
        <Routes>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<DashboardLayout />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;