import React from 'react'
import {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import{AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';

export const LoginForm = ({SetIsLoggedIn}) => {
    const navigate = useNavigate();
    
    const[formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [showPassword , setshowPassword] = useState(false);
    function ChangeHandler(event) {
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        });
    }

    function submitHandler(event){
        {console.log("In login page code")};
        event.preventDefault();
        SetIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/Dashboard");
    }
  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <label name="email" className="w-full">
            <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
            <input required type = "email" placeholder = "Enter email address" name="email" value={formData.email}
            onChange = {ChangeHandler} className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
        </label>

        <label name="password" className="w-full relative">
            <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>
            <input required type = {showPassword ? ("text") : ("password")} placeholder = "Enter Password" name="password" 
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
            <span onClick={() => setshowPassword ((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer">
                {showPassword ?   (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)  :(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)};
            </span>
        </label>
        
        <Link to="#">
            <p className="text-xs text-blue-100 max-w-max ml-auto">
                Forgot Password
            </p>
        </Link>
        <button className="bg-yellow-50 rounded-[8px] mt-6 font-medium text-richblack-900 px-[12px] py-[8px]">
            Sign In
        </button>
    </form>
  )
}
