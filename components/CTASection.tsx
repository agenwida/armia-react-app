import { Container, Row, Col, Button } from 'react-bootstrap';
import './CTASection.css';

const CTASection = () => (
  <section className="py-5">
    <div className="container-main">
      <Row className="g-4 cta-row">
        <Col md={6}>
          <div className="bg-white rounded shadow-sm cta-box">
            <h4 className="cta-title">Lorem Ipsum is simply dummy text.</h4>
            <p className="cta-desc">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.
            </p>
            <div className="cta-button-wrapper">
              <Button variant="primary cta-button">
                View More
              </Button>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="bg-primary text-white rounded position-relative cta-box">
            <img
              src="../public/images/Bell Angle.png"
              className="position-absolute"
              style={{
                top: -62,
                right: 3,
                width: 120
              }}
            />
            <h4 className="cta-title">Lorem Ipsum is simply dummy text.</h4>
            <p className="cta-desc">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.
            </p>
            <div className="cta-button-wrapper">
              <Button variant="light cta-button">
                View More
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </section>
);

export default CTASection;
