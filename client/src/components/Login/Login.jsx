import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import login_background from "../../assets/login-background.jpeg";
import { BrowserRouter } from "react-router-dom";
import "./login.css";
import axios from "axios";
import useFetch from "../useFetch";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { data, loading, error } = useFetch("/api/isAuth");
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setuser] = useState(searchParams.get("user"));
  if (data.isAuth !== undefined && data.isAuth)
    window.location.href = "http://localhost:3000/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await axios.post("/api/login", data).then((data) => {
      if (data.data === "Successfully Authenticated")
        window.location.href = "http://localhost:3000/";
      else if (data.data === "No User Exists")
        window.location.href = "http://localhost:3000/login?user=notFound";
    });
  };
  return (
    <>
      {!data.isAuth && !loading && (
        <div className="position-absolute bg-light h-100 w-100 d-flex justify-content-start">
          <img
            src={login_background}
            alt="img"
            className="rounded-5 m-2"
            id="img"
            style={{ maxHeight: "100vh" }}
          />
          <div
            className="container-sm d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden"
            style={{ maxHeight: "100%" }}
          >
            <div
              className="d-flex flex-column align-items-center w-75 gap-4 mb-5 position-fixed"
              style={{ color: "#3A3F5D" }}
            >
              <span className="fw-bold text-capitalize fs-1">Login</span>
              <span
                className="fw-semi-bold fs-4 text-capitalize"
                style={{ color: "#D9D9D9" }}
              >
                Welcome back you've been missed
              </span>
            </div>
            <form
              className="form-group d-flex flex-column justify-content-center align-items-center position-relative gap-5 w-100"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Enter username"
                name="email"
                id="email"
                className="rounded-4 border border-0 shadow-sm"
                type="email"
                style={{
                  width: "554px",
                  height: "100px",
                  background: "#FFFFFF",
                  textIndent: "4.5%",
                }}
              />
              <input
                placeholder="Password"
                name="password"
                id="password"
                className="rounded-4 border border-0 shadow-sm"
                type="password"
                style={{
                  width: "554px",
                  height: "100px",
                  background: "#FFFFFF",
                  textIndent: "4.5%",
                }}
              />
              <p className={`text-danger ${user === null ? "d-none" : ""}`}>
                username or password incorrect !
              </p>
              <div
                class="form-check ms-2 position-relative fw-bold"
                style={{ bottom: "15px", color: "#3A3F5D", fontSize: "15px" }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label fw-semi-bold"
                  for="flexCheckDefault"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                id="btn"
                className="btn btn-primary rounded-4 fw-semi-bold"
                style={{
                  filter: "drop-shadow(0px 4px 32px rgba(58, 63, 93, 0.15))",
                  width: "554px",
                  height: "100px",
                  background: "#3E83D4",
                  height: "100px",
                  fontSize: "30px",
                }}
              >
                Login
              </button>
            </form>
            <span className="fw-semi-bold fs-4 text-capitalize bottom-0 mt-5 p-5">
              Dont have an account?{" "}
              <a
                href="/signup"
                style={{
                  color: "#3E83D4",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      )}
      {data.isAuth && (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center position-absolute">
          Is Loading...
        </div>
      )}
    </>
  );
};

export default Login;
