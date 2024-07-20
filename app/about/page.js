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

        <div class="site-blocks-cover inner-page overlay" style={{backgroundImage: "url(/images/carusel3.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5 text-center" data-aos="fade">
              <h1 class="text-uppercase">About Us</h1>
            </div>
          </div>
        </div>

        <div class="slant-1"></div>


        <div class="site-section first-section">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-12 text-center mt-5" data-aos="fade">
                <h2 class=" text-center font-secondary"> Company Background: </h2>
                <h2 class="site-section-heading text-center font-secondary">Medhub Tour has been dedicated to providing exceptional medical tourism services.
                  Medical procedures are significant decisions, requiring trust in professionals expertise. Our company facilitates access to top-tier specialists globally, offering a comprehensive range of services including plastic surgery (such as rhinoplasty, abdominoplasty, and reconstructive surgery), advanced hair transplantation, eye surgery, dental treatments, and more.
                  Partnering with esteemed hospitals worldwide, known for their excellence in healthcare, we prioritize patient safety and comfort, ensuring exceptional results. Attracting patients globally, our company offers competitive pricing and the assurance of top-quality care in JCI certified hospital</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section bg-light">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-12" data-aos="fade">
                <h2 class="site-section-heading text-center text-uppercase">The Team</h2>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="100">
                <img src="images/person_2.jpg" alt="Image" class="img-fluid rounded w-50 mb-4" />
                <h2 class="h5 text-uppercase">Andrew Neel</h2>
                <span class="d-block mb-4">CEO, Co-Founder</span>
                <p class="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" class="p-3"><span class="icon-facebook"></span></a>
                  <a href="#" class="p-3"><span class="icon-twitter"></span></a>
                  <a href="#" class="p-3"><span class="icon-instagram"></span></a>
                  <a href="#" class="p-3"><span class="icon-linkedin"></span></a>
                </p>
              </div>
              <div class="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                <img src="images/person_3.jpg" alt="Image" class="img-fluid rounded w-50 mb-4" />
                <h2 class="h5 text-uppercase">Aron Knipes</h2>
                <span class="d-block mb-4">President, Co-Founder</span>
                <p class="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" class="p-3"><span class="icon-facebook"></span></a>
                  <a href="#" class="p-3"><span class="icon-twitter"></span></a>
                  <a href="#" class="p-3"><span class="icon-instagram"></span></a>
                  <a href="#" class="p-3"><span class="icon-linkedin"></span></a>
                </p>
              </div>
              <div class="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="300">
                <img src="images/person_4.jpg" alt="Image" class="img-fluid rounded w-50 mb-4" />
                <h2 class="h5 text-uppercase">Tim Watkins</h2>
                <span class="d-block mb-4">CEO, Co-Founder</span>
                <p class="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" class="p-3"><span class="icon-facebook"></span></a>
                  <a href="#" class="p-3"><span class="icon-twitter"></span></a>
                  <a href="#" class="p-3"><span class="icon-instagram"></span></a>
                  <a href="#" class="p-3"><span class="icon-linkedin"></span></a>
                </p>
              </div>
              <div class="col-md-6 text-center mb-5" data-aos="fade-up" data-aos-delay="400">
                <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded w-50 mb-4" />
                <h2 class="h5 text-uppercase">Nicole Davis</h2>
                <span class="d-block mb-4">Product Manager</span>
                <p class="lead">Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.</p>
                <p>
                  <a href="#" class="p-3"><span class="icon-facebook"></span></a>
                  <a href="#" class="p-3"><span class="icon-twitter"></span></a>
                  <a href="#" class="p-3"><span class="icon-instagram"></span></a>
                  <a href="#" class="p-3"><span class="icon-linkedin"></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section section-counter">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <p class="mb-5"><img src="images/img_1.jpg" alt="Image" class="img-fluid" /></p>
              </div>
              <div class="col-lg-5 ml-auto">
                <h2 class="site-section-heading mb-3 font-secondary text-uppercase">Our spread around the world</h2>
                <p class="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi cupiditate, mollitia. </p>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="counter">
                      <span class="caption">Current Clients</span>
                      <span class="number" data-number="49020">0</span>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="counter">
                      <span class="caption">Services:</span>
                      <span class="number" data-number="275">0</span>
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
