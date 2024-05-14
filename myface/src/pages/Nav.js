import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useAuth } from "../AuthContext";

const Nav = ({ searchVal, setSearchVal }) => {
  // eslint-disable-next-line
  const { currentUser, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleNavigateToSignup = () => {
    navigate("/signup");
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Navigate to login after logout
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section>
      <Header title="My Js Blog" />
      <nav>
        <ul>
          <li>
            <form style={{ marginRight: "2%" }}>
              <input
                type="text"
                value={searchVal}
                placeholder="Search"
                onChange={(e) => setSearchVal(e.target.value)}
              />
            </form>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
            <Link to="/login">Login</Link>
            <button onClick={handleNavigateToSignup}>Signup</button>
            <button onClick={handleLogout}>Logout</button>
            
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default Nav;

