// Home.js
import React from "react";
import Footer from "./Footer";

export function Home({ posts, deletePost }) {
  return (
    <React.Fragment>
      <section id='MainSpace'>
        {posts.map(newpost => (
          <div id={newpost.title} key={newpost.id}>
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
