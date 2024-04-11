//nav.js 
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import { useRef } from "react";
const Nav = () => {
  const Search = useRef();
  return (
    <section>
    
      <Header title='MyFace'/>
      <nav> 


          <ul>
            <li>
              <form style={{marginRight:'2%',}} rel={Search}>
                <input  placeholder="Search" type="text"/>
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
              <Link to='/About'>About</Link>
              </li>
            </ul>

      </nav>

      <Outlet />
    </section>
  )
};

export default Nav;
