import { Navbar, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';

const AppNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <Navbar expand="md" bg="white" className="border-bottom app-navbar">
      <div className="container-wide">

        <Navbar.Brand className="fw-bold text-primary">
          LOGO
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto navbar-links">
            <Nav.Link
              active={activeLink === 'home'}
              onClick={() => setActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link>About us</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Blog</Nav.Link>

            <div className="nav-cta">
              <Button size="sm" variant="primary">
                Contact us
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
};

export default AppNavbar;
