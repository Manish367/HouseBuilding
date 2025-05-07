import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Detailt from "./pages/Detailt";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./pages/Signup";
import UserDetailsTable from "./pages/UserDetailTable";
import AdminDashboard from "./pages/Adminpanel";
import ContactTable from "./pages/ContactInfoTable";




function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Detailt" element={<Detailt />}></Route>
            <Route path="/Project" element={<Project />}></Route>
            <Route path="/Service" element={<Service />}></Route>
            <Route path="/Team" element={<Team />}></Route>
            <Route path="/Testimonial" element={<Testimonial />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path='/ContactTable' element={<ContactTable></ContactTable>}></Route>
            <Route path='/table' element={<UserDetailsTable></UserDetailsTable>}></Route>
            <Route path='/adminPanel' element={<AdminDashboard></AdminDashboard>}></Route>

          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
