import "./SignUp.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup4 from "../../assets/Signup4.jpeg"



const SignUp = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        agreeToTerms: false,
      });
    
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone) {
          toast.error("Enter Credentials"); 
          return;
        }
    
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match!");
          return;
        }
    
        if (!/^\d{11}$/.test(formData.phone)) {
          toast.error("Phone number must be exactly 11 digits!");
          return;
        }
    
        if (!formData.agreeToTerms) {
          toast.error("Agree to the terms and conditions!");
          return;
        }
    
        setLoading(true);
    
      
        const requestBody = {
          fullName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
        };
    
        try {
          const response = await fetch("https://movie-app-ch5.onrender.com/api/user/sign-up", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            toast.success("Signup successful...");
            setTimeout(() => {
              navigate("/LoginPage"); 
            }, 2000);
          } else {
            toast.error(result.message || "Signup failed.");
          }
        } catch (error) {
          toast.error("An error occurred. Please try again.");
        }
    
        setLoading(false);
      };
    

    
  return (
    <div className="SignUpWrapper">
        <ToastContainer />
    <div className="SignUpCover">
        <img src="src/assets/Signup8.jpeg" alt=""  className="ImageSignUp"/>
    </div>
    <div className="FormHolder">
        <form onSubmit={handleSubmit} className="SignUpForm">
            <h1 className="h1Signup">SignUp</h1>
            <div   className="SignUpInputs"> 
                <input className="SignUpName" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}  />
                <input className="SignUpName" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}  />
            </div>
            <div className="EmailSignUp">
                <input className="SignUpEmail" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  />
            </div>
            <div className="SignUp">
                <input  type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required   className="SignUpPassword"/> 
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}   className="SignUpPassword" />
                </div>
                <div className="CheckBox">

                <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange}  />
                <p>Agree to Terms and Condition</p>
                </div>
                <div className="SignUpPhone">
                  <label For="phone">
                  <input 
                  id="phone"
                  type="tel" name="phone" placeholder="Phone Number (11 digits)" value={formData.phone} onChange={handleChange}  />
                  </label>
                  
                </div>
                <div className="BtnSignUp">
                <button type="submit" disabled={loading} className="signup">
               {loading ? "Signing Up..." : "Sign Up"}
             </button>
                    
                </div>
            

        </form>
        </div>
    </div>
  )
}

export default SignUp
