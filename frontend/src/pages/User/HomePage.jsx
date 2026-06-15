import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { user } = useSelector(
    (state) => state.auth
  );

  if (user?.role === "admin") {
    return <Navigate to="/admin/doctors" />;
  }

  if (user?.role === "doctor") {
    return <Navigate to="/doctor" />;
  }

  return (
    <h1>User Dashboard</h1>
  );
};

export default HomePage;