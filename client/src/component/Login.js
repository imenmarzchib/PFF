import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { userLogin, userRegister } from "../js/userSlice/userSlice";
import "./login.css";

const Login = ({ping, setping}) => {

	const navigate=useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div class="generale" >
      <img  src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/01/testimonial1.png" alt=''/>
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <div class="blocc">
          
            <label  className="labL" for="chk" aria-hidden="true">
              Sign up
            </label>
            <input className="inputt"
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
            />
            <input className="inputt"
              type="text"
              name="txt"
              placeholder="User lastname"
              required=""
              onChange={(e) =>
                setRegister({ ...register, lastName: e.target.value })
              }
            />
            <input className="inputt"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <input className="inputt"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
            <button
              onClick={() => {
                dispatch(userRegister(register));
				setTimeout(() => {
					setping(!ping);
					navigate("/profile");
					
  
				  }, 1000);
              }}
            >
              Sign up
            </button>
          </div>
        </div>

        <div class="login">
          <div style={{color:""}}>
            <label  className="labL"for="chk" aria-hidden="true">
              Login
            </label>
            <input className="inputt"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
            <input className="inputt"
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <button
              onClick={() => {
                dispatch(userLogin(login));
				setTimeout(() => {
					setping(!ping);
					navigate("/profile");
					
  
				  }, 1000);
              }}
            >
              Login
            </button>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
