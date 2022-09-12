import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Contact from '../../Components/Contact/Contact'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Layout from '../../Components/Layout/Layout'
import './ContactPage.css'
const ContactPage = () => {
  return (
    <div>
        <Layout>
            <Row className='contactPage'>
                <Col><Contact/></Col>
                <Col><ContactForm /></Col>
            </Row>
        </Layout>
    </div>
  )
}

export default ContactPage