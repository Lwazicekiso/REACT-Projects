// Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // redirect the user to home page after successful login
    } catch (error) {
      // handle the error 
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>email</label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>Password</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
    </form>
  );
};

export default Login;
