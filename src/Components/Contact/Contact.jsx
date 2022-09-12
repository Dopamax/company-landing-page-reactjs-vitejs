import React from 'react'
import gmail_logo from "../../assets/img/gmail_logo.png";
const Contact = () => {
  return (
    <div>
        <div className="jumbotron" id="contact">
            <h3 className="text-center display-4 text-info">Contactez-nous</h3>
        </div> 
        <div className="container pb-4">
            <div className="d-flex justify-content-center flex-wrap align-content-center">
            
                <div className="p-2">
                    <img src={gmail_logo} className="float-right mx-auto img-fluid" width="100px" alt="gmail"></img>
                </div>

                <div className="p-2">
                    <h4 className="my-2 py-3 float-left back-hover text-white">contact.devbinary@gmail.com</h4>
                </div>
        
            </div>
        </div>
    </div>
  )
}

export default Contact