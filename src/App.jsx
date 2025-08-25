import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Bounce, ToastContainer } from "react-toastify";
import { RingLoader } from "react-spinners";

// Lazy load your main components
const AuthLayout = lazy(() => import("./components/layouts/auth-layout"));
const DashboardLayout = lazy(() =>
  import("./components/layouts/dashboard-layout")
);

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
  useEffect(() => {
    if (!authToken) {
      navigate("/auth/login");
    }
  }, [navigate, authToken]);

  return children;
};

const App = () => {
  return (
    <div className="pointer-events-auto">
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
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
