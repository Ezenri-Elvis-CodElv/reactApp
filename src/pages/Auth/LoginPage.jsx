import "./LoginPage.css";
import Watchlogo from "../../assets/Watchlogo.jpg"; 
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "https://movie-app-ch5.onrender.com/api/user/log-in";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Enter your details 😎");
    }

    try {
      const response = await axios.post(url, { email, password }, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("Login Response:", response);

      localStorage.setItem("userData", JSON.stringify(response?.data?.data));

      toast.success(response?.data?.message || "Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 5000); 

    } catch (err) {
      console.error("Login Error:", err);

      if (err.response) {
        toast.error(err.response?.data?.message || "Invalid login credentials");
      } else {
        toast.error("Something went wrong. Try again later!");
      }
    }
  };

  return (
    <div className="Login">
      <div className="ImgHolder">
        <img src={Watchlogo} alt="Logo" className="LoginImg" />
      </div>
      <div className="LoginHolder">
        <ToastContainer />
        <div className="LoginCont">
          <h1 className="h1Signup">Login</h1>
          
          <input 
            type="email" 
            placeholder="Email" 
            className="EmailLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="PasswordWrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="PasswordLogin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="Eye">
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button className="BtnLogin" onClick={handleLogin}>Login</button>
          
          <div className="NoAccount">
            <p>No Account?</p>
            <button className="signupbtn" onClick={() => navigate("/SignUp")}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;