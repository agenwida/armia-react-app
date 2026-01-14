import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="py-5 border-top">
    <div className="container-wide">
      <Row>
        <Col md={4}>
          <strong>LOGO</strong>
          <p className="text-muted small mt-2">
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
        </Col>

        <Col md={4}>
          <strong>About us</strong>
          <ul className="list-unstyled small text-muted mt-2">
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </Col>

        <Col md={4}>
          <strong>Contact us</strong>
          <p className="text-muted small mt-2">+908 89097 890</p>
        </Col>
      </Row>

      <p className="text-center text-muted small mt-4 mb-0">
        Copyright © 2024 All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
