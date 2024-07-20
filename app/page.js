import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export default function Home() {

  return (
    <>
      {/* <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <Navbar />
        <div className="slide-one-item home-slider owl-carousel">
          <div className="site-blocks-cover inner-page overlay" style={{ backgroundImage: "url(/images/hero1.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 text-center" data-aos="fade">
                  <h1 className="font-secondary font-weight-bold">Discover Affordable and Quality Medical Tourism Services</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="site-blocks-cover inner-page overlay" style={{ backgroundImage: "url(/images/hero2.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center" data-aos="fade">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slant-1"></div>
        <div className="site-section first-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center mt-5" data-aos="fade">
                <h2 className=" text-center font-secondary">Welcome to Medhub Tour your gateway to affordable and high-quality medical treatments abroad.</h2>
                <h2 className="site-section-heading text-center font-secondary">We specialize in connecting patients with top-notch medical facilities and experienced professionals across the globe.</h2>
              </div>
            </div>
            <div className="row border-responsive">
              <main className="carousel-container bodycarusel">
                <div className="carousel">
                  <div className="item active">
                    <img src="/images/carusel1.jpg" alt="Image 1" />
                    <p className="caption"> Health and Traveling</p>
                  </div>
                  <div className="item">
                    <img src="/images/carusel2.jpg" alt="Image 2" />
                    <p className="caption">Happy clients</p>
                  </div>
                  <div className="item">
                    <img src="/images/carusel3.jpg" alt="Image 3" />
                    <p className="caption">Best Specialists</p>
                  </div>
                </div>
                <button className="btn prev">Prev</button>
                <button className="btn next">Next</button>
                <div className="dots"></div>
              </main>

            </div>
          </div>


          {/* <!-- <div className="site-half">
    <img src="/images/carusel1.jpg" alt="dssd" className="img-bg-1">
    <div className="container">
      <div className="row no-gutters align-items-stretch">
        <div className="col-lg-5 ml-lg-auto py-5">
          <span className="caption d-block mb-2 font-secondary font-weight-bold">Outstanding Services</span>
          <h2 className="site-section-heading text-uppercase font-secondary mb-5">Clean Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>  
        </div>
      </div>
    </div>
  </div>

   <div className="site-half block">
    <img src="/images/carusel1.jpg" alt="dssd" className="img-bg-1 right">
        <div className="container">
      <div className="row no-gutters align-items-stretch">
        <div className="col-lg-5 mr-lg-auto py-5">
          <span className="caption d-block mb-2 font-secondary font-weight-bold">Easy To Use Templates</span>
          <h2 className="site-section-heading text-uppercase font-secondary mb-5">Free HTML5 Templates</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.</p>  
        </div>
      </div>
    </div>
  </div> --> */}


          <div class="site-section ">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <span class="caption d-block mb-2 font-secondary font-weight-bold"> Explore Our Services</span>
                  <h2 class="site-section-heading text-uppercase text-center font-secondary">MedHub</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 block-13 nav-direction-white">
                  <div class="nonloop-block-13 owl-carousel">
                    <a href="/hair-transplant">
                      <div class="media-image">
                        <img src="/images/dany.png" alt="Image" class="img-fluid" />
                        <div class="media-image-body">
                          <h2 class="font-secondary text-uppercase">Hair Transplant</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" class="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/dental-treatments">
                      <div class="media-image">
                        <img src="/images/person.jpg" alt="Image" class="img-fluid h-25" />

                        <div class="media-image-body">
                          <h2 class="font-secondary text-uppercase">Dental Treatments</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" class="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/orthodontics">
                      <div class="media-image">
                        <img src="/images/Mahmut.jpg" alt="Image" class="img-fluid " />

                        <div class="media-image-body">
                          <h2 class="font-secondary text-uppercase"> Orthodontics </h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" class="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/esthetic-dentistry">
                      <div class="media-image">
                        <img src="/images/person2.jpg" alt="Image" class="img-fluid" />
                        <div class="media-image-body">
                          <h2 class="font-secondary text-uppercase">Esthetic Dentistry</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" class="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/dental-implant">
                      <div class="media-image">
                        <img src="/images/Nermin.jpg" alt="Image" class="img-fluid" />

                        <div class="media-image-body">
                          <h2 class="font-secondary text-uppercase"> Dental Implant </h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" class="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/rhinoplasty">
                      <div class="media-image">
                        <img src="/images/person3.jpg" alt="Image" class="img-fluid" />

                        <div class="media-image-body">
                          <h2 class="font-secondary text-uppercase">Rhinoplasty</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" class="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* <!-- Karusel eXAMPLE
       <div className="row">
          <div className="col-md-12 block-13 nav-direction-white">
            <div className="nonloop-block-13 owl-carousel">
              <div className="media-image">
                <img src="/images/img_1.jpg" alt="Image" className="img-fluid">
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase">Dental Care</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
              </div>
              <div className="media-image">
                <img src="/images/img_2.jpg" alt="Image" className="img-fluid">

                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase">Template Under CCA 3.0 Unported</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
              </div>
              <div className="media-image">
                <img src="/images/img_3.jpg" alt="Image" className="img-fluid">

                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase">Useful Web Templates</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
              </div>
              <div className="media-image">
                <img src="/images/img_1.jpg" alt="Image" className="img-fluid">
                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase">HTML5 / CSS3</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
              </div>
              <div className="media-image">
                <img src="/images/img_4.jpg" alt="Image" className="img-fluid">

                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase">Bootstrap 4</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
              </div>
              <div className="media-image">
                <img src="/images/img_5.jpg" alt="Image" className="img-fluid">

                <div className="media-image-body">
                  <h2 className="font-secondary text-uppercase">SCSS</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    -->

  
    <!-- <div className="site-section block-14 nav-direction-white">

      <div className="container">
        
        <div className="row mb-5">
          <div className="col-md-12">
            <h2 className="site-section-heading text-center text-uppercase">Testimonials</h2>
          </div>
        </div>

        <div className="nonloop-block-14 owl-carousel">
          

            <div className="d-block block-testimony mx-auto text-center">
              <div className="person w-25 mx-auto mb-4">
                <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"> 
              </div>
              <div>
                <h2 className="h5 mb-4">Katie Johnson</h2>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
              </div>
            </div>

            <div className="d-block block-testimony mx-auto text-center">
              <div className="person w-25 mx-auto mb-4">
                 <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"> 
              </div>
              <div>
                <h2 className="h5 mb-4">Jun Mars</h2>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
              </div>
            </div>

            <div className="d-block block-testimony mx-auto text-center">
              <div className="person w-25 mx-auto mb-4">
                 <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"> 
              </div>
              <div>
                <h2 className="h5 mb-4">Shane Holmes</h2>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
              </div>
            </div>
            <div className="d-block block-testimony mx-auto text-center">
              <div className="person w-25 mx-auto mb-4">
                 <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"> 
              </div>
              <div>
                <h2 className="h5 mb-4">Mark Johnson</h2>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
              </div>
            </div>

        </div> 

      </div>
      
    </div> --> */}

          <div className="site-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12" data-aos="fade">
                  <h2 className="site-section-heading text-center text-uppercase">Recent Blog Posts</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                  <div className="media-image">
                    {/* <!-- <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"></a> --> */}
                    <div className="media-image-body">
                      <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                      <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                      <p><a href="#">Read More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                  <div className="media-image">
                    {/* <!-- <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"></a> --> */}
                    <div className="media-image-body">
                      <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                      <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                      <p><a href="#">Read More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">
                  <div className="media-image">
                    {/* <!-- <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid"></a> --> */}
                    <div className="media-image-body">
                      <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                      <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                      <p><a href="#">Read More</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />

        </div >
      </div>

      <Script src='js/jquery-3.3.1.min.js' />
      <Script src='js/jquery-migrate-3.0.1.min.js' />
      <Script src='js/jquery-ui.js' />
      <Script src='js/popper.min.js' />
      <Script src='js/bootstrap.min.js' />
      <Script src='js/owl.carousel.min.js' />
      <Script src='js/jquery.stellar.min.js' />
      <Script src='js/jquery.waypoints.min.js' />
      <Script src='js/jquery.animateNumber.min.js' />
      <Script src='js/aos.js' />
      <Script
        src="/js/main.js"
        strategy="afterInteractive"
      />
    </>
  );
}
