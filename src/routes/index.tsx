import { Routes, Route } from "react-router-dom";
import CardInformation from "../pages/CreateCard";

import Dashboard from "../pages/Dashboard";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/card-information" element={<CardInformation />} />
    </Routes>
  );
}
