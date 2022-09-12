import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./MyNav.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const MyNav = () => {
    const styleback = {backgroundColor : 'black'};
    const covidtracker="https://www.bing.com/covid/";
    const greencolor={color:'lightgreen'};
  return (
    <div>
        <Navbar bg="transparent" expand="lg" style={styleback}>
        <Container>
          <Navbar.Brand href="/">
           <h3 className="text-logo m-1"><span className="badge bg-secondary border border-white">Devbinary</span></h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-uppercase">
            <Link className='text-decoration-none links links-size mx-3 py-2 px-3 my-auto' to="/">Acceuil</Link>
              <Link className='text-decoration-none links links-size mx-3 py-2 px-3 my-auto' to={"/Services"}>Services</Link>
              <Link className='text-decoration-none links links-size mx-3 py-2 px-3 my-auto' to={"/AboutUs"}>A propos</Link>
              <Link className='text-decoration-none links links-size mx-3 py-2 px-3 my-auto' to={"/Skills"}>Compétences</Link>
              <Link className="text-decoration-none bg-danger links-size mx-3 py-2 px-3 my-auto text-center border border-white text-white" to={"/Portfolio"}>Portfolio <span className="badge badge-light">1</span></Link>
              <Link className="text-decoration-none links links-size mx-3 py-2 px-3 my-auto text-center" to={covidtracker} style={greencolor} >Covid-19 tracker</Link>
              <Link className="text-decoration-none links links-size mx-3 py-2 px-3 my-auto text-center" to={"/Contact"}>Contact</Link>
              
            </Nav>
            
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default MyNav