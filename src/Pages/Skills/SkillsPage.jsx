import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Layout from '../../Components/Layout/Layout'
import Skills from '../../Components/Skills/Skills'
import './SkillsPage.css'
const SkillsPage = () => {
  return (
    <>
        <Layout>
            <Row className='skillsPage'>
                <Col><Skills /></Col>
            </Row>
        </Layout>
    </>
  )
}

export default SkillsPage