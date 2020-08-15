import React from 'react'

import './FormComponent.css';

const FormComponent = () => {

  return (
    <>
    
        <div className="signup-wrapper" > 
          <h1 className="signup-header">Learn to code by watching others</h1>
          <p className="signup-paragraph" >See how experienced developers solve 
            problems in real-time. Watching scripted 
            tutorials is great, but understanding 
            how developers think is invaluable.
          </p>
        </div>

        <div>

          <div className="signup-pricing-wrapper">
            <p className="signup-pricing-background box">
              <strong className="signup-pricing-background">Try it free 7 days </strong> 
              then $20/mo. thereafter
            </p>
          </div>

          <div className="form-wrapper">
            <input className="form-group" placeholder="First Name" name="firstName" type="text" />
            <input className="form-group" placeholder="Last Name" name="lastName" type="text" />
            <input className="form-group" placeholder="Email Address" name="emailAddress" type="text" />
            <input className="form-group" placeholder="Password" name="password" type="text" />
              <div className="form-button-wrapper">
                <button className="form-button"> Claim Your Free Trial </button>
              </div>

              <div className="form-parragraph2">
                <p className="form-parragraph2" >
                  By clicking the button you are agreeing to our 
                   <a className="form-parragraph2 parragraph2-link">Terms and Services</a>
                </p>
              </div>
          </div>

        </div>

    </>
  )
}

export default FormComponent