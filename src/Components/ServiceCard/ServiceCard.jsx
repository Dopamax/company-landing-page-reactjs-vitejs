import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
    <div className="card card-width p-3 mx-1 col-lg-4 col-md-6 box wow bounceInUp rendregrise" >  
    <br/>

    <h5 className="title mx-auto d-block"><a className='text-decoration-none' href={props.link}>{props.title}</a></h5>
    <img src={props.picture} className="card-img-top img-thumbnail mx-auto d-block p-4 monimage" alt="..."/>
    <div className="card-body">
    <p className="card-text">{props.description}</p>
    </div>
    </div>
    </>
  )
}

export default ServiceCard