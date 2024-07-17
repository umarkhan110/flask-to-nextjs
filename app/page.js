"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button>Next</button>,
    prevArrow: <button>Previous</button>,
  };
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
        <div className="site-navbar-wrap js-site-navbar bg-white">
          <div className="container">
            <div className="site-navbar bg-light">
              <div className="row align-items-center">
                <div className="col-2">
                  <h2 className="mb-0 site-logo">
                    <a href="/">

                      <img className="w-100 p-2" src="/images/Logo.png" alt="Logo" />
                    </a>
                  </h2>
                </div>
                <div className="col-10">
                  <nav className="site-navigation text-right" role="navigation">
                    <div className="container">
                      <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                      <ul className="site-menu js-clone-nav d-none d-lg-block">
                        <li className="active"><a href="/">Home</a></li>

                        <li><a href="about">About</a></li>

                        <li><a href="treatments">Treatments</a></li>
                        {/* <!-- <li><a href="blog">Blog</a></li> --> */}
                        <li><a href="contact">Contact</a></li>
                        {/* <!-- <li><a href="contact"><span className="d-inline-block bg-primary text-white btn btn-primary">Get Started</span></a></li> --> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-one-item home-slider owl-carousel">
          <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url(/images/hero1.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 text-center" data-aos="fade">
                  <h1 className="font-secondary font-weight-bold">Discover Affordable and Quality Medical Tourism Services</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url(/images/hero2.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">  <div className="container">
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
              {/* <!-- <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay=""> -->
            <!-- <div className="text-center">
              <span className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary"></span>
              <h3 className="text-uppercase h4 mb-3">Increase Revenue</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div> -->
          <!-- <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <span className="flaticon-bar-chart display-4 d-block mb-3 text-primary"></span>
              <h3 className="text-uppercase h4 mb-3">Analytics</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div> -->
          <!-- <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center">
              <span className="flaticon-medal display-4 d-block mb-3 text-primary"></span>
              <h3 className="text-uppercase h4 mb-3">3 Years Experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div> -->
          <!-- <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <span className="flaticon-box display-4 d-block mb-3 text-primary"></span>
              <h3 className="text-uppercase h4 mb-3">Free Package</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nobis?</p>
            </div>
          </div> --> */}

          
                  <Slider {...settings2} className="carousel-container">
                  <div className="item">
                    <img src="/images/carusel1.jpg" alt="Image 1" />
                    <p className="caption"> Health and Traveling</p>
                  </div>
                  <div className="item active">
                    <img src="/images/carusel2.jpg" alt="Image 2" />
                    <p className="caption">Happy clients</p>
                  </div>
                  <div className="item active">
                    <img src="/images/carusel3.jpg" alt="Image 3" />
                    <p className="caption">Best Specialists</p>
                  </div>
                  </Slider>
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


          <div className="site-section ">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <span className="caption d-block mb-2 font-secondary font-weight-bold"> Explore Our Services</span>
                  <h2 className="site-section-heading text-uppercase text-center font-secondary">MedHub</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 block-13 nav-direction-white">
                  <div className="nonloop-block-13 owl-carousel">
                  <Slider {...settings}>
                    <a href="/hair-transplant">
                      <div className="media-image">
                        <img src="/images/dany.png" alt="Image" className="img-fluid" />
                        <div className="media-image-body">
                          <h2 className="font-secondary text-uppercase">Hair Transplant</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/dental-treatments">
                      <div className="media-image">
                        <img src="/images/person.jpg" alt="Image" className="img-fluid h-25" />

                        <div className="media-image-body">
                          <h2 className="font-secondary text-uppercase">Dental Treatments</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/orthodontics">
                      <div className="media-image">
                        <img src="/images/Mahmut.jpg" alt="Image" className="img-fluid " />

                        <div className="media-image-body">
                          <h2 className="font-secondary text-uppercase"> Orthodontics </h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/esthetic-dentistry">
                      <div className="media-image">
                        <img src="/images/person2.jpg" alt="Image" className="img-fluid" />
                        <div className="media-image-body">
                          <h2 className="font-secondary text-uppercase">Esthetic Dentistry</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/dental-implant">
                      <div className="media-image">
                        <img src="/images/Nermin.jpg" alt="Image" className="img-fluid" />

                        <div className="media-image-body">
                          <h2 className="font-secondary text-uppercase"> Dental Implant </h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    <a href="/rhinoplasty">
                      <div className="media-image">
                        <img src="/images/person3.jpg" alt="Image" className="img-fluid" />

                        <div className="media-image-body">
                          <h2 className="font-secondary text-uppercase">Rhinoplasty</h2>
                          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                  <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p> --> */}
                        </div>
                      </div>
                    </a>
                    </Slider>
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

          <footer className="site-footer bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-md-0">
                  <h3 className="footer-heading mb-4 text-white">Address:</h3>
                  <p>address</p>
                  <h3 className="footer-heading mb-4 text-white">Email:</h3>
                  <p>email Address</p>
                  <h3 className="footer-heading mb-2 text-white">WhatsApp </h3>
                  <p> <a href="https://wa.me/+phonenumber?text=I'm%20interested%20in%20your%20services%20.%20Can%20I%20have%20some%20more%20info?" target="_blank">+41 764706904</a></p>
                  <h3 className="footer-heading mb-2 text-white"> Mobile: </h3>
                  <p> Phone number</p>

                </div>
                <div className="col-md-5 mb-4 mb-md-0 ml-auto">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-mb-5"><h3 className="footer-heading mb-4 text-white">Social Media:</h3></div>
                  <div className="col-mb-4">
                    <p>
                      <a href="https://www.facebook.com/" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                      <a href="https://www.instagram.com/" className="p-2"><span className="icon-instagram"></span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer >

        </div >
      </div>
      </>
      );
}
