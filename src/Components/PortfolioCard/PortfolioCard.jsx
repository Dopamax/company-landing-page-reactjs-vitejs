import React from 'react'

const PortfolioCard = (props) => {
  return (
    <>
        <div className="myborder-card myborder-card myboxshadow-card mx-2 my-4">
            <h3 className="text-center text-white fontCentury py-1">{props.titre}</h3>
            <img className="img-fluid myborder-img-card p-1" src={props.src} alt="portfolio-pic"/>
            <div className="mycontent-card border border-dark p-2 m-2 text-justify">
                <p className="fontCentury">{props.content}</p>
            </div>
            <a className="btn btn-danger border mx-5 my-2 w-75" href={props.demo} target="_blank" rel="noopener noreferrer">Voir démo</a>
        </div>
    </>
  )
}

export default PortfolioCard