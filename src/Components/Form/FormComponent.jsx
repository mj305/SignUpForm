import React from 'react'

import './FormComponent.css';

const FormComponent = () => {

  return (
    <>
      <div className="form-component-container">
        
          <div className="form-pricing-container">
            <p className="form-pricing-paragraph1">
              <strong className="form-pricing-paragraph1" >Try it free 7 days</strong>
              then $20/mo. thereafter
            </p>
          </div>

          <div className="form-component-wrapper">
              <input className="form-component-group" placeholder="First Name" name="firstName" type="text" />
              <input className="form-component-group" placeholder="Last Name" name="lastName" type="text" />
              <input className="form-component-group" placeholder="Email Address" name="emailAddress" type="text" />
              <input className="form-component-group" placeholder="Password" name="password" type="text" />
                  <div className="form-component-button1-wrapper">
                    <button className="form-component-button"> Claim Your Free Trial </button>
                  </div>

                  <div className="form-component-parragraph2">
                      <p className="form-component-parragraph2" >
                            By clicking the button you are agreeing to our 
                          <a className="form-component-parragraph2 form-component-link1" target="blank"> Terms and Services</a>
                      </p>
              </div>
          </div>



      </div>

    </>
  )
}

export default FormComponent
