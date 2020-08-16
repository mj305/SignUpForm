import React from 'react';
import { useForm } from "react-hook-form";

import './FormComponent.css';

const FormComponent = () => {

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);




  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-component-container">
        <div >
          
            <div className="form-pricing-container">
              <p className="form-pricing-paragraph1">
                <strong className="form-pricing-paragraph1" >Try it free 7 days</strong>
                then $20/mo. thereafter
              </p>
            </div>

            <div className="form-component-wrapper">
              
                <input className="form-component-group" placeholder="First Name*" type="text" name="firstName" ref={register({ required: true })}  />
                {errors.firstName && "First name is required"}

                <input className="form-component-group" placeholder="Last Name*" type="text" name="lastName" ref={register({ required: true })} />
                {errors.lastName && "Last name is required"}

                <input className="form-component-group" placeholder="Email*" name="email" type="text" ref={register({
                  required: "Required",
                  pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                  }})}  />
                  {errors.email && errors.email.message}

                <input className="form-component-group" placeholder="Password*" name="password" type="text" />

                    <div className="form-component-button1-wrapper">
                      <button type="submit" className="form-component-button"> Claim Your Free Trial </button>
                    </div>

                    <div className="form-component-parragraph2">
                        <p className="form-component-parragraph2" >
                              By clicking the button you are agreeing to our 
                            <a href="https://www.iubenda.com/terms-and-conditions/68783624" className="form-component-parragraph2 form-component-link1" target="blank"> Terms and Services</a>
                        </p>
                </div>
            </div>
        </div>
      </form>
    </>
  )
}

export default FormComponent
