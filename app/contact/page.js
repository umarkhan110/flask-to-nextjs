import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export default function Contact() {

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
				style={{backgroundImage: "url(images/hero_2.jpg)"}}
				data-aos="fade"
				data-stellar-background-ratio="0.5">
				<div className="row align-items-center justify-content-center">
					<div className="col-md-5 text-center" data-aos="fade">
						<h1 className="text-uppercase">Contact Us</h1>
						<span className="caption d-block" 	
							><a href="/" className="text-primary">Medhub</a></span
						>
					</div>
				</div>
			</div>
			<div className="slant-1"></div>
			<div className="site-section first-section" data-aos="fade">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8 mb-5">
							<form action="/contact" method="POST" className="p-5 bg-white">
								<div className="row form-group">
									<div className="col-md-12 mb-3 mb-md-0">
										<label className="font-weight-bold" for="fullname">Full Name</label>
										<input type="text" id="fullname" name="fullname" className="form-control" placeholder="Full Name" />
									</div>
								</div>
								<div className="row form-group">
									<div className="col-md-12">
										<label className="font-weight-bold" for="email">Email</label>
										<input type="email" id="email" name="email" className="form-control" placeholder="Email Address" />
									</div>
								</div>
								<div className="row form-group">
									<div className="col-md-12 mb-3 mb-md-0">
										<label className="font-weight-bold" for="phone">Phone</label>
										<input type="text" id="phone" name="phone" className="form-control" placeholder="Phone #" />
									</div>
								</div>
								<div className="row form-group">
									<div className="col-md-12">
										<label className="font-weight-bold" for="message">Message</label>
										<textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Say hello to us"></textarea>
									</div>
								</div>
								<div className="row form-group">
									<div className="col-md-12">
										<input type="submit" value="Send Message" className="btn btn-primary text-white px-4 py-2" />
									</div>
								</div>
							</form>
							
						</div>
						<div className="col-lg-4">
							<div className="p-4 mb-3 bg-white">
								<h3 className="h5 text-black mb-3">Contact Info</h3>
								<p className="mb-0 font-weight-bold">Address</p>
								<p>
									Address
								</p>
								<p className="mb-0 font-weight-bold">Mobile</p>
								<p>Phone nr</p>
								<p className="mb-0 font-weight-bold">WhatsApp</p>
								<p>
									<a
										href="https://wa.me/+phonenr?text=I'm%20interested%20in%20your%20services%20.%20Can%20I%20have%20some%20more%20info?"
										target="_blank"
										>phone nr</a
									>
								</p>
								<p className="mb-0 font-weight-bold">
									Email Address
								</p>
								<p className="mb-0">
									<a href="mailto:"
										>email address</a
									>
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
