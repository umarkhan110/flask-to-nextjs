import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export default function Treatments() {

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
        <div
				className="site-blocks-cover inner-page overlay"
				style={{backgroundImage: "url(/images/memorial-istanbul.jpg" }}
				data-aos="fade"
				data-stellar-background-ratio="0.5">
				<div className="row align-items-center justify-content-center">
					<div className="col-md-5 text-center" data-aos="fade">
						<h1 className="text-uppercase">Treatments</h1>
						<span className="caption d-block text-white"
							>Offered by
							<a href="/" className="text-primary">MedHub</a></span
						>
					</div>
				</div>
			</div>

			<div className="slant-1"></div>

			<div className="site-section first-section">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md-12 text-center" data-aos="fade">
							<span
								className="caption d-block mb-2 font-secondary font-weight-bold"
								>Our Treatments at</span
							>
							<h2
								className="site-section-heading text-uppercase text-center font-secondary color-medhub">
								MEDHUB
							</h2>
						</div>
					</div>
					<div className="row border-responsive">
						<div
							className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right"
							data-aos="fade-up"
							data-aos-delay="">
							<div className="text-center">
								<span
									className="display-4 d-block mb-3 text-primary"
									><img
										src="/images/hairtransplant.png"
										alt="Hair Transplant Logo"
										width="270"
										height="180"
								/></span>
								<h3 className="text-uppercase h4 mb-3 color-medhub">
									Hair Transplant
								</h3>
								<p>
									Say goodbye to hair loss with our advanced
									FUE and DHI procedures. Restore your hair
									and confidence effortlessly.
								</p>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right"
							data-aos="fade-up"
							data-aos-delay="100">
							<div className="text-center">
								<span
									className="display-4 d-block mb-3 text-primary"
									><img
										src="/images/dental-treatment.png"
										alt="Dental Treatments Logo"
										width="230"
										height="180"
								/></span>
								<h3 className="text-uppercase h4 mb-3 color-medhub">
									Dental Treatments
								</h3>
								<p>
									Access top international dental clinics
									offering veneers, orthodontics, implants,
									and more. Our partners deliver world-class
									care worldwide.
								</p>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 mb-4 mb-lg-4"
							data-aos="fade-up"
							data-aos-delay="200">
							<div className="text-center">
								<span
									className="display-4 d-block mb-3 text-primary"
									><img
										src="/images/Orthodontics.png"
										alt="Orthodontics Logo"
										width="250"
										height="180"
								/></span>
								<h3 className="text-uppercase h4 mb-3 color-medhub">
									Orthodontics
								</h3>
								<p>
									Correct misaligned teeth and jaws
									comfortably with cutting-edge technology.
									Achieve optimal oral health and a perfect
									smile.
								</p>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right"
							data-aos="fade-up"
							data-aos-delay="">
							<div className="text-center">
								<span
									className="display-4 d-block mb-3 text-primary"
									><img
										src="/images/Esthetic-Dentistry.png"
										alt="Esthetic Dentistry Logo"
										width="220"
										height="180"
								/></span>
								<h3 className="text-uppercase h4 mb-3 color-medhub">
									Esthetic Dentistry
								</h3>
								<p>
									Enhance your smile with top aesthetic
									dentistry treatments abroad, ensuring you
									always put your best self forward.
								</p>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 mb-4 mb-lg-4 border-right"
							data-aos="fade-up"
							data-aos-delay="100">
							<div className="text-center">
								<span
									className="display-4 d-block mb-3 text-primary"
									><img
										src="/images/Dental-Implant.png"
										alt="Dental Implant Logo"
										width="200"
										height="180"
								/></span>
								<h3 className="text-uppercase h4 mb-3 color-medhub">
									Dental Implant
								</h3>
								<p>
									Turn your holiday into a chance to renew
									your smile. Expert dentists offer
									affordable, high-quality dental implants.
								</p>
							</div>
						</div>
						<div
							className="col-md-6 col-lg-4 mb-4 mb-lg-4"
							data-aos="fade-up"
							data-aos-delay="200">
							<div className="text-center">
								<span
									className="display-4 d-block mb-3 text-primary"
									><img
										src="/images/Rhinoplasty.png"
										alt="Rhinoplasty Logo"
										width="200"
										height="180"
								/></span>
								<h3 className="text-uppercase h4 mb-3 color-medhub">
									Rhinoplasty
								</h3>
								<p>
									Enhance your nose&apos;s shape and function with
									rhinoplasty, improving both your appearance
									and breathing for a confident life.
								</p>
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
