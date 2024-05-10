import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const Nav = ({ searchVal, setSearchVal, searchFil, resetSearch }) => { // Receive props

  return (
    <section>
      <Header title='My Js Blog'/>
      <nav> 
        <ul>
          <li>
            <form style={{ marginRight: '2%', }}> 
              <input type='button' value={searchVal} placeholder="Search" onChange={e => setSearchVal(e.target.value)} type="text" />
              <button id='searchB' type='button' onClick={(e) => {searchFil();e.preventDefault()}}>Search</button>
              <button onClick={(e)=>{e.preventDefault();resetSearch()}}>Clear Search</button>  
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
