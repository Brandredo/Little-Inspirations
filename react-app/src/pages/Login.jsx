import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "../CSS/Login.css";
import { toast } from "react-toastify";
import { ResetPassword } from "../pages/ResetPassword";
import { Link } from "react-router-dom";
import UserContext from "../content/forUserContext";

function Login() {
  const globalUser = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState("Show Password");

  const changeText = () => {
    console.log("executed");
    if (show) {
      console.log(show);
      setButtonText("Hide Password");
    } else {
      console.log(show);
      setButtonText("Show Password");
    }
  };

  const toggleShow = () => {
    setShow(!show);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const token = await auth.currentUser.getIdToken();

      let response = await fetch("/login", {
        method: "POST",
        headers: {
          authtoken: token,
        },
      });

      let data = await response.json();

      if (response.ok) {
        globalUser.setUser(data);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      toast.error("Incorrect email and/or password");
    }
  };

  return (
    <div className="m-20 container-form flex items-center">
      <form onSubmit={onSubmit} className="form-input-container">
        <h1 className="login-header">Log In</h1>

        <div className="inputs mt-10">
          <div className="input-group3 w-100 mt-3">
            <label htmlFor="" className="block email-label">
              Email
            </label>
            <input
              id="email"
              className="p-1 block border-1 border-gray-200 shadow-md w-100 h-10"
              onChange={onChange}
              type="email"
              required
            />
          </div>
          <div className="input-group4 w-100 mt-3">
            <label htmlFor="" className="block password-label">
              Password
            </label>
            <input
              id="password"
              className="p-1 block border-1 border-gray-200  shadow-md w-100 h-10"
              onChange={onChange}
              type={show ? "text" : "password"}
              required
            />
          </div>

          <div className="show-pass">
            <button onClick={toggleShow}>
              {show ? "Hide Password" : "Show Password"}
            </button>
          </div>
        </div>
      </form>

      <button
        onClick={onSubmit}
        className="loginSubmit mx-auto rounded-full px-10 py-1 m-5"
      >
        <p className="text-whsite loginSubmitText">Log In</p>
      </button>

      <div className="alternative-controls">
        <Link to="/ResetPassword" className="alt-forgotpass-text block">
          Forgot Password?
        </Link>
        <Link to="/Signup" className="block alt-login-text">
          <span className="alt-span-login-text">Don't have an account?</span>{" "}
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
