import { Container, Form, Button } from 'react-bootstrap';

const Newsletter = () => (
  <section style={{ background: '#eef8ff' }} className="py-5 text-center">
    <div className="container-wide">
      <h5 className="fw-bold mb-3">
        Lorem Ipsum is simply dummy text of the printing.
      </h5>

      <Form className="d-flex justify-content-center gap-2">
        <Form.Control
          style={{ maxWidth: 280 }}
          placeholder="Enter your email"
        />
        <Button variant="dark">Subscribe</Button>
      </Form>
    </div>
  </section>
);

export default Newsletter;
