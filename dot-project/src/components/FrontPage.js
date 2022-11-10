 import './FrontPage.css';
 import five9logo from'../images/Five-Nine-Logo.jpg';
 
 function FrontPage() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Five9Website</title>
          <link rel="stylesheet" href="stylesFrontHomePage.css" />
          {/* Navbar Section */}
          <nav className="navbar">
            <div className="navbar__container">
              <a href="https://www.five9.com" id="navbar__logo"> 
                <img className="logo" src={five9logo} />
                <img src="./images/Five-Nine-Logo.jpg" className="navbar__logo" alt="" />
              </a>
              <div className="navbar__toggle" id="mobile-menu">
                <span className="bar" />
                <span className="bar" /> 
                <span className="bar" />     
              </div>
              <ul className="navbar__menu">
                <li className="navbar__item">
                  <a href="https://www.five9.com/" className="navbar__links">
                    Home 
                  </a>   
                </li>
                <li className="navbar__item">
                  <a href="/dot-project/src/components/index.html" className="navbar__links">
                    Legend 
                  </a>   
                </li>
                <li className="navbar__item">
                  <a href="https://www.five9.com/about/contact" className="navbar__links">
                    Contact 
                  </a>   
                </li>
                <li className="navbar__btn">
                  <a href="http://127.0.0.1:5500/dot-project/src/login.html" className="button">
                    Log In 
                  </a>   
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }

  export default FrontPage;