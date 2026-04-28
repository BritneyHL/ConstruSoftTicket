import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import CreateTicket from "../pages/CreateTicket";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tickets" element={<CreateTicket />} />
      </Routes>
    </BrowserRouter>
  );
}