import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-bg">
      <div className="container-main">
        <Row className="align-items-center hero-row">

          <Col md={7} className="hero-content align-items-center">
            <h1 className="hero-title">
              Experienced <span>mobile and web </span>
              applications and website builders measuring.
            </h1>

            <p className="hero-description">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              application builders measuring dozens of completed projects.
              We build and develop mobile applications for several platforms,
              including Android & iOS.
            </p>

            <div className="hero-actions">
              <Button variant="primary">Contact us</Button>
              <Button variant="outline-primary">View more</Button>
            </div>
          </Col>

          <Col md={5} className="hero-image-col">
            <img
              src="/images/hero-man.png"
              alt="Hero illustration"
              className="hero-image"
            />
          </Col>


        </Row>
      </div>
    </section>
  );
};

export default Hero;
