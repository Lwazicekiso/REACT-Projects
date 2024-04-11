// Home.js
import React from "react";
import { useEffect } from "react";
import Footer from "./Footer";

export function Home({ posts,deletePost }) {
  

  useEffect(() => {

  }, [posts]);
  return (
    <React.Fragment>
      <section id='MainSpace'>
      {posts.map(newpost => (
        <div id={newpost.title} key={newpost.id}>  {/* Set key to unique ID */}
          <h1>{newpost.title}</h1>
          <p>{newpost.content}</p>
          <button onClick={() => deletePost(newpost.id)}>Delete</button>
        </div>
      ))}
      </section>
      <Footer />
    </React.Fragment>
  );
}
