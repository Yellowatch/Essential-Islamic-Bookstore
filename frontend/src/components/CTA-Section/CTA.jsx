import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='container'>
        <h1>Interested in any of these books?</h1>
        <p>Send an enquiry through the contact form.</p>
        <div>
        <a href="#contact" type="button" className="btn btn-outline-dark">Enquire</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
