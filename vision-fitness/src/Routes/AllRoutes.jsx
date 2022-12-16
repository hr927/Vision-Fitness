import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Membership from "./Membership";
import Signup from "./Signup";
import Login from "./Login";
import Workouts from "./Workouts";
import Program from "./Programs";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/workout" element={<Workouts />} />
      <Route path="/program" element={<Program />} />
    </Routes>
  );
}
export default AllRoutes;
