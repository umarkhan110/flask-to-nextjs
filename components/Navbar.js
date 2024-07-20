const Navbar = () => {
  return (
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
  )
}

export default Navbar