import React from 'react'

function Blog() {
   return (
      <>
         {/* Page Header Start */}
         <div className="container-fluid page-header">
            <h1 className="display-3 text-uppercase text-white mb-3">Blog Grid</h1>
            <div className="d-inline-flex text-white">
               <h6 className="text-uppercase m-0"><a href>Home</a></h6>
               <h6 className="text-white m-0 px-3">/</h6>
               <h6 className="text-uppercase text-white m-0">Blog Grid</h6>
            </div>
         </div>
         {/* Page Header Start */}
         {/* Blog Start */}
         <div className="container-fluid py-6 px-5">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
               <h1 className="display-5 text-uppercase mb-4">Latest <span className="text-primary">Articles</span> From Our Blog Post</h1>
            </div>
            <div className="row g-5">
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="bg-light">
                     <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                     <div className="p-4">
                        <div className="d-flex justify-content-between mb-4">
                           <div className="d-flex align-items-center">
                              <img className="rounded-circle me-2" src="img/user.jpg" width={35} height={35} alt="" />
                              <span>John Doe</span>
                           </div>
                           <div className="d-flex align-items-center">
                              <span className="ms-3"><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</span>
                           </div>
                        </div>
                        <h4 className="text-uppercase mb-3">Rebum diam clita lorem erat magna est erat</h4>
                        <a className="text-uppercase fw-bold" href>Read More <i className="bi bi-arrow-right" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-12">
                  <nav aria-label="Page navigation">
                     <ul className="pagination pagination-lg justify-content-center m-0">
                        <li className="page-item disabled">
                           <a className="page-link rounded-0" href="#" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                              <span className="sr-only">Previous</span>
                           </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                           <a className="page-link rounded-0" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                              <span className="sr-only">Next</span>
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
         {/* Blog End */}
      </>
   )
}

export default Blog