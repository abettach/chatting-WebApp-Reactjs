import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import login_background from '../../assets/login-background.jpeg'
import { Link } from "react-router-dom";
import './login.css'
const Login = () => {
    return(
        <div className="position-absolute bg-light h-100 w-100 d-flex justify-content-start">
            <img src={login_background} alt="img" className="rounded-5"/>
            <div className="container-sm d-flex justify-content-center align-items-center position-relative">
                <div className=" position-absolute d-flex flex-column align-items-center w-50 gap-4" style={{top: "20%", right: '25%', color: "#3A3F5D"}}>
                    <span className="fw-bold text-capitalize fs-1">Login</span>
                    <span className="fw-semi-bold fs-4 text-capitalize" style={{color:'#D9D9D9'}}>Welcome back you've been missed</span>
                </div>
                <form action="" className="d-flex flex-column justify-content-center align-items-start position-relative gap-5 w-50">
                    <input placeholder="Enter username" className="rounded-4 border border-0 shadow-sm w-100" type="email" style={{width: '554px',height: '100px', background: '#FFFFFF', textIndent: '4.5%'}}/>
                    <input placeholder="Password" className="rounded-4 border border-0 shadow-sm w-100" type="password" style={{width: '554px',height: '100px', background: '#FFFFFF', textIndent: '4.5%'}}/>
                    <div class="form-check ms-2 position-relative fw-bold" style={{bottom: '15px', color: '#3A3F5D', fontSize: '15px'}}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label fw-semi-bold" for="flexCheckDefault">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-4 fw-semi-bold" style={{filter: 'drop-shadow(0px 4px 32px rgba(58, 63, 93, 0.15))', background: '#3E83D4', height: '100px', fontSize: '30px'}}>Login</button>
                </form>
      
            </div>
        </div>
    )
}

export default Login;