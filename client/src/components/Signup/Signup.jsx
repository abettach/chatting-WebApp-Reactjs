import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import login_background from '../../assets/login-background.jpeg'
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('here')
        const data =
        {
            first_name:e.target.first_name.value,
            last_name:e.target.last_name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        const res = await axios.post('/api/signup',data).then((res) => {console.log(res.data)});
    }
    return(
        <div className="position-absolute bg-light h-100 w-100 d-flex justify-content-start">
            <img src={login_background} alt="img" className="rounded-5"/>
            <div className="container-sm d-flex justify-content-center align-items-center position-relative">
                <div className=" position-absolute d-flex flex-column align-items-start gap-4" style={{top: "20%", right: '41%', color: "#3A3F5D"}}>
                    <span className="fw-bold text-capitalize fs-1">creat new account</span>
                    <span className="fw-semi-bold fs-4 text-capitalize">already have an account? <a href="/login" style={{cursor: 'pointer', textDecoration: 'none',color: '#3E83D4'}}>Log In</a></span>
                </div>
                <form action="" className="d-flex flex-column justify-content-center align-items-center position-relative gap-5" onSubmit={handleSubmit}>
                    <div className="position-relative  flex-nowrap">
                        <label htmlFor="FirstName" className="position-absolute ms-4 mt-3 fw-semi-bold text-black-50 ">First name</label>
                        <input type="text" name="first_name" className="rounded-4 border border-0 me-4 shadow-sm pt-3 " style={{width: '270px',height: '100px', background: '#FFFFFF', textIndent: '10%'}}/>
                        <label className="position-absolute ms-4 mt-3 text-black-50 " htmlFor="LastName">Last name</label>
                        <input className="rounded-4 border border-0 shadow-sm pt-3 " name="last_name" type="text" style={{width: '270px',height: '100px', background: '#FFFFFF', textIndent: '10%'}}/>
                    </div>
                    <label htmlFor="email" className="position-absolute text-black-50" style={{bottom: "63%", left: '5%'}}>Email</label>
                    <input className="rounded-4 border border-0 shadow-sm pt-4 w-100" name="email" type="email" style={{width: '554px',height: '100px', background: '#FFFFFF', textIndent: '4.5%'}}/>
                    <label htmlFor="Password"  className="position-absolute text-black-50" style={{bottom: "35%", left: '5%'}} >Password</label>
                    <input className="rounded-4 border border-0 shadow-sm pt-4 w-100" name="password" type="password" style={{width: '554px',height: '100px', background: '#FFFFFF', textIndent: '4.5%'}}/>
                    <button type="submit" className="btn btn-primary w-100 p-4 rounded-4 fw-semi-bold fs-4" style={{filter: 'drop-shadow(0px 4px 32px rgba(58, 63, 93, 0.15))', background: '#3E83D4'}}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;