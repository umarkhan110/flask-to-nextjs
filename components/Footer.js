const Footer = () => {
  return (
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
  )
}

export default Footer