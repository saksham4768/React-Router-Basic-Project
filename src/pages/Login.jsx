import React from 'react'
import { Template } from '../Components/Template';
import login from "../assets/login.png";
export const Login = ({SetIsLoggedIn}) => {
  return (
    <div>
      {console.log("In login code")};
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof your career."
        image={login}
        formType="login"
        SetIsLoggedIn={SetIsLoggedIn}
      />
    </div>
  );
}

