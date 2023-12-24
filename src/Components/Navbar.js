import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { toast } from 'react-hot-toast';
export const Navbar = (props) => {
    const IsLoggedIn = props.IsLoggedIn;
    const SetIsLoggedIn = props.SetIsLoggedIn;

    

    
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to = "/">
            <img src = {Logo} width={160} height={32} loading="lazy"/>
        </Link>
        <nav>
            <ul className="flex gap-x-6 text-richblack-100">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/">About</Link>
                </li>
                <li>
                    <Link to = "/">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="flex items-center gap-x-4">
            {!IsLoggedIn &&
                <Link to = "/Login">
                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                 border-rich-black-700">Log in</button>
                </Link>
            }
            {!IsLoggedIn &&
                <Link to = "/Signup">
                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                 border-rich-black-700">Sign up</button>
                </Link>
            }
            {IsLoggedIn &&
                <Link to = "/">
                <button onClick={() => {
                    SetIsLoggedIn(false);
                    toast.success("Logged Out")
                }} className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                border-rich-black-700">Log out</button>
                </Link>
            }
            {IsLoggedIn &&
                <Link to = "/Dashboard">
                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                 border-rich-black-700">Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}
