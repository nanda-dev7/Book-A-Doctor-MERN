import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import HomePage from "../pages/User/HomePage";

import ApplyDoctor from "../pages/Doctor/ApplyDoctor";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import DoctorsList from "../pages/Admin/DoctorsList";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* User Routes */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/apply-doctor"
        element={
          <ProtectedRoute>
            <ApplyDoctor />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/doctors"
        element={
          <ProtectedRoute>
            <DoctorsList />
          </ProtectedRoute>
        }
      />

      {/* Default Route */}

      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;