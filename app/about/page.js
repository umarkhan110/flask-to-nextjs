import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export default function About() {

  return (
    <>
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

        <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url(/images/carusel3.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 text-center" data-aos="fade">
              <h1 className="text-uppercase">About Us</h1>
            </div>
          </div>
        </div>

        <div className="slant-1"></div>


        <div className="site-section first-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center mt-5" data-aos="fade">
                <h2 className=" text-center font-secondary"> Company Background: </h2>
                <h2 className="site-section-heading text-center font-secondary">Medhub Tour has been dedicated to providing exceptional medical tourism services.
                  Medical procedures are significant decisions, requiring trust in professionals expertise. Our company facilitates access to top-tier specialists globally, offering a comprehensive range of services including plastic surgery (such as rhinoplasty, abdominoplasty, and reconstructive surgery), advanced hair transplantation, eye surgery, dental treatments, and more.
                  Partnering with esteemed hospitals worldwide, known for their excellence in healthcare, we prioritize patient safety and comfort, ensuring exceptional results. Attracting patients globally, our company offers competitive pricing and the assurance of top-quality care in JCI certified hospital</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12" data-aos="fade">
                <h2 className="site-section-heading text-center text-uppercase">The Team</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="100">
                <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
                <h2 className="h5 text-uppercase">Andrew Neel</h2>
                <span className="d-block mb-4">CEO, Co-Founder</span>
                <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                  <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                  <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                  <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                </p>
              </div>
              <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
                <h2 className="h5 text-uppercase">Aron Knipes</h2>
                <span className="d-block mb-4">President, Co-Founder</span>
                <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                  <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                  <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                  <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                </p>
              </div>
              <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="300">
                <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
                <h2 className="h5 text-uppercase">Tim Watkins</h2>
                <span className="d-block mb-4">CEO, Co-Founder</span>
                <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                  <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                  <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                  <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                </p>
              </div>
              <div className="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="400">
                <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded w-50 mb-4" />
                <h2 className="h5 text-uppercase">Nicole Davis</h2>
                <span className="d-block mb-4">Product Manager</span>
                <p className="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" className="p-3"><span className="icon-facebook"></span></a>
                  <a href="#" className="p-3"><span className="icon-twitter"></span></a>
                  <a href="#" className="p-3"><span className="icon-instagram"></span></a>
                  <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section section-counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid" /></p>
              </div>
              <div className="col-lg-5 ml-auto">
                <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Our spread around the world</h2>
                <p className="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi cupiditate, mollitia. </p>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="counter">
                      <span className="caption">Current Clients</span>
                      <span className="number" data-number="49020">0</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="counter">
                      <span className="caption">Services:</span>
                      <span className="number" data-number="275">0</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
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
