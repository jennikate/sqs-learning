import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NO_BACK_LINKS } from './Constants/AppUrlConstants';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pageWithoutBackLink = NO_BACK_LINKS.includes(pathname);

  return (
    <>
      <Header />
      <main className="main-wrapper main-wrapper--auto-spacing" id="content" role="main">
        <div className="width-container">
          <div id="content">
            {!pageWithoutBackLink
              && (
                <nav aria-label="Back link" id="backLink">
                  <a
                    href="#back"
                    className="back-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(-1);
                    }}
                  >
                    Back
                  </a>
                </nav>
              )}
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
