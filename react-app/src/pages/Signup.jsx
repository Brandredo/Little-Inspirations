import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SignUp.css";
import { app } from "../firebase-config";
import firebase from "firebase/compat/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import { db } from "../../../database/connectDB";
import { toast } from "react-toastify";
import { ResetPassword } from "../pages/ResetPassword";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    street: "",
    city: "",
    zipcode: "",
    birthday: null,
    state: null,
    phone: "",
    UID: "",
  });

  const {
    fname,
    lname,
    email,
    password,
    street,
    city,
    zipcode,
    birthday,
    state,
    phone,
    UID,
  } = formData;

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

  const toggleShow = (showOrHide) => {
    setShow(!show);
    setButtonText(showOrHide);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .then(async (user) => {
        updateProfile(auth.currentUser, {
          displayName: fname + lname,
        });

        formData.UID = user.uid;

        let sendToServer = await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (sendToServer.ok) {
          toast.success("Successfully sent form data to server");
          let data = await sendToServer.json();
          toast.success(data);
        } else {
          toast.error("Couldn't send form data to server");
        }
      })
      .catch((error) => {
        toast.error("Could not register. Refresh the page and try again.");
      });
  };

  return (
    <div className="m-20 container-form flex items-center">
      <form onSubmit={onSubmit} className="form-input-container">
        <h1 className="signup-header">Sign Up</h1>

        <div className="inputs mt-10">
          <div className="input-group1 w-100 mt-3">
            <label htmlFor="" className="block fname-label">
              First Name
            </label>
            <input
              id="fname"
              className="p-1 block border-1 border-gray-200 shadow-md w-100 h-10"
              onChange={onChange}
              type="text"
              required
            />
          </div>

          <div className="input-group2 w-100 mt-3">
            <label htmlFor="" className="block lname-label">
              Last Name
            </label>
            <input
              id="lname"
              className="p-1 block border-1 border-gray-200 shadow-md w-100 h-10"
              onChange={onChange}
              type="text"
              required
            />
          </div>

          <div className="input-group3 w-100 mt-3">
            <label htmlFor="" className="block email-label">
              Email
            </label>
            <input
              id="email"
              className="p-1 block border-1 border-gray-200  shadow-md w-100 h-10"
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
              type="password"
              required
            />
          </div>

          <div className="address-group mt-3">
            <h2 className="address-section-header mt-3">Address Information</h2>

            <div className="input-group5 w-100 mt-3">
              <label htmlFor="" className="block street-label">
                Street
              </label>
              <input
                id="street"
                className="p-1 block border-1 border-gray-200  shadow-md w-100 h-10"
                onChange={onChange}
                type="text"
                required
              />
            </div>

            <div className="flex gap-2 two-input-container">
              <div className="input-group6 w-100 mt-3">
                <label htmlFor="" className="block city-label">
                  City
                </label>
                <input
                  id="city"
                  className="p-1 block border-1 border-gray-200  shadow-md w-100 h-10"
                  onChange={onChange}
                  type="text"
                  required
                />
              </div>
              <div className="input-group7 w-100 mt-3">
                <label htmlFor="" className="block zipcode-label">
                  Zip Code
                </label>
                <input
                  id="zipcode"
                  className="p-1 block border-1 border-gray-200  shadow-md w-100 h-10"
                  onChange={onChange}
                  type="text"
                  required
                />
              </div>

              <div className="input-group8 w-100 mt-3">
                <label htmlFor="" className="block state-label">
                  State
                </label>
                <select
                  onChange={onChange}
                  className="p-1 block border-1  border-gray-200 shadow-md w-100 h-10"
                  name="state"
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>

      <button
        onClick={onSubmit}
        className="signupSubmit mx-auto rounded-full px-10 py-1 m-5"
      >
        <p className="text-white signupSubmitText">Sign Up</p>
      </button>

      <div className="alternative-controls">
        <Link to="/Login" className="block alt-signup-text">
          <span className="alt-span-signup-text">Already have an account?</span>{" "}
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Signup;
