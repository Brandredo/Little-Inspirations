import "../CSS/Contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({});

  const { name, email, description } = formData;

  const onChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    // do stuff here with server
    sendInfoToServer();
  };

  const sendInfoToServer = async () => {
    try {
      const response = await fetch("/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="grid-container">
        <h1 className="contact-header">Contact Us</h1>

        <form className="form-container flex flex-column form-section">
          <label className="name-label" htmlFor="">
            Full Name
          </label>
          <input
            onChange={onChange}
            className="mb-4 border-1 border-gray-100 shadow-md"
            id="name"
            type="text"
            required
          />

          <label className="email-label" htmlFor="">
            Email address
          </label>
          <input
            onChange={onChange}
            className="mb-4 border-1 border-gray-100 shadow-md"
            id="email"
            type="email"
            required
          />

          <label className="description-label" htmlFor="">
            Description
          </label>
          <input
            onChange={onChange}
            className="mb-4 border-1 border-gray-100 shadow-md"
            id="description"
            type="text"
            required
          />

          <button
            className="max-w-max bg-indigo-300 submit-button"
            onClick={submitForm}
          >
            Send
          </button>
        </form>

        <div className="flex flex-col alt-controls">
          <Link to="/signup" className="text-indigo-300 create-account-link">
            Create an account
          </Link>
          <Link to="/resetpassword" className="forgot-password-link">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
