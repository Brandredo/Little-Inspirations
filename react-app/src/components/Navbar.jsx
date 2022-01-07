import "../CSS/Navbar.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [ isLoggedIn, setLogin ] = useState(false);
    
    const performLogin = (e) => {

        if(isLoggedIn) {
            setLogin(false);
        } else {
            setLogin(true);
        }
        
    }

    return (

        <div className="flex nav-container shadow-md">

            <div className="p-2 flex-none block px-2 m-2">
                
                <Link to="/" className="web-app-title">
                    Little Inspirations
                </Link>
            
            </div> 

            <div className="p-2 flex-1 flex justify-between px-2 mx-2 w-100">
                
                <div className="links-container">

                    <ul className="flex list-none mt-2">

                        <li className="rounded-md">
                            <Link to="/" className="hover:text-white p-2 mt-2">
                                Home
                            </Link> 
                        </li>

                        <li className="rounded-md">
                            <Link to="/about" className="hover:text-white p-2 mt-2 ">
                                About
                            </Link> 
                        </li>

                        <li className="rounded-md">

                            <Link to="/contact" className="hover:text-white p-2 mt-2 ">
                                Contact
                            </Link> 

                        </li>
                    </ul>
                </div>

                <div className="account-control-container">

                    <div className="action-buttons">
                        
                        <ul className="flex list-none m-2">

                            <li className="rounded-md">
                                <Link to="/login" className="login-control hover:text-white p-2 mt-2 ">
                                    Log In
                                </Link>
                            </li>

                            <li className="rounded-md">
                                <Link to="/signup" className="signup-control hover:text-white p-2 mt-2 ">
                                    Sign Up
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>


            </div>

        </div> 
        
        
    );



}