import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <SocialLinks />
      </Container>
    </footer>
  );
};

export default Footer;
