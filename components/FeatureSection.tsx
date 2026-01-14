import { Container, Row, Col } from 'react-bootstrap';
import './FeatureSection.css';

interface Props {
  title: string;
  highlight: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const FeatureSection = ({
  title,
  highlight,
  description,
  image,
  reverse,
}: Props) => (
  <section className="feature-section">
    <div className="container-main">
      <Row
        className={`align-items-center feature-row ${reverse ? 'flex-row-reverse' : ''
          }`}
      >
        <Col md={6} className='feature-text-col'>
          <h3 className="feature-title">
            <span className="feature-highlight">{highlight}</span> {title}
          </h3>

          <p className="feature-description">{description}</p>
        </Col>

        <Col md={6} className="feature-image-col">
          <img src={image} alt="" className="feature-image" />
        </Col>
      </Row>
    </div>
  </section>
);

export default FeatureSection;
