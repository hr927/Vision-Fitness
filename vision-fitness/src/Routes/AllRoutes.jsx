import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Membership from "./Membership";
import Signup from "./Signup";
import Login from "./Login";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default AllRoutes;
