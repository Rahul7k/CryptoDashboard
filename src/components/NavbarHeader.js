import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import Home from './Home';
import Feedback from './Feedback';
import Portfolio from './Portfolio';

function NavbarHeader() {
  return (
    <BrowserRouter>
    <div>
      <Navbar style={{backgroundColor: "#038387"}}>
        <Container>
          <Navbar.Brand as={Link} to={"/"} style={{color:"#ffffff", fontWeight:"bold"}}>
            <img
              alt=""
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CRYPTO DASHBOARD
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={"/Cryptocurrencies"} style={{color:"#ffffff"}}>TOP 100 CRYPTOS</Nav.Link>
            <Nav.Link as={Link} to={"/Portfolio"} style={{color:"#ffffff"}}>PORTFOLIO</Nav.Link>
            <Nav.Link as={Link} to={"/Feedback"} style={{color:"#ffffff"}}>FEEDBACK</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cryptocurrencies" element={<Cryptocurrencies/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Feedback" element={<Feedback/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
      
  );
}

export default NavbarHeader;