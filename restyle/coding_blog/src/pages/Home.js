// Home.js
import React, { useEffect } from "react";
import Footer from "./Footer";

export function Home({ posts }) {
  useEffect(() => {
    // You can perform any cleanup or additional logic here if needed
        <main></main>        
  }, [posts]);

  return (
    <React.Fragment>
      <section id='MainSpace'>
        {posts.map(newpost => (
          <div id='Post' key={newpost.title}>
            <h1>{newpost.title}</h1>
            <p>{newpost.content}</p>
          </div>
        ))}
      </section>
      <Footer />
    </React.Fragment>
  );
}
