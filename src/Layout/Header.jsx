import { SERVICE_NAME } from '../Constants/AppConstants';
import Nav from './Nav';

const Header = () => (
  <header id="header">
    <a href="#content" className="skip-link" data-module="skip-link">Skip to main content</a>
    <p data-testid="serviceName">{SERVICE_NAME}</p>
    <Nav />
    <hr />
  </header>
);

export default Header;
