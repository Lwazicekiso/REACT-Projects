// Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { register } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/"); // redirect the user to home page after successful signup
    } catch (error) {
      // handle the error
      console.error(error.message);
    }
  };

  return (
    <section id="Signup">
        <form onSubmit={handleSignup}>
        
        <label>Email</label>
        <input value={email} 
        onChange={(e)=>
        setEmail(e.target.value) 
        }/>
        <label>Password</label>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        </form>
    </section>

  );
};

export default Signup;
