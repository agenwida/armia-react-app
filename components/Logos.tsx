import { Container } from 'react-bootstrap';

const Logos = () => (
  <section className="py-5 text-center">
    <div className="container-main">
      <p className="logos-text">You will be in good Company</p>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        <img src="../public/images/beneoshop.png" height={180} />
        <img src="../public/images/caspio.png" height={180} />
        <img src="../public/images/hypergrid.png" height={180} />
        <img src="../public/images/leotrippi.png" height={180} />
      </div>
    </div>
  </section>
);

export default Logos;
