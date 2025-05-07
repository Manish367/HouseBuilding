import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function Header() {
   const { Logout } = useContext(AuthContext);
   const tokennn = (sessionStorage.getItem("token"));
   const parsedToken = tokennn ? JSON.parse(tokennn) : null;
   console.log(parsedToken, "parsedToken")
   return (
      <>
         {/* Topbar Start */}
         <div className="container-fluid px-5 d-none d-lg-block">
            <div className="row gx-5">
               <div className="col-lg-4 text-center py-3">
                  <div className="d-inline-flex align-items-center">
                     <i className="bi bi-geo-alt fs-1 text-primary me-3" />
                     <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Our Office</h6>
                        <span>123 Street, New York, USA</span>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 text-center border-start border-end py-3">
                  <div className="d-inline-flex align-items-center">
                     <i className="bi bi-envelope-open fs-1 text-primary me-3" />
                     <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Email Us</h6>
                        <span>info@example.com</span>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 text-center py-3">
                  <div className="d-inline-flex align-items-center">
                     <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
                     <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Call Us</h6>
                        <span>+012 345 6789</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Topbar End */}

         {/* Navbar Start */}
         <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
            <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
               <Link to="/" className="navbar-brand">
                  <h1 className="m-0 display-4 text-uppercase text-white">
                     <i className="bi bi-building text-primary me-2" />WEBUILD
                  </h1>
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto py-0">

                     {/* 👉 NEW: Dashboard Link with Icon */}

                     {parsedToken?.role === "admin" ? <Link to="/adminpanel" className="nav-item nav-link">
                        <i className="bi bi-speedometer2 me-2"></i>Dashboard
                     </Link> : ""}


                     <Link to="/" className="nav-item nav-link active">Home</Link>
                     <Link to="/About" className="nav-item nav-link">About</Link>
                     <Link to="/Service" className="nav-item nav-link">Service</Link>
                     <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                           <Link to="/Project/" className="dropdown-item">Our Project</Link>
                           <Link to="/Team" className="dropdown-item">The Team</Link>
                           <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
                           <Link to="/Blog" className="dropdown-item">Blog Grid</Link>
                           <Link to="/Detailt" className="dropdown-item">Blog Detail</Link>
                        </div>
                     </div>
                     <Link to="/Contact" className="nav-item nav-link">Contact</Link>

                     {sessionStorage.getItem("token") ? (
                        <Link onClick={Logout} className="nav-item nav-link">
                           <i className="bi bi-box-arrow-right me-2"></i>Logout
                        </Link>
                     ) : (
                        <>
                           <Link to="/Login/" className="nav-item nav-link">
                              <i className="bi bi-box-arrow-in-right me-2"></i>Login
                           </Link>
                           <Link to="/signup" className="nav-item nav-link">
                              <i className="bi bi-person-plus-fill me-2"></i>Register
                           </Link>
                        </>
                     )}
                  </div>
               </div>
            </nav>
         </div>
         {/* Navbar End */}

         {/* Optional: Nice Hover Effect */}
         <style>{`
            .nav-item .nav-link:hover {
               background-color: rgba(255, 255, 255, 0.1);
               border-radius: 5px;
               transition: 0.3s ease;
            }
         `}</style>
      </>
   );
}

export default Header;
