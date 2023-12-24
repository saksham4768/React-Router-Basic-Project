import React from 'react'
import{AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useState} from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export const Formsignup = ({SetIsLoggedIn}) => {


    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        createPassword:"",
        confirmPassword:""
    })
    const [showCreatePassword , setshowCreatePassword] = useState(false);
    const [showConfirmPassword , setshowConfirmPassword] = useState(false);
    function ChangeHandler(event){
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        });
    }
    const [AccountType, setAccountType] = useState("student");
    function submitHandler(event){
        event.preventDefault();
        if(FormData.createPassword !== FormData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        SetIsLoggedIn(true);
        toast.success("Account Created");
        const finalData = {
            ...AccountType,
            ...FormData
        }
        console.log(finalData);
        navigate("/Dashboard");
    }
  return (
    <div>
        <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button className={`${AccountType === "student" ? "bg-richblack-900 text-richblack-5 rounded-full py-2 px-5" : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`} onClick={() => setAccountType("student")}>Student</button>
            <button className={`${AccountType === "instructor" ? "bg-richblack-900 text-richblack-5 rounded-full py-2 px-5" : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`} onClick={() => setAccountType("instructor")}>Instructor</button>
        </div>

        <form onSubmit = {submitHandler}>
            <div className="flex gap-x-9 mt-4">
                <label>
                    <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                    <input type="text"
                    required
                    name="firstName"
                    placeholder="Enter first Name"
                    onChange = {ChangeHandler}
                    value = {FormData.firstName}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                </label>

                <label>
                    <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                    <input type="text"
                    required
                    name="lastName"
                    placeholder="Enter last Name"
                    onChange = {ChangeHandler}
                    value = {FormData.lastName}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                </label>
            </div>
            
            <div className="mt-[20px]">
                <label>
                    <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                    <input type="email"
                    required
                    name="email"
                    placeholder="Enter email address"
                    onChange = {ChangeHandler}
                    value ={FormData.email}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                </label>
            </div>
            
            <div className="flex gap-x-9 mt-[20px]">
                <label className="relative">
                    <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                    <input type = {showCreatePassword ? ("text") : ("password")}
                    required
                    name="createPassword"
                    placeholder="Enter Password"
                    onChange = {ChangeHandler}
                    value = {FormData.createPassword}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <span onClick={() => setshowCreatePassword ((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer">
                        {showCreatePassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className="relative">
                    <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                    <input type = {showConfirmPassword ? ("text") : ("password")}
                    required
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange = {ChangeHandler}
                    value = {FormData.confirmPassword}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <span onClick={() => setshowConfirmPassword ((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer">
                        {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
            <button className="w-full bg-yellow-50 rounded-[8px] mt-6 font-medium text-richblack-900 px-[12px] py-[8px]">Create Account</button>
        </form>
    </div>
  )
}
