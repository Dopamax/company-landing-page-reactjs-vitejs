import React from 'react'
import Layout from '../../Components/Layout/Layout'
import PortfolioCard from '../../Components/PortfolioCard/PortfolioCard'
import cline_pic from "../../assets/img/portfolio/page_authentification.jpg";
import frontlimcompany from "../../assets/img/portfolio/frontlimcompany.jpg"
import gestion_cabinet_2019 from "../../assets/img/portfolio/Gestion_Cabinet_Acceuil.jpg"
import gestion_assurance from "../../assets/img/portfolio/gestion_assurance.jpg"
import jobbsmaroc from "../../assets/img/portfolio/prtscreenjobbsmaroc.png"

const PortfolioPage = () => {
  return (
    <>
        <Layout>
        <div className="monbackgr p-5" id="portfolio">
                <div className="row ">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <h3 className="display-3 mytext-shadow">Portfolio</h3>
                </div>
                    
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <PortfolioCard
                         src={cline_pic}
                         titre="Cline 2020"
                         content="Application web de gestion des cabinets médicaux"
                         demo="https://youtu.be/osrQj5c66l4"
                         />
                    </div>
                    <div className="col-md-4">
                        <PortfolioCard
                        src={frontlimcompany}
                        titre="Limousine Company"
                        content="Site web pour une société de location des voitures limousine, pour un client aux états-unies"
                        demo="https://dopamax.github.io/limcompany/"
                        />
                    </div>
                    <div className="col-md-4">
                        <PortfolioCard 
                        src={gestion_cabinet_2019}
                        titre="Gestion Cabinet 2019"
                        content="Application bureau de gestion des cabinets médicaux crées en 2019. Technologies utilisées: C#.Net et Microsoft Sql Server"
                         />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <PortfolioCard
                        src={gestion_assurance}
                        titre="Gestion assurance"
                        content="Une mini application de gestion d'assurance,et d'échéances"
                        demo="https://youtu.be/8RWdvoiNvUQ"
                        />
                    </div>
                    <div className="col-md-4">
                    <PortfolioCard
                        src={jobbsmaroc}
                        titre="Jobbsmaroc"
                        content="Un site de recherche d'emploi et de recrutement, technologies utilisés: Laravel 7 et Reactjs"
                        demo="https://www.jobbsmaroc.com/"
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        </Layout>
    </>
  )
}

export default PortfolioPage