import React from 'react'

function Detailt() {
   return (
      <>
         {/* Page Header Start */}
         <div className="container-fluid page-header">
            <h1 className="display-3 text-uppercase text-white mb-3">Blog Detail</h1>
            <div className="d-inline-flex text-white">
               <h6 className="text-uppercase m-0"><a href>Home</a></h6>
               <h6 className="text-white m-0 px-3">/</h6>
               <h6 className="text-uppercase text-white m-0">Blog Detail</h6>
            </div>
         </div>
         {/* Page Header Start */}
         {/* Blog Start */}
         <div className="container-fluid py-6 px-5">
            <div className="row g-5">
               <div className="col-lg-8">
                  {/* Blog Detail Start */}
                  <div className="mb-5">
                     <img className="img-fluid w-100 rounded mb-5" src="img/blog-2.jpg" alt="" />
                     <h1 className="text-uppercase mb-4">Diam dolor duo ipsum clita sed lorem tempor. Clita kasd diam justo diam
                        lorem sed amet sed rebum eos.</h1>
                     <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                        magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                        amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                        sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                        aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                        sit stet no diam kasd vero.</p>
                     <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                        vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                        nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                        ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                        clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                        justo dolore sit invidunt.</p>
                     <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                        invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                        lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                        rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                        sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                        lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                        sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
                  </div>
                  {/* Blog Detail End */}
                  {/* Comment List Start */}
                  <div className="mb-5">
                     <h3 className="text-uppercase mb-4">3 Comments</h3>
                     <div className="d-flex mb-4">
                        <img src="img/user.jpg" className="img-fluid" style={{ width: '45px', height: '45px' }} />
                        <div className="ps-3">
                           <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                           <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                              accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                           <button className="btn btn-sm btn-light">Reply</button>
                        </div>
                     </div>
                     <div className="d-flex mb-4">
                        <img src="img/user.jpg" className="img-fluid" style={{ width: '45px', height: '45px' }} />
                        <div className="ps-3">
                           <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                           <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                              accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                           <button className="btn btn-sm btn-light">Reply</button>
                        </div>
                     </div>
                     <div className="d-flex ms-5 mb-4">
                        <img src="img/user.jpg" className="img-fluid" style={{ width: '45px', height: '45px' }} />
                        <div className="ps-3">
                           <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                           <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                              accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                           <button className="btn btn-sm btn-light">Reply</button>
                        </div>
                     </div>
                  </div>
                  {/* Comment List End */}
                  {/* Comment Form Start */}
                  <div className="bg-light p-5">
                     <h3 className="text-uppercase mb-4">Leave a comment</h3>
                     <form>
                        <div className="row g-3">
                           <div className="col-12 col-sm-6">
                              <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{ height: '55px' }} />
                           </div>
                           <div className="col-12 col-sm-6">
                              <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{ height: '55px' }} />
                           </div>
                           <div className="col-12">
                              <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{ height: '55px' }} />
                           </div>
                           <div className="col-12">
                              <textarea className="form-control bg-white border-0" rows={5} placeholder="Comment" defaultValue={""} />
                           </div>
                           <div className="col-12">
                              <button className="btn btn-primary w-100 py-3" type="submit">Leave Your Comment</button>
                           </div>
                        </div>
                     </form>
                  </div>
                  {/* Comment Form End */}
               </div>
               {/* Sidebar Start */}
               <div className="col-lg-4">
                  {/* Search Form Start */}
                  <div className="mb-5">
                     <div className="input-group">
                        <input type="text" className="form-control p-3" placeholder="Keyword" />
                        <button className="btn btn-primary px-3"><i className="fa fa-search" /></button>
                     </div>
                  </div>
                  {/* Search Form End */}
                  {/* Category Start */}
                  <div className="mb-5">
                     <h3 className="text-uppercase mb-4">Categories</h3>
                     <div className="d-flex flex-column justify-content-start bg-light p-4">
                        <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Web Design</a>
                        <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Web Development</a>
                        <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Web Development</a>
                        <a className="h6 text-uppercase mb-4" href="#"><i className="fa fa-angle-right me-2" />Keyword Research</a>
                        <a className="h6 text-uppercase mb-0" href="#"><i className="fa fa-angle-right me-2" />Email Marketing</a>
                     </div>
                  </div>
                  {/* Category End */}
                  {/* Recent Post Start */}
                  <div className="mb-5">
                     <h3 className="text-uppercase mb-4">Recent Post</h3>
                     <div className="bg-light p-4">
                        <div className="d-flex mb-3">
                           <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                           <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                           </a>
                        </div>
                        <div className="d-flex mb-3">
                           <img className="img-fluid" src="img/blog-2.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                           <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                           </a>
                        </div>
                        <div className="d-flex mb-3">
                           <img className="img-fluid" src="img/blog-3.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                           <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                           </a>
                        </div>
                        <div className="d-flex mb-3">
                           <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                           <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                           </a>
                        </div>
                        <div className="d-flex mb-3">
                           <img className="img-fluid" src="img/blog-2.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                           <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                           </a>
                        </div>
                        <div className="d-flex">
                           <img className="img-fluid" src="img/blog-3.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                           <a href className="h6 d-flex align-items-center bg-white text-uppercase px-3 mb-0">Lorem ipsum dolor sit amet consec adipis
                           </a>
                        </div>
                     </div>
                  </div>
                  {/* Recent Post End */}
                  {/* Image Start */}
                  <div className="mb-5">
                     <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
                  </div>
                  {/* Image End */}
                  {/* Tags Start */}
                  <div className="mb-5">
                     <h3 className="text-uppercase mb-4">Tag Cloud</h3>
                     <div className="d-flex flex-wrap m-n1">
                        <a href className="btn btn-outline-dark m-1">Design</a>
                        <a href className="btn btn-outline-dark m-1">Development</a>
                        <a href className="btn btn-outline-dark m-1">Marketing</a>
                        <a href className="btn btn-outline-dark m-1">SEO</a>
                        <a href className="btn btn-outline-dark m-1">Writing</a>
                        <a href className="btn btn-outline-dark m-1">Consulting</a>
                        <a href className="btn btn-outline-dark m-1">Design</a>
                        <a href className="btn btn-outline-dark m-1">Development</a>
                        <a href className="btn btn-outline-dark m-1">Marketing</a>
                        <a href className="btn btn-outline-dark m-1">SEO</a>
                        <a href className="btn btn-outline-dark m-1">Writing</a>
                        <a href className="btn btn-outline-dark m-1">Consulting</a>
                     </div>
                  </div>
                  {/* Tags End */}
                  {/* Plain Text Start */}
                  <div>
                     <h3 className="text-uppercase mb-4">Plain Text</h3>
                     <div className="bg-light rounded text-center" style={{ padding: '30px' }}>
                        <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                        <a href className="btn btn-primary py-2 px-4">Read More</a>
                     </div>
                  </div>
                  {/* Plain Text End */}
               </div>
               {/* Sidebar End */}
            </div>
         </div>
         {/* Blog End */}
      </>
   )
}

export default Detailt