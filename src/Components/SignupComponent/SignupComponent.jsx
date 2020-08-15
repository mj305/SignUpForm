import React from 'react'

import FormComponent from '../Form/FormComponent'
import TextComponent from '../TextComponent/TextComponent'

import './SignupComponent.css'

const SignupComponent = () => {

  return (
    <>
      <div className="signup-component-container" >
        <TextComponent/>
        <FormComponent/>
      </div>
    </>
  )
}

export default SignupComponent