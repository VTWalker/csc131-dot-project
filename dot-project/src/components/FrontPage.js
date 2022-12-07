 import { Link } from 'react-router-dom';
 import './FrontPage.css';
 import five9logo from'../images/Five-Nine-Logo.png';
 
 function FrontPage() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Five9Website</title>
          <link rel="stylesheet" href="FrontPage.css" />
          <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
          {/* Navbar Section */}
          <nav className="navbar">
          <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
            <div className="navbar__container">
              <a href="https://www.five9.com" id="navbar__logo"> 
                <img className="logo" src={five9logo} />
                <img src="./images/Five-Nine-Logo.png" className="navbar__logo" alt="" />
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
                    Analytics
                  </a>   
                </li>
                <li className="navbar__item">
                  <a href="https://www.five9.com/about/contact" className="navbar__links">
                    Contact 
                  </a>   
                </li>
                <li className="navbar__btn">
                  <Link to="/login" className="button">
                    Log In 
                  </Link>   
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }

  export default FrontPage;