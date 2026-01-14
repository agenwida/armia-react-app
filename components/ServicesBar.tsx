import { Row, Col } from 'react-bootstrap';
import './ServicesBar.css';

const services = [
  {
    title: 'Web Application',
    description: 'Lorem Ipsum is simply',
    icon: '/images/web.png',
    type: 'web',
  },
  {
    title: 'SEO',
    description: 'Lorem Ipsum is simply',
    icon: '/images/seo.png',
    type: 'seo',
  },
  {
    title: 'AR/VR Solutions',
    description: 'Lorem Ipsum is simply',
    icon: '/images/arvr.png',
    type: 'arvr',
  },
  {
    title: 'Mobile Applications',
    description: 'Lorem Ipsum is simply',
    icon: '/images/mobile.png',
    type: 'mobile',
  },
];

const ServicesBar = () => (
  <section className="services-bar border-bottom">
    <div className="container-main">
      <Row>
        {services.map((s, i) => (
          <Col md={3} key={i}>
            <div className="service-item">
              <div className={`service-icon ${s.type}`}>
                <img src={s.icon} alt={s.title} />
              </div>

              <div className="service-text">
                <div className="service-title">{s.title}</div>
                <div className="service-description">{s.description}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default ServicesBar;
