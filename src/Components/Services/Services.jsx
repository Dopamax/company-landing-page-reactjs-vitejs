import React from 'react'
import wordpresspng from '../../assets/img/logo-wordpress-svg.png'
import applicationweb from "../../assets/img/undraw_progressive_app_m9ms.svg";
import applicationgestion from "../../assets/img/undraw_performance_overview_p9bm.svg";
import { Col, Container, Row } from 'react-bootstrap';
import "./Services.css"
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const home=window.location.pathname;
  return (

    <Row id="services" className='full-height'>
      <h3 className='display-6 text-white my-4'>Nos services</h3>
        <Col md={12} className="d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center service-width">
            <ServiceCard 
            title="Applications de gestion" 
            picture={applicationgestion} 
            link="/" 
            description="Conception des applications de gestion des magasins, stocks, écoles, hotels..etc" />
            <ServiceCard 
            title="Développment web" 
            picture={applicationweb} 
            link={home} 
            description="Conception des applications web, avec qualité optimisé" />
            <ServiceCard 
            title="Conception Wordpress" 
            picture={wordpresspng} 
            link={home} 
            description="Conception des sites wordpress de tout genre, dans un court délais, et avec qualité" />
          </div>
  </Col>

</Row>

  )
}

export default Services