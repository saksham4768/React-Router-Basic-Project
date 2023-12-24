import React from 'react'
import signup from "../assets/signup.png";
import { Template } from '../Components/Template';
export const Signup = ({SetIsLoggedIn}) => {
  return (
    <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof your career."
        image={signup}
        formType="signup"
        SetIsLoggedIn={SetIsLoggedIn}
      />
  )
}

