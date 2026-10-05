import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Task";
import TaskDetail from "../pages/TaskDetail";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import Layout from "../components/layout/Layout";
import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={<Navigate to="/login" replace />}
        />
        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          
          <Route element={<Layout />}>
            
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/tasks"
              element={<Tasks />}
            />

            <Route
              path="/tasks/:id"
              element={<TaskDetail />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Route>

        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;