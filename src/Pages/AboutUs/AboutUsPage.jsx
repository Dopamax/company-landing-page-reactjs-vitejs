import React from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Layout from '../../Components/Layout/Layout'
import './AboutUsPage.css'
const AboutUsPage = () => {
  return (
    <>
        <Layout>
            <div className="aboutUsPage d-flex align-items-center">
                <AboutUs />
            </div>
        </Layout>
    </>
  )
}

export default AboutUsPage