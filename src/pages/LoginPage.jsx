import "./LoginPage.css"
import Watchlogo from "../assets/Watchlogo.jpg"
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("james2@gmail.com");
    const [password, setPassword] = useState("Password1$");
    // const fullName = "ELvis Udoka";
    const navigate = useNavigate()
    const url = "https://movie-app-ch5.onrender.com/api/user/log-in";
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("Enter Details😎");
        }
        try {
            const response = await axios.post(url, {email, password});
            console.log(response);
            localStorage.setItem(
                "userData",
                JSON.stringify(response?.data?.data)
            );
            toast.success(response?.data?.message);
            setTimeout (() => {
                navigate("/");
            }, 4000);
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div className="Login">
      <div className="ImgHolder">
        <img src={Watchlogo} alt="" className="LoginImg" />
      </div>
      <div className="LoginHolder">
        <ToastContainer/>
        <div className="LoginCont">
        <h1>Login</h1>
        <input type= "Email" placeholder="Email" className="EmailLogin"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type="Password" placeholder="PasswordLogin" className="PasswordLogin"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <span  onClick={() => setShowPassword (!showPassword)}  className="Eye">
            {showPassword &&<FiEyeOff /> }
             {!showPassword && <FiEye />}
        </span>
       
        <button className="BtnLogin" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
