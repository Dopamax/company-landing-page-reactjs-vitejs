import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <>
        <div className="row mx-auto ">
            <div className="col-md-12">
                <div className="form-group">
                    <label className='form-label d-flex justify-content-left text-dark mt-3' htmlFor="FullName">Full name</label>
                    <input type="text" className="form-control" name="FullName" id="FullName" />
                </div>
                <div className="form-group">
                    <label className='form-label d-flex justify-content-left text-dark mt-3' htmlFor="Email">Email</label>
                    <input type="text" className="form-control" name="Email" id="Email" />
                </div>
                <div className="form-group">
                    <label className='form-label d-flex justify-content-left text-dark mt-3' htmlFor="Subject">Subject</label>
                    <input type="text" className="form-control" name="Subject" id="Subject" />
                </div>
                <div className="form-group">
                    <label className='form-label d-flex justify-content-left text-dark mt-3' htmlFor="Message">Message</label>
                    <textarea  className="form-control" name="Message" id="Message" />
                </div>
                <button type="submit" class="btn btn-info text-white mt-4 d-flex justify-content-left">Submit</button>
            </div>
        </div>
    </>
  )
}

export default ContactForm