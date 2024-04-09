// Home.js
import React from "react";
import Footer from "./Footer";

export function Home({ posts }) {
  
  return (
    <React.Fragment>
      <section id='MainSpace'>
        {posts.map(newpost => (
          <div id='Post' key={newpost.title}>
            <h1>{newpost.title}</h1>
            <p>{newpost.content}</p>
            <button>Delete</button>
          </div>
        ))}
      </section>
      <Footer />
    </React.Fragment>
  );
}
