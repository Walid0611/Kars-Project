import React from 'react'
import './UpdateKars.css'
const UpdateKars = () => {
  return (
    <div>
    
    <section className="get-in-touch">
      <h1 className="name">Update Kars</h1>
      <form className="contact-form row">
        <div className="form-field col-lg-6">
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required=""
          />
          <label className="label" htmlFor="name">
            name
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required=""
          />
          <label className="categories" htmlFor="email">
            Categories
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="company"
            className="input-text js-input"
            type="text"
            required=""
          />
          <label className="model" htmlFor="company">
           model
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="phone"
            className="input-text js-input"
            type="text"
            required=""
          />
          
        </div>
        
        <div className="form-field col-lg-12">
          <input className="submit-btn" type="submit" defaultValue="Submit" />
        </div>
      </form>
    </section>
  
  </div>
  )
}

export default UpdateKars