// App.js
import "./App.css";
import CreateUserPage from "./Pages/Users/CreateUserPage";
import ReadUser from "./Pages/Users/ReadUser";
import UpdateUser from "./Pages/Users/UpdateUser";
import UsersHomePage from "./Pages/Users/UsersHomePage";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage from "./Pages/Users/SignUpPage";
import Login from "./components/Login";
import LeadsHomePage from "./Pages/Leads/LeadsHomePage";
import ReadLead from "./Pages/Leads/ReadLead";
function App() {
  return (
    <div className="">
      <SideBar />
      <div className="main-content">
        <Navbar />

        <Routes>
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/allusers" element={<UsersHomePage />} />
          <Route path="/adduser" element={<CreateUserPage />} />
          <Route path="/updateuser/:id" element={<UpdateUser />} />
          <Route path="/readuser/:id" element={<ReadUser />} />

          {/* Leads */}
          <Route path="/allleads" element={<LeadsHomePage />} />
          <Route path="/leaddetail" element={<ReadLead />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
