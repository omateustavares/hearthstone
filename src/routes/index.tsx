import { useLocation, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
