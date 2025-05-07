import React from 'react'

function About() {
   return (
      <>
         {/* Page Header Start */}
         <div className="container-fluid page-header">
            <h1 className="display-3 text-uppercase text-white mb-3">About</h1>
            <div className="d-inline-flex text-white">
               <h6 className="text-uppercase m-0"><a href>Home</a></h6>
               <h6 className="text-white m-0 px-3">/</h6>
               <h6 className="text-uppercase text-white m-0">About</h6>
            </div>
         </div>
         {/* Page Header Start */}
         {/* About Start */}
         <div className="container-fluid py-6 px-5">
            <div className="row g-5">
               <div className="col-lg-7">
                  <h1 className="display-5 text-uppercase mb-4">We are <span className="text-primary">the Leader</span> in Construction Industry</h1>
                  <h4 className="text-uppercase mb-3 text-body">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum tempor sit diam amet diam et eos labore</h4>
                  <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor</p>
                  <div className="row gx-5 py-2">
                     <div className="col-sm-6 mb-2">
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3" />Perfect Planning</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3" />Professional Workers</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3" />First Working Process</p>
                     </div>
                     <div className="col-sm-6 mb-2">
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3" />Perfect Planning</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3" />Professional Workers</p>
                        <p className="fw-bold mb-2"><i className="fa fa-check text-primary me-3" />First Working Process</p>
                     </div>
                  </div>
                  <p className="mb-4">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos labore</p>
                  <img src="img/signature.jpg" alt="" />
               </div>
               <div className="col-lg-5 pb-5" style={{ minHeight: '400px' }}>
                  <div className="position-relative bg-dark-radial h-100 ms-5">
                     <img className="position-absolute w-100 h-100 mt-5 ms-n5" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                  </div>
               </div>
            </div>
         </div>
         {/* About End */}
         {/* Appointment Start */}
         <div className="container-fluid bg-light py-6 px-5">
            <div className="row gx-5">
               <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="mb-4">
                     <h1 className="display-5 text-uppercase mb-4">Request A <span className="text-primary">Call Back</span></h1>
                  </div>
                  <p className="mb-5">Nonumy ipsum amet tempor takimata vero ea elitr. Diam diam ut et eos duo duo sed. Lorem elitr sadipscing eos et ut et stet justo, sit dolore et voluptua labore. Ipsum erat et ea ipsum magna sadipscing lorem. Sit lorem sea sanctus eos. Sanctus sit tempor dolores ipsum stet justo sit erat ea, sed diam sanctus takimata sit. Et at voluptua amet erat justo amet ea ipsum eos, eirmod accusam sea sed ipsum kasd ut.</p>
                  <a className="btn btn-primary py-3 px-5" href>Get A Quote</a>
               </div>
               <div className="col-lg-8">
                  <div className="bg-white text-center p-5">
                     <form>
                        <div className="row g-3">
                           <div className="col-12 col-sm-6">
                              <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: '55px' }} />
                           </div>
                           <div className="col-12 col-sm-6">
                              <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                           </div>
                           <div className="col-12 col-sm-6">
                              <div className="date" id="date" data-target-input="nearest">
                                 <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="Call Back Date" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                              </div>
                           </div>
                           <div className="col-12 col-sm-6">
                              <div className="time" id="time" data-target-input="nearest">
                                 <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="Call Back Time" data-target="#time" data-toggle="datetimepicker" style={{ height: '55px' }} />
                              </div>
                           </div>
                           <div className="col-12">
                              <textarea className="form-control bg-light border-0" rows={5} placeholder="Message" defaultValue={""} />
                           </div>
                           <div className="col-12">
                              <button className="btn btn-primary w-100 py-3" type="submit">Submit Request</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* Appointment End */}
         {/* Team Start */}
         <div className="container-fluid py-6 px-5">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
               <h1 className="display-5 text-uppercase mb-4">We Are <span className="text-primary">Professional &amp; Expert</span> Workers</h1>
            </div>
            <div className="row g-5">
               <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="row g-0">
                     <div className="col-10" style={{ minHeight: '300px' }}>
                        <div className="position-relative h-100">
                           <img className="position-absolute w-100 h-100" src="img/team-1.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                     </div>
                     <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                           <a className="btn" href="#"><i className="fab fa-twitter" /></a>
                           <a className="btn" href="#"><i className="fab fa-facebook-f" /></a>
                           <a className="btn" href="#"><i className="fab fa-linkedin-in" /></a>
                           <a className="btn" href="#"><i className="fab fa-instagram" /></a>
                           <a className="btn" href="#"><i className="fab fa-youtube" /></a>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="bg-light p-4">
                           <h4 className="text-uppercase">Adam Phillips</h4>
                           <span>CEO &amp; Founder</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="row g-0">
                     <div className="col-10" style={{ minHeight: '300px' }}>
                        <div className="position-relative h-100">
                           <img className="position-absolute w-100 h-100" src="img/team-2.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                     </div>
                     <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                           <a className="btn" href="#"><i className="fab fa-twitter" /></a>
                           <a className="btn" href="#"><i className="fab fa-facebook-f" /></a>
                           <a className="btn" href="#"><i className="fab fa-linkedin-in" /></a>
                           <a className="btn" href="#"><i className="fab fa-instagram" /></a>
                           <a className="btn" href="#"><i className="fab fa-youtube" /></a>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="bg-light p-4">
                           <h4 className="text-uppercase">Dylan Adams</h4>
                           <span>Civil Engineer</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="row g-0">
                     <div className="col-10" style={{ minHeight: '300px' }}>
                        <div className="position-relative h-100">
                           <img className="position-absolute w-100 h-100" src="img/team-3.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                     </div>
                     <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                           <a className="btn" href="#"><i className="fab fa-twitter" /></a>
                           <a className="btn" href="#"><i className="fab fa-facebook-f" /></a>
                           <a className="btn" href="#"><i className="fab fa-linkedin-in" /></a>
                           <a className="btn" href="#"><i className="fab fa-instagram" /></a>
                           <a className="btn" href="#"><i className="fab fa-youtube" /></a>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="bg-light p-4">
                           <h4 className="text-uppercase">Jhon Doe</h4>
                           <span>Interior Designer</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="row g-0">
                     <div className="col-10" style={{ minHeight: '300px' }}>
                        <div className="position-relative h-100">
                           <img className="position-absolute w-100 h-100" src="img/team-4.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                     </div>
                     <div className="col-2">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                           <a className="btn" href="#"><i className="fab fa-twitter" /></a>
                           <a className="btn" href="#"><i className="fab fa-facebook-f" /></a>
                           <a className="btn" href="#"><i className="fab fa-linkedin-in" /></a>
                           <a className="btn" href="#"><i className="fab fa-instagram" /></a>
                           <a className="btn" href="#"><i className="fab fa-youtube" /></a>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="bg-light p-4">
                           <h4 className="text-uppercase">Josh Dunn</h4>
                           <span>Painter</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Team End */}
      </>
   )
}

export default About