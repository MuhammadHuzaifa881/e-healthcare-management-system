// pages/unauthorized.jsx
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center"   >
      <h1>401 - Unauthorized Access</h1>
      <p>You don't have permission to access this page.</p>
      <Link to="/login" className="mt-5">
        Return to Login
      </Link>
    </div>
  );
};

export default Unauthorized;